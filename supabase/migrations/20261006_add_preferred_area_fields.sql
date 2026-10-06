-- Add structured preferred locality and venue details to existing enquiries.
-- Safe to run on projects where the enquiries table already exists.
alter table public.enquiries add column if not exists preferred_area text;
alter table public.enquiries add column if not exists custom_area text;
alter table public.enquiries add column if not exists venue_address text;
