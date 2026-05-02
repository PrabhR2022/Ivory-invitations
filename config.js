// ──────────────────────────────────────────────────────────────
// Ivory · Supabase configuration
//
// The publishable key below is SAFE to commit and expose publicly.
// It is the new replacement for the legacy "anon" key — designed for
// client-side use. All security is enforced by Row-Level Security
// policies on the Supabase tables (see supabase/migrations/*.sql).
//
// NEVER commit the secret key (sb_secret_*). That key has admin-level
// database access and must only live in server-side environments
// (Supabase Edge Functions, scripts you run locally, etc.).
// ──────────────────────────────────────────────────────────────

window.IVORY_CONFIG = {
  supabaseUrl: 'https://sfatraifbnvgelkhpgec.supabase.co',
  supabaseAnonKey: 'sb_publishable_cUqkSPsQtW2ocjbtvwqNGg_wU6ixiet'
};
