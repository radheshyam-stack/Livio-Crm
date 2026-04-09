create table if not exists public.app_state (
  id text primary key,
  data jsonb not null default '{}'::jsonb
);

insert into public.app_state (id, data)
values ('main', '{"projects":[],"activeId":null,"activeProjectId":null}'::jsonb)
on conflict (id) do nothing;
