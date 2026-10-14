import {NextResponse} from 'next/server';
import {supabase} from '@/app/supabase/server';
export async function GET(request:Request){const url=new URL(request.url),code=url.searchParams.get('code');if(code){const client=await supabase();await client.auth.exchangeCodeForSession(code)}return NextResponse.redirect(new URL('/perfil',url.origin))}
