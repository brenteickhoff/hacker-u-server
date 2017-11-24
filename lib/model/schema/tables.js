import Sequelize from 'sequelize';

const model = {
  admin: null,
  campus: null,
  class: null,
  classStudent: null,
  course: null,
  quiz: null,
  quizScore: null,
  student: null,
  teacher: null,
  topic: null
};

const createTables = (connection) => {

  model.admin = connection.define('admin', {    
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  });

  model.campus = connection.define('campus', {    
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  });

  model.class = connection.define('class', {    
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
  });

  model.classStudent = connection.define('class_student', {   
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }, 
  });

  model.course = connection.define('course', {    
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  });

  model.quiz = connection.define('quiz', {    
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  });

  model.quizScore = connection.define('quiz_score', {    
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    score: {
      type: Sequelize.INTEGER
    }
  });

  model.student = connection.define('student', {    
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  });

  model.teacher = connection.define('teacher', {    
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  });

  model.topic = connection.define('topic', {    
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