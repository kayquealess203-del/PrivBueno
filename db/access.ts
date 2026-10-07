import {env} from 'cloudflare:workers';
export function database(){const db=(env as any).DB as D1Database;if(!db)throw Error('Banco de dados indisponível');return db}
export function isAdmin(email:string){const allowed=(env as any).ADMIN_EMAIL;return typeof allowed==='string'&&!!allowed.trim()&&email.toLowerCase()===allowed.trim().toLowerCase()}
