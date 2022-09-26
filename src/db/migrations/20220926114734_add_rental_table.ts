import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return await knex.raw(`
		CREATE TABLE rental (
			id SERIAL PRIMARY KEY,
			"carId" INTEGER REFERENCES car(id) CHECK (),
			start timestamp without time zone DEFAULT now() NOT NULL,
			end timestamp without time zone DEFAULT now() NOT NULL
		);
	`);
}

export async function down(knex: Knex): Promise<void> {
  return await knex.raw(`
		DROP TABLE IF EXISTS rental;
	`);
}
