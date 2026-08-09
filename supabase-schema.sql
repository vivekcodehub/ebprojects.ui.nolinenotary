-- Run this in Supabase: Dashboard > SQL Editor > New query > paste > Run

create table if not exists bookings (
  id uuid primary key default gen_random_uuid(),
  booking_date date not null,        -- e.g. 2026-08-02
  booking_time text not null,        -- e.g. "09:00"
  full_name text not null,
  email text not null,
  second_signer_email text,
  phone text not null,
  message text,
  created_at timestamptz not null default now(),

  -- This is what actually prevents double-booking: the database itself
  -- will reject a second insert for the same date+time, even if two
  -- requests arrive at the exact same instant.
  unique (booking_date, booking_time)
);

-- Allow the server (using the service role key) to read/write freely.
-- Row Level Security stays enabled but only the service role bypasses it —
-- the anon/public key gets no access, which is what we want since all
-- writes happen through your API route, never directly from the browser.
alter table bookings enable row level security;
