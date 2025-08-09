-- Enable required extensions
create extension if not exists pg_cron with schema extensions;
create extension if not exists pg_net with schema extensions;

-- Unschedule previous job if it exists (safe to run even if it doesn't)
select cron.unschedule('keepalive-every-30-min');

-- Schedule an internal keepalive every 30 minutes that pings PostgREST
select
  cron.schedule(
    'keepalive-every-30-min',
    '*/30 * * * *',
    $$
    select
      net.http_get(
        url:='https://zjrwvcdjbypdxldtcaws.supabase.co/rest/v1/form_submissions?select=id&limit=1',
        headers:='{
          "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpqcnd2Y2RqYnlwZHhsZHRjYXdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxNzI0MjksImV4cCI6MjA2MTc0ODQyOX0.5vNVgdgcep_0v_B8aLeyAKZwioKLENBO895_V4QZVk8",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpqcnd2Y2RqYnlwZHhsZHRjYXdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxNzI0MjksImV4cCI6MjA2MTc0ODQyOX0.5vNVgdgcep_0v_B8aLeyAKZwioKLENBO895_V4QZVk8"
        }'::jsonb
      ) as request_id;
    $$
  );