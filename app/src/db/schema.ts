import { serial, pgTable, varchar, date, text } from 'drizzle-orm/pg-core';

export const projects = pgTable("projects", {
    id: serial('id').primaryKey(),
    title: varchar({ length:255 }).notNull(),
    desc: varchar({ length:255 }).notNull(),
    body: text().notNull(),
    date: date().notNull(),
    imageUrl: varchar({ length:255 }),
});