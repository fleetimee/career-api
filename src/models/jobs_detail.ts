import { integer, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

import { jobs } from './jobs';

export const jobsDetail = pgTable('jobs_detail', {
    id: uuid('id').primaryKey().defaultRandom(),
    jobId: uuid('job_id')
        .notNull()
        .references(() => jobs.id),
    description: text('description').notNull(),
    requirements: text('requirements').notNull(),
    dateStart: timestamp('date_start').defaultNow(),
    dateEnd: timestamp('date_end').defaultNow(),
    ageMin: integer('age_min').notNull(),
    ageMax: integer('age_max').notNull(),
});
