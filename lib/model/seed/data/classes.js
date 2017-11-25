import teachers from './teachers.js';
import courses from './courses.js';

const classes = [];

teachers.forEach((teacher, teacherIdx) => {
  courses.forEach((course, courseIdx) => {
    classes.push({
      courseId: courseIdx + 1, 
      teacherId: teacherIdx + 1,
      campusId: teacher.campusId
    });
  });
});

export default classes;