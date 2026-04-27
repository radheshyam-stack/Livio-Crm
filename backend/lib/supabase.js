let supabaseAdmin = null;

function hasSupabaseConfig() {
  return !!(
    process.env.SUPABASE_URL &&
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );
}

function getSupabaseConfig() {
  return {
    url: process.env.SUPABASE_URL || '',
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || '',
    bucket: process.env.SUPABASE_STORAGE_BUCKET || 'uploads'
  };
}

function getSupabaseAdmin() {
  if (!hasSupabaseConfig()) return null;

  if (!supabaseAdmin) {
    const { createClient } = require('@supabase/supabase-js');
    const { url, serviceRoleKey } = getSupabaseConfig();
    supabaseAdmin = createClient(url, serviceRoleKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false
      }
    });
  }

  return supabaseAdmin;
}

module.exports = {
  hasSupabaseConfig,
  getSupabaseAdmin,
  getSupabaseConfig
};
