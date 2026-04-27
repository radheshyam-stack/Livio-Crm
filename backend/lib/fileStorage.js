const { hasSupabaseConfig, getSupabaseAdmin, getSupabaseConfig } = require('./supabase');

let r2Client = null;

function hasR2Config() {
  return !!(
    process.env.CF_R2_ACCOUNT_ID &&
    process.env.CF_R2_ACCESS_KEY_ID &&
    process.env.CF_R2_SECRET_ACCESS_KEY &&
    process.env.CF_R2_BUCKET
  );
}

function getR2Config() {
  return {
    accountId: process.env.CF_R2_ACCOUNT_ID,
    accessKeyId: process.env.CF_R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.CF_R2_SECRET_ACCESS_KEY,
    bucket: process.env.CF_R2_BUCKET,
    publicBaseUrl: process.env.CF_R2_PUBLIC_BASE_URL || ''
  };
}

function getR2Client() {
  if (!hasR2Config()) return null;

  if (!r2Client) {
    const { S3Client } = require('@aws-sdk/client-s3');
    const { accountId, accessKeyId, secretAccessKey } = getR2Config();
    r2Client = new S3Client({
      region: 'auto',
      endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId,
        secretAccessKey
      }
    });
  }

  return r2Client;
}

function getFileStorageDriver() {
  const explicitDriver = (process.env.FILE_STORAGE_DRIVER || '').trim().toLowerCase();

  if (explicitDriver === 'local') return 'local';
  if (explicitDriver === 'r2' && hasR2Config()) return 'r2';
  if (explicitDriver === 'supabase' && hasSupabaseConfig()) return 'supabase';

  if (hasR2Config()) return 'r2';
  if (hasSupabaseConfig()) return 'supabase';
  return 'local';
}

module.exports = {
  getFileStorageDriver,
  getR2Client,
  getR2Config,
  getSupabaseAdmin,
  getSupabaseConfig,
  hasR2Config,
  hasSupabaseConfig
};
