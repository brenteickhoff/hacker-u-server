import Sequelize from 'sequelize';

const createTables = (connection) => {

  const model = {

    admins: connection.define('admins', {    
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      }
    }),

    campuses: connection.define('campuses', {    
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      }
    }),

    classes: connection.define('classes', {    
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    }),

    courses: connection.define('courses', {    
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      }
    }),

    quizScores: connection.define('quizScores', {    
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      score: {
        type: Sequelize.INTEGER
      }
    }),

    students: connection.define('students', {    
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      }
    }),

    studentClasses: connection.define('studentClasses', {   
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      }, 
    }),

    teachers: connection.define('teachers', {    
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      }
    }),
    
    topics: connection.define('topics', {    
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      }
    })
  };
  return model;
};

export default createTables;