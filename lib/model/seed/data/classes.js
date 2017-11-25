import teachers from './teachers.js';
import courses from './courses.js';

const classes = [];

for (let teacherId = 1; teacherId <= teachers.length; teacherId++) {
  for (let courseId = 1; courseId <= courses.length; courseId++) {
    classes.push({
      courseId: courseId, 
      teacherId: teacherId,
      campusId: teachers[teacherId - 1].campusId
    })
  }
}
export default classes;