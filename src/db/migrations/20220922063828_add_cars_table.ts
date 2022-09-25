import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return await knex.up(
    `
		CREATE TABLE cars (
			id SERIAL PRIMARY KEY,
			number VARCHAR(10) UNIQUE NOT NULL
		)
		`,
  );
}

export async function down(knex: Knex): Promise<void> {}
