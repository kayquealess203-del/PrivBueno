# Publicação na Vercel

1. Importe este repositório na Vercel como um projeto Next.js.
2. Crie um projeto no Supabase e execute o arquivo `supabase/schema.sql` no SQL Editor.
3. Em **Vercel > Settings > Environment Variables**, adicione:

   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `ADMIN_EMAIL` (e-mail da administradora)

4. Em **Supabase > Authentication > URL Configuration**, inclua a URL da Vercel em **Site URL** e em **Redirect URLs** no formato `https://seu-dominio.vercel.app/auth/callback`.
5. Faça o deploy na Vercel. O login passa a funcionar por link seguro enviado por e-mail.
