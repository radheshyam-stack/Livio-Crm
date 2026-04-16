const nodemailer = require('nodemailer');

const RESEND_API_BASE = 'https://api.resend.com';
const DEFAULT_REPLY_TO = String(process.env.EMAIL_REPLY_TO || 'ap@golivio.com').trim();

function getEmailProvider() {
  if (String(process.env.RESEND_API_KEY || '').trim()) return 'resend';
  if (String(process.env.SMTP_USER || '').trim() && String(process.env.SMTP_PASS || '').trim()) return 'smtp';
  return null;
}

function getEmailStatusData() {
  const provider = getEmailProvider();

  if (provider === 'resend') {
    const fromAddress = String(process.env.EMAIL_FROM_ADDRESS || 'onboarding@resend.dev').trim();
    return {
      configured: true,
      provider,
      apiBase: RESEND_API_BASE,
      fromAddress,
      message: 'Resend email service configured - ready to send'
    };
  }

  if (provider === 'smtp') {
    return {
      configured: true,
      provider,
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      user: process.env.SMTP_USER,
      message: 'SMTP configured - ready to send'
    };
  }

  return {
    configured: false,
    provider: null,
    message: 'Email service not configured - set RESEND_API_KEY or SMTP credentials in the backend environment'
  };
}

function normalizeSmtpConfig(cfg = {}) {
  const host = String(cfg.host || process.env.SMTP_HOST || 'smtp.gmail.com').trim();
  const port = Number(cfg.port || process.env.SMTP_PORT || 587);
  const secure = cfg.secure !== undefined ? cfg.secure : (process.env.SMTP_SECURE === 'true');
  const user = String(cfg.user || process.env.SMTP_USER || '').trim();
  let pass = String(cfg.pass || process.env.SMTP_PASS || '').trim();

  if (/gmail\.com$/i.test(host)) {
    pass = pass.replace(/\s+/g, '');
  }

  return { host, port, secure, user, pass };
}

function getFromIdentity(fromName) {
  const provider = getEmailProvider();
  const displayName = fromName || process.env.EMAIL_FROM_NAME || 'Livio Building Systems';
  const smtpUser = normalizeSmtpConfig({}).user;
  const fromAddress = String(
    process.env.EMAIL_FROM_ADDRESS ||
    (provider === 'resend' ? 'onboarding@resend.dev' : smtpUser)
  ).trim();

  return {
    fromName: displayName,
    fromAddress,
    from: `${displayName} <${fromAddress}>`
  };
}

function getReplyToAddress(replyTo) {
  const value = String(replyTo || DEFAULT_REPLY_TO || '').trim();
  return value || undefined;
}

function parseEmailList(value) {
  if (!value) return [];
  if (Array.isArray(value)) {
    return value.map((item) => String(item || '').trim()).filter(Boolean);
  }

  return String(value)
    .split(/[;,]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizeAttachments(value) {
  if (!Array.isArray(value)) return [];

  return value
    .map((item) => {
      if (!item || typeof item !== 'object') return null;

      const filename = String(item.filename || 'attachment').trim();
      const contentType = String(item.contentType || 'application/octet-stream').trim();
      let content = String(item.content || '').trim();

      if (!content) return null;

      const dataUriMatch = content.match(/^data:.*?;base64,(.+)$/i);
      if (dataUriMatch) content = dataUriMatch[1];

      return {
        filename,
        contentType,
        content
      };
    })
    .filter(Boolean);
}

function friendlyEmailError(err) {
  const msg = String(err?.message || '').trim();
  const code = String(err?.code || '').trim();

  if (code === 'EAUTH') return 'SMTP authentication failed. Check SMTP_USER and SMTP_PASS. For Gmail, use an App Password.';
  if (code === 'ETIMEDOUT' || /timed out/i.test(msg)) return 'Email service connection timed out. Check provider access and network settings.';
  if (code === 'ESOCKET' || /certificate|ssl|tls/i.test(msg)) return 'SMTP TLS/SSL connection failed. Check SMTP_SECURE and provider settings.';
  if (/invalid login|username and password not accepted/i.test(msg)) return 'SMTP login was rejected. For Gmail or Google Workspace, use an App Password.';
  if (/api key/i.test(msg) && /resend/i.test(msg)) return 'Resend API key is invalid or missing.';
  if (/domain/i.test(msg) && /verify/i.test(msg)) return 'Resend sender domain is not verified yet. Use onboarding@resend.dev for testing or verify your domain.';

  return msg || 'Failed to send email';
}

function buildTransporter(cfg) {
  const smtp = normalizeSmtpConfig(cfg);
  return nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    auth: {
      user: smtp.user,
      pass: smtp.pass
    },
    tls: { rejectUnauthorized: false },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 20000
  });
}

async function resendRequest(path, options = {}) {
  const apiKey = String(process.env.RESEND_API_KEY || '').trim();
  if (!apiKey) throw new Error('Resend API key is missing.');

  const res = await fetch(`${RESEND_API_BASE}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      ...(options.headers || {})
    }
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const message = data?.message || data?.error || `Resend request failed (${res.status})`;
    throw new Error(String(message));
  }

  return data;
}

async function sendViaResend({ to, cc, subject, message, fromName, replyTo, attachments }) {
  const recipients = parseEmailList(to);
  if (!recipients.length) throw new Error('Recipient email (to) is required');

  const ccList = parseEmailList(cc);
  const { from } = getFromIdentity(fromName);
  const attachmentList = normalizeAttachments(attachments);

  const payload = {
    from,
    to: recipients,
    subject,
    text: message,
    html: `<pre style="font-family:Arial,sans-serif;font-size:13px;white-space:pre-wrap;line-height:1.7">${escapeHtml(message)}</pre>`
  };

  if (ccList.length) payload.cc = ccList;
  const normalizedReplyTo = getReplyToAddress(replyTo);
  if (normalizedReplyTo) payload.reply_to = normalizedReplyTo;
  if (attachmentList.length) {
    payload.attachments = attachmentList.map((item) => ({
      filename: item.filename,
      content: item.content
    }));
  }

  const data = await resendRequest('/emails', {
    method: 'POST',
    body: JSON.stringify(payload)
  });

  return {
    ok: true,
    provider: 'resend',
    messageId: data.id,
    accepted: recipients,
    message: `Email sent successfully to ${recipients.join(', ')}`
  };
}

async function sendViaSmtp({ to, cc, subject, message, fromName, replyTo, smtpOverride, attachments }) {
  const smtp = normalizeSmtpConfig(smtpOverride || {});
  const smtpUser = smtp.user;
  if (!smtpUser) {
    throw new Error('SMTP not configured - set SMTP_USER and SMTP_PASS in backend environment');
  }

  const transporter = buildTransporter(smtp);
  const { from } = getFromIdentity(fromName);
  const attachmentList = normalizeAttachments(attachments);

  const normalizedReplyTo = getReplyToAddress(replyTo);
  const mailOptions = {
    from,
    to,
    cc: cc || undefined,
    replyTo: normalizedReplyTo,
    subject,
    text: message,
    html: `<pre style="font-family:Arial,sans-serif;font-size:13px;white-space:pre-wrap;line-height:1.7">${escapeHtml(message)}</pre>`,
    attachments: attachmentList.map((item) => ({
      filename: item.filename,
      content: item.content,
      encoding: 'base64',
      contentType: item.contentType
    }))
  };

  const info = await transporter.sendMail(mailOptions);

  return {
    ok: true,
    provider: 'smtp',
    messageId: info.messageId,
    accepted: info.accepted,
    message: 'Email sent successfully to ' + to
  };
}

async function sendEmail(req, res) {
  try {
    const { to, cc, subject, message, fromName, replyTo, smtpOverride, attachments } = req.body || {};

    if (!to) return res.status(400).json({ error: 'Recipient email (to) is required' });
    if (!subject) return res.status(400).json({ error: 'Subject is required' });
    if (!message) return res.status(400).json({ error: 'Message body is required' });

    const provider = getEmailProvider();
    if (!provider) {
      return res.status(500).json({
        error: 'Email service is not configured. Set RESEND_API_KEY or SMTP credentials on the backend.'
      });
    }

    const result = provider === 'resend'
      ? await sendViaResend({ to, cc, subject, message, fromName, replyTo, attachments })
      : await sendViaSmtp({ to, cc, subject, message, fromName, replyTo, smtpOverride, attachments });

    return res.json(result);
  } catch (err) {
    console.error('Email send error:', err);
    return res.status(500).json({
      error: friendlyEmailError(err),
      details: err.response || null
    });
  }
}

async function verifyEmailService(req, res) {
  try {
    const provider = getEmailProvider();

    if (provider === 'resend') {
      await resendRequest('/domains', { method: 'GET' });
      return res.json({
        ok: true,
        provider,
        message: 'Resend API connection verified successfully'
      });
    }

    if (provider === 'smtp') {
      const { smtpOverride } = req.body || {};
      const smtp = normalizeSmtpConfig(smtpOverride || {});
      if (!smtp.user || !smtp.pass) {
        return res.status(400).json({ ok: false, provider, error: 'SMTP_USER and SMTP_PASS are required on the backend.' });
      }

      const transporter = buildTransporter(smtp);
      await transporter.verify();
      return res.json({
        ok: true,
        provider,
        message: 'SMTP connection verified successfully'
      });
    }

    return res.status(400).json({
      ok: false,
      provider: null,
      error: 'Email service is not configured. Set RESEND_API_KEY or SMTP credentials on the backend.'
    });
  } catch (err) {
    return res.status(400).json({
      ok: false,
      provider: getEmailProvider(),
      error: friendlyEmailError(err)
    });
  }
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

module.exports = {
  getEmailProvider,
  getEmailStatusData,
  sendEmail,
  verifyEmailService
};
