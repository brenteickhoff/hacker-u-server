const createAssociations = (model) => {

  model.campuses.hasMany(model.classes);
  model.campuses.hasMany(model.students);
  model.campuses.hasMany(model.teachers);

  model.classes.belongsTo(model.campuses);
  model.classes.belongsTo(model.courses);
  model.classes.belongsTo(model.teachers);
  model.classes.belongsToMany(model.students, {through: 'studentClasses'});

  model.courses.hasMany(model.classes);
  model.courses.hasMany(model.topics);

  model.students.belongsTo(model.campuses);
  model.students.belongsToMany(model.classes, {through: 'studentClasses'});
  model.students.hasMany(model.quizScores);//

  model.quizScores.belongsTo(model.students);
  model.quizScores.belongsTo(model.topics); 

  model.teachers.belongsTo(model.campuses);
  model.teachers.hasMany(model.classes);

  model.topics.belongsTo(model.courses);
  model.topics.hasMany(model.quizScores);
};

export default createAssociations;