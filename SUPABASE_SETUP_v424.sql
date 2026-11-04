-- Run once in LiftLog Supabase SQL Editor before deploying v4.24.
create table if not exists public.liftlog_profiles (
 user_id uuid primary key references auth.users(id) on delete cascade,
 goals text not null default '',
 overrides jsonb not null default '{}'::jsonb,
 updated_at timestamptz not null default now()
);
create table if not exists public.liftlog_rest_days (
 user_id uuid not null references auth.users(id) on delete cascade,
 date date not null,
 is_rest boolean not null,
 updated_at timestamptz not null default now(),
 primary key(user_id,date)
);
alter table public.liftlog_profiles enable row level security;
alter table public.liftlog_rest_days enable row level security;
revoke all on public.liftlog_profiles from anon;
revoke all on public.liftlog_rest_days from anon;
grant select,insert,update on public.liftlog_profiles to authenticated;
grant select,insert,update on public.liftlog_rest_days to authenticated;
drop policy if exists liftlog_profiles_own on public.liftlog_profiles;
create policy liftlog_profiles_own on public.liftlog_profiles for all to authenticated
 using ((select auth.uid())=user_id) with check ((select auth.uid())=user_id);
drop policy if exists liftlog_rest_days_own on public.liftlog_rest_days;
create policy liftlog_rest_days_own on public.liftlog_rest_days for all to authenticated
 using ((select auth.uid())=user_id) with check ((select auth.uid())=user_id);
