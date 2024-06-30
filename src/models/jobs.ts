import { pgEnum, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

import { expertise } from './expertise';
import { users } from './users';

export const experienceEnum = pgEnum('experience', ['experienced', 'fresh-graduate']);
export const jobAvailabilityEnum = pgEnum('job_availability', ['available', 'closed']);

export const jobs = pgTable('jobs', {
    id: uuid('id').primaryKey().defaultRandom(),
    title: text('title').notNull(),
    slug: text('slug').notNull().unique(),
    experience: experienceEnum('experience').notNull(),
    availability: jobAvailabilityEnum('availability').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
    expertiseId: uuid('expertise_id')
        .notNull()
        .references(() => expertise.id),
    createdBy: uuid('created_by').references(() => users.id),
    updatedBy: uuid('updated_by').references(() => users.id),
});
