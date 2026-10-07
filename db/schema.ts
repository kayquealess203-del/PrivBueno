import {sqliteTable,text,integer,primaryKey,index} from 'drizzle-orm/sqlite-core';
export const users=sqliteTable('users',{id:text('id').primaryKey(),email:text('email').notNull(),name:text('name').notNull(),createdAt:text('created_at').notNull()},t=>[index('idx_users_email').on(t.email)]);
export const posts=sqliteTable('posts',{id:text('id').primaryKey(),title:text('title').notNull(),category:text('category').notNull(),body:text('body').notNull(),mediaKey:text('media_key'),published:integer('published').notNull().default(0),views:integer('views').notNull().default(0),createdAt:text('created_at').notNull()});
export const favorites=sqliteTable('favorites',{userId:text('user_id').notNull(),postId:text('post_id').notNull()},t=>[primaryKey({columns:[t.userId,t.postId]})]);
export const subscriptions=sqliteTable('subscriptions',{userId:text('user_id').primaryKey(),expiresAt:text('expires_at').notNull(),cancelled:integer('cancelled').notNull().default(0)});
export const plans=sqliteTable('plans',{months:integer('months').primaryKey(),price:integer('price').notNull()});
export const coupons=sqliteTable('coupons',{code:text('code').primaryKey(),discount:integer('discount').notNull()});
export const messages=sqliteTable('messages',{id:text('id').primaryKey(),userId:text('user_id').notNull(),email:text('email').notNull(),subject:text('subject').notNull(),body:text('body').notNull(),createdAt:text('created_at').notNull()});
