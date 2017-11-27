import Sequelize from 'sequelize';
import { model } from './../../';

const teachers = {
  get: (teacherId) => {
    return model.teachers.findById(teacherId, {
    include: [{  
      model: model.campuses,
      where: {id: Sequelize.col('teachers.campusId')}
      }]
    }).then(data => {
      return {
        teacher: {
          id: data.id,
          name: data.name,
          campusId: data.campusId,
          campusName: data.campus.name
        }
      };
    })
  },

  getClassList: (teacherId) => {
    return model.teachers.findById(teacherId, {
      include: [{  
        model: model.campuses,
        where: {id: Sequelize.col('teachers.campusId')}
      }, {  
        model: model.classes,
        where: {teacherId: Sequelize.col('teachers.id')},
        include: [{
          model: model.courses,
          where: {id: Sequelize.col('classes.courseId')},
        }]
      }]
    }).then(data => {
      return {
        teacher: {
          id: data.id,
          name: data.name,
          campusId: data.campusId,
          campusName: data.campus.name,
          classes: data.classes.map(cls => {
            return {
              id: cls.id,
              courseId: cls.courseId,
              name: cls.course.name
            }
          })
        }
      }; 
    });
  },
}

export default teachers;

