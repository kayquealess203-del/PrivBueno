create table if not exists users (id uuid primary key, email text not null unique, name text not null, created_at timestamptz not null default now());
create table if not exists posts (id uuid primary key, title text not null, category text not null, body text not null, media_key text, published boolean not null default false, views integer not null default 0, created_at timestamptz not null default now());
create table if not exists favorites (user_id uuid not null references users(id) on delete cascade, post_id text not null, primary key(user_id,post_id));
create table if not exists subscriptions (user_id uuid primary key references users(id) on delete cascade, expires_at timestamptz not null, cancelled boolean not null default false);
create table if not exists plans (months integer primary key, price integer not null);
create table if not exists coupons (code text primary key, discount integer not null);
create table if not exists messages (id uuid primary key, user_id uuid not null references users(id) on delete cascade, email text not null, subject text not null, body text not null, created_at timestamptz not null default now());
