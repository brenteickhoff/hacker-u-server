// Model handles DB schema and application logic
import { findOrCreateDatabase, connectORM } from './init.js';
import createTables from './schema/tables.js';
import createAssociations from './schema/associations.js';

export let connection = null;
export let model = null;

export const initDataSource = () => {
	findOrCreateDatabase(() => {
		connectORM((err, connected) => {
			connection = connected;
			model = createTables(connection);
			createAssociations(model);
			connection.sync()
				.then(() => console.log(`:) Model synced`))
				.catch((err) => console.error(`**Error during model sync`, err));
		});
	});
};
