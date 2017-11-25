import createTables from './tables.js';
import createAssociations from './associations.js';

const defineSchema = (connection) => {
  try {
    let model = createTables(connection);
    createAssociations(model);
    console.log(':) Schema defined');
    return model;
  }
  catch(err) {
    console.error('FATAL ERROR: in schema definition', err)
  }
};

export default defineSchema;