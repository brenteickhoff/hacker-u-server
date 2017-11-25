import { findOrCreateDatabase, connectORM } from './init.js';
import defineSchema from './schema';
import seedData from './seed';

export let connection = null;
export let model = null;

export const initDataSource = () => {
	findOrCreateDatabase(() => {
		connectORM((err, connected) => {
			connection = connected;
			model = defineSchema(connection);
			connection.sync().then(() => {
				seedData(connection);
			});
		});
	});
};
