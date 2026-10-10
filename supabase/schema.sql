-- Run this once in the Supabase SQL editor after creating the free project.
-- Row level security stays on with no public policies, so the browser cannot
-- read or write inquiries. The Next.js server uses the service role key,
-- which bypasses these policies.

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.inquiries enable row level security;
