import {createServerClient} from '@supabase/ssr';
import {createClient} from '@supabase/supabase-js';
import {cookies} from 'next/headers';

function config(){const url=process.env.NEXT_PUBLIC_SUPABASE_URL,key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;if(!url||!key)throw Error('Supabase não está configurado.');return {url,key}}
export async function supabase(){const {url,key}=config();const jar=await cookies();return createServerClient(url,key,{cookies:{getAll:()=>jar.getAll(),setAll:items=>{try{items.forEach(item=>jar.set(item.name,item.value,item.options))}catch{}}}})}
export function admin(){const {url}=config();const key=process.env.SUPABASE_SERVICE_ROLE_KEY;if(!key)throw Error('SUPABASE_SERVICE_ROLE_KEY não está configurada.');return createClient(url,key,{auth:{autoRefreshToken:false,persistSession:false}})}
export function isAdmin(email:string){return !!process.env.ADMIN_EMAIL&&email.toLowerCase()===process.env.ADMIN_EMAIL.trim().toLowerCase()}
