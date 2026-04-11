// ── Email Controller — Nodemailer ─────────────────────────────
// Sends emails directly from the server using SMTP (Gmail, Outlook, etc.)
// No third-party browser SDKs needed.

const nodemailer = require('nodemailer');

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

function friendlyEmailError(err) {
  const msg = String(err?.message || '').trim();
  const code = String(err?.code || '').trim();

  if (code === 'EAUTH') return 'SMTP authentication failed. Check SMTP_USER and SMTP_PASS. For Gmail, use an App Password.';
  if (code === 'ETIMEDOUT' || /timed out/i.test(msg)) return 'SMTP connection timed out. Check SMTP host, port, and provider access.';
  if (code === 'ESOCKET' || /certificate|ssl|tls/i.test(msg)) return 'SMTP TLS/SSL connection failed. Check SMTP_SECURE and provider settings.';
  if (/invalid login|username and password not accepted/i.test(msg)) return 'SMTP login was rejected. For Gmail or Google Workspace, use an App Password.';

  return msg || 'Failed to send email';
}

/** Build transporter from .env or request-supplied config */
function buildTransporter(cfg) {
  const smtp = normalizeSmtpConfig(cfg);
  return nodemailer.createTransport({
    host:   smtp.host,
    port:   smtp.port,
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

/**
 * Send an email.
 * Body: { to, cc, subject, message, fromName, replyTo, smtpOverride? }
 */
async function sendEmail(req, res) {
  try {
    const { to, cc, subject, message, fromName, replyTo, smtpOverride } = req.body;

    if (!to)      return res.status(400).json({ error: 'Recipient email (to) is required' });
    if (!subject) return res.status(400).json({ error: 'Subject is required' });
    if (!message) return res.status(400).json({ error: 'Message body is required' });

    const smtp = normalizeSmtpConfig(smtpOverride || {});
    const smtpUser = smtp.user;
    if (!smtpUser) return res.status(500).json({ error: 'SMTP not configured — set SMTP_USER and SMTP_PASS in backend/.env' });

    const transporter = buildTransporter(smtp);

    const fromAddress = `${fromName || process.env.EMAIL_FROM_NAME || 'Livio Building Systems'} <${process.env.EMAIL_FROM_ADDRESS || smtpUser}>`;

    const mailOptions = {
      from:     fromAddress,
      to:       to,
      cc:       cc || undefined,
      replyTo:  replyTo || undefined,
      subject:  subject,
      text:     message,
      // Also send as basic HTML (preserves line breaks)
      html:     `<pre style="font-family:Arial,sans-serif;font-size:13px;white-space:pre-wrap;line-height:1.7">${escapeHtml(message)}</pre>`
    };

    const info = await transporter.sendMail(mailOptions);

    return res.json({
      ok:        true,
      messageId: info.messageId,
      accepted:  info.accepted,
      message:   'Email sent successfully to ' + to
    });

  } catch (err) {
    console.error('Email send error:', err);
    return res.status(500).json({
      error:   friendlyEmailError(err),
      details: err.response || null
    });
  }
}

/**
 * Verify SMTP credentials without sending.
 * Body: { smtpOverride? }
 */
async function verifySmtp(req, res) {
  try {
    const { smtpOverride } = req.body || {};
    const smtp = normalizeSmtpConfig(smtpOverride || {});
    if (!smtp.user || !smtp.pass) {
      return res.status(400).json({ ok: false, error: 'SMTP_USER and SMTP_PASS are required on the backend.' });
    }
    const transporter = buildTransporter(smtp);
    await transporter.verify();
    return res.json({ ok: true, message: 'SMTP connection verified successfully' });
  } catch (err) {
    return res.status(400).json({ ok: false, error: friendlyEmailError(err) });
  }
}

function escapeHtml(str) {
  return (str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

module.exports = { sendEmail, verifySmtp };
