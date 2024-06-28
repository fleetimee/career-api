import { pgEnum, pgTable, text } from 'drizzle-orm/pg-core';

import { generateCustomId } from '../utils/custom-id';

export const experienceEnum = pgEnum('experience', ['experienced', 'fresh-graduate']);

export const jobs = pgTable('jobs', {
    id: text('id').primaryKey().default(generateCustomId('job_')),
    title: text('title').notNull(),
    slug: text('slug').notNull().unique(),
    experience: experienceEnum('experience').notNull(),
    expertise: text('expertise').notNull(),
});
