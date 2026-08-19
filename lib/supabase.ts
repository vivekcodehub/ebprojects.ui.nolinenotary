import { createClient } from "@supabase/supabase-js";

function createSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY. Add them to .env.local — see README."
    );
  }

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: { persistSession: false },
  });
}

let client: ReturnType<typeof createSupabaseAdmin> | null = null;

/**
 * Server-only client using the service role key.
 * NEVER import this file from a "use client" component — the service role
 * key bypasses row-level security and must stay on the server.
 *
 * Built lazily so a missing env var throws *inside* the request handler,
 * where the route's try/catch can turn it into a clean JSON error. Building
 * it at import time instead crashes the whole route module, and the browser
 * gets an HTML error page that fetch().json() can't parse.
 */
export function getSupabaseAdmin() {
  if (!client) client = createSupabaseAdmin();
  return client;
}
