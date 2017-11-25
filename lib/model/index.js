// Model handles DB schema and application logic
import { findOrCreateDatabase, connectORM } from './init.js';
import createTables from './schema/tables.js';
import createAssociations from './schema/associations.js';
import seedData from './seed';
// import query from './query';

export let connection = null;
export let model = null;

export const initDataSource = () => {
	findOrCreateDatabase(() => {
		connectORM((err, connected) => {
			connection = connected;
			model = createTables(connection);
			createAssociations(model);
			connection.sync()
				.then(() => {
					console.log(`:) Model synced`);
					// model.query = query;
					console.log(`:) Query library added to model`);
					seedData(connection, (err, msg) => {
						if (!err) {
							console.log(`:) Databse seeded`);
						} else {
							console.error(`**Error seeding data`);
						}
					});
				})
				.catch((err) => console.error(`**Error during model sync`, err));
		});
	});
};
