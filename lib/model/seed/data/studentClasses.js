import students from './students.js';
import classes from './classes.js';

const studentClasses = [];

// seeding highly dependent on order of other tables
// other tables be modified if general sequence pattern is maintained 
import courses from './courses.js';
import campuses from './campuses.js';
import teachers from './teachers.js';
const studentsPerCampus = students.length / campuses.length;
const teachersPerCampus = teachers.length / campuses.length;
const studentsPerTeacher = studentsPerCampus / teachersPerCampus;
const classesPerCampus = teachersPerCampus * courses.length;
const coursesCount = courses.length;

students.forEach((student, studentIdx) => {
  classes.forEach((cls, classIdx) => {
    if (cls.campusId === student.campusId) {
      if ((studentIdx % studentsPerCampus < studentsPerTeacher
          && classIdx % classesPerCampus < coursesCount)) {
        studentClasses.push({
          classId: classIdx + 1,
          studentId: studentIdx + 1
        });
      }
      if ((studentIdx % studentsPerCampus >= studentsPerTeacher
         && classIdx % classesPerCampus >= coursesCount)) {
        studentClasses.push({
          classId: classIdx + 1,
          studentId: studentIdx + 1
        });
      }
    }
  });
}); 

export default studentClasses;
