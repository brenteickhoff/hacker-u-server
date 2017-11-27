import Sequelize from 'sequelize';
import { model } from './../../';

const classes = {
  getRoster: (classId) => {
    return model.classes.findById(classId, {
      include: [{  
        model: model.studentClasses,
        where: {classId: Sequelize.col('classes.id')},
        include: [{
          model: model.students,
          where: {id: Sequelize.col('studentClasses.studentId')},
        }]
      }, {
        model: model.courses,
        where: {id: Sequelize.col('classes.courseId')},
      }, {
        model: model.teachers,
        where: {id: Sequelize.col('classes.teacherId')},
      }, {
        model: model.campuses,
        where: {id: Sequelize.col('classes.campusId')},
      }]
    }).then(data => {
      return {
        class: {
          id: data.id,
          teacher: {
            id: data.teacherId,
            name: data.teacher.name,
          },
          campus: {
            id: data.campusId,
            name: data.campus.name,
          },
          course: {
            id: data.courseId,
            name: data.course.name,        
          },
          students: data.studentClasses.map(studentClass => {
            return {
              id: studentClass.student.id,
              name: studentClass.student.name,
              studentClassId: studentClass.id,
            }
          })
        }
      };
    });
  },

  getRosterScores: (classId) => {
    return model.classes.findById(classId, {
      include: [{  
        model: model.studentClasses,
        where: {classId: Sequelize.col('classes.id')},
        include: [{
          model: model.students,
          where: {id: Sequelize.col('studentClasses.studentId')},

          // include: [{
          //   model: model.quizScores,
          //   where: {studentId: Sequelize.col('student.id')},
          // }]

        }]
      }, {
        model: model.courses,
        where: {id: Sequelize.col('classes.courseId')},
        include: [{
          model: model.topics,
          where: {courseId: Sequelize.col('course.id')},
        }]
      }, {
        model: model.teachers,
        where: {id: Sequelize.col('classes.teacherId')},
      }, {
        model: model.campuses,
        where: {id: Sequelize.col('classes.campusId')},
      }]
    }).then(data => {
      return {
        class: {
          id: data.id,
          teacher: {
            id: data.teacherId,
            name: data.teacher.name,
          },
          campus: {
            id: data.campusId,
            name: data.campus.name,
          },
          course: {
            id: data.courseId,
            name: data.course.name,        
          },
          // topics: data.course.topics.map(topic => {
          //   return topic.name
          //   // {
          //   //   id: topic.id,
          //   //   name: topic.name
          //   // }
          // }),

          students: data.studentClasses.map(studentClass => {
            return {
              id: studentClass.student.id,
              name: studentClass.student.name,
              studentClassId: studentClass.id,
            }        
          })
        }
      };
    });
  }
}

export default classes;

