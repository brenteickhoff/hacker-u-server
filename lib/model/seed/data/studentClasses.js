import students from './students.js';
import classes from './classes.js';

const studentClasses = [];

students.forEach((student, studentIdx) => {
  classes.forEach((cls, classIdx) => {
    if (cls.campusId === student.campusId) {
      if ((studentIdx % 20 < 10 && classIdx % 14 < 7)) {
        studentClasses.push({
          classId: classIdx + 1,
          studentId: studentIdx + 1
        });
      }
      if ((studentIdx % 20 >= 10 && classIdx % 14 >= 7)) {
        studentClasses.push({
          classId: classIdx + 1,
          studentId: studentIdx + 1
        });
      }
    }
  });
}); 

export default studentClasses;
