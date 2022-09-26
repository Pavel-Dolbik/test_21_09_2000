import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return await knex.raw(`
		ALTER TABLE cars RENAME TO car;
	`);
}

export async function down(knex: Knex): Promise<void> {
  return await knex.raw(`
		ALTER TABLE car RENAME TO cars;
	`);
}
