let supabaseClient = null;

function hasSupabaseConfig() {
  return !!(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

function getSupabaseAdmin() {
  if (!hasSupabaseConfig()) return null;

  if (!supabaseClient) {
    const { createClient } = require('@supabase/supabase-js');
    supabaseClient = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    );
  }

  return supabaseClient;
}

function getSupabaseConfig() {
  return {
    bucket: process.env.SUPABASE_STORAGE_BUCKET || 'uploads',
    rowId: process.env.SUPABASE_DB_ROW_ID || 'main',
    table: process.env.SUPABASE_DB_TABLE || 'app_state'
  };
}

module.exports = {
  getSupabaseAdmin,
  getSupabaseConfig,
  hasSupabaseConfig
};
