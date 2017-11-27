import { findOrCreateDatabase, connectORM } from './init.js';
import defineSchema from './schema';
import seedData from './seed';
import query from './query';

export let connection = null;
export let model = null;
//export let query = query;

export const initDataSource = () => {
	findOrCreateDatabase(() => {
		connectORM((err, connected) => {
			connection = connected;
			model = defineSchema(connection);

			connection.sync().then(() => {
				seedData(connection);

				query.teachers.get(2).then((teacher) => {
					console.log(teacher);
				});				
				query.teachers.getClassList(2).then((data) => {
					console.log(data);
				});				
				query.classes.getRoster(1).then((data) => {
					console.log(data);
				});
				query.classes.getRosterScores(2).then((data) => {
					console.log(data);
				});
			});
		});
	});

};	
