-- Pricing catalogue storage.
-- Admin access is granted only to authenticated users whose app_metadata.role is 'admin'.
-- Public users may read active rows; public clients cannot insert, update or delete prices.

create table if not exists public.pricing_services (
  id text primary key,
  name text not null,
  category text not null,
  duration_minutes integer not null check (duration_minutes > 0),
  city_prices jsonb not null default '{}'::jsonb,
  summary text not null default '',
  includes jsonb not null default '[]'::jsonb,
  mode text not null default 'Assessment',
  service_slug text,
  active boolean not null default true,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id)
);

create table if not exists public.pricing_packages (
  id text primary key,
  name text not null,
  sessions integer not null check (sessions > 0),
  validity_days integer not null check (validity_days > 0),
  savings_percent numeric(5,2) not null default 0 check (savings_percent >= 0 and savings_percent <= 100),
  description text not null default '',
  active boolean not null default true,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id)
);

alter table public.pricing_services enable row level security;
alter table public.pricing_packages enable row level security;

drop policy if exists "Public can read active pricing services" on public.pricing_services;
create policy "Public can read active pricing services"
  on public.pricing_services for select
  using (active = true);

drop policy if exists "Admins manage pricing services" on public.pricing_services;
create policy "Admins manage pricing services"
  on public.pricing_services for all to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
  with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

drop policy if exists "Public can read active pricing packages" on public.pricing_packages;
create policy "Public can read active pricing packages"
  on public.pricing_packages for select
  using (active = true);

drop policy if exists "Admins manage pricing packages" on public.pricing_packages;
create policy "Admins manage pricing packages"
  on public.pricing_packages for all to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
  with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

create index if not exists pricing_services_active_category_idx
  on public.pricing_services (active, category);
create index if not exists pricing_packages_active_idx
  on public.pricing_packages (active);
