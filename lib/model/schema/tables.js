import Sequelize from 'sequelize';

const model = {
  admins: null,
  campuses: null,
  classes: null,
  classStudents: null,
  courses: null,
  quizzes: null,
  quizScores: null,
  students: null,
  teachers: null,
  topics: null
};

const createTables = (connection) => {

  model.admins = connection.define('admins', {    
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  });

  model.campuses = connection.define('campuses', {    
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  });

  model.classes = connection.define('classes', {    
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
  });

  model.courses = connection.define('courses', {    
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  });

  // model.quizzes = connection.define('quizzes', {    
  //   id: {
  //     type: Sequelize.INTEGER,
  //     autoIncrement: true,
  //     primaryKey: true
  //   }
  // });

  model.quizScores = connection.define('quizScores', {    
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    score: {
      type: Sequelize.INTEGER
    }
  });

  model.students = connection.define('students', {    
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  });


  model.studentClasses = connection.define('studentClasses', {   
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }, 
  });

  model.teachers = connection.define('teachers', {    
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  });

  model.topics = connection.define('topics', {    
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  });
  console.log(':) Tables defined');
  return model;
};

export default createTables;