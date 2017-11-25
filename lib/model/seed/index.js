// import model from './../index.js';
import admins from './data/admins.js';
import campuses from './data/campuses.js';
import teachers from './data/teachers.js';
import students from './data/students.js';
import courses from './data/courses.js';
import topics from './data/topics.js';
import classes from './data/classes.js';
import studentClasses from './data/studentClasses.js';
import quizScores from './data/quizScores.js';

const seedData = (connection, callback) => {
  try {
    const db = connection.queryInterface;
    db.bulkInsert('admins', admins);
    db.bulkInsert('campuses', campuses);
    db.bulkInsert('teachers', teachers);
    db.bulkInsert('students', students);
    db.bulkInsert('courses', courses);
    db.bulkInsert('topics', topics);
    db.bulkInsert('classes', classes);
    db.bulkInsert('studentClasses', studentClasses);
    db.bulkInsert('quizScores', quizScores);
    console.log(':) Data seeded');
  }
  catch(err) {
    console.error('FATAL ERROR: Application could not start', err)
  }
};

export default seedData;