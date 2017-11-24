const createAssociations = (model) => {

  model.admin.hasMany(model.teacher);

  model.campus.hasMany(model.class);

  model.class.belongsTo(model.campus);
  model.class.belongsTo(model.course);
  model.class.hasMany(model.quiz);
  model.class.belongsToMany(model.student, {through: 'model.classStudent'});
  model.class.belongsTo(model.teacher);

  model.classStudent.hasMany(model.quizScore);

  model.course.hasMany(model.class);
  model.course.hasMany(model.topic);

  model.student.belongsToMany(model.class, {through: 'model.classStudent'});

  model.quiz.belongsTo(model.classStudent);
  model.quiz.hasMany(model.quizScore);

  model.quizScore.belongsTo(model.student);
  model.quizScore.belongsTo(model.quiz);

  model.teacher.belongsTo(model.admin);

  model.topic.belongsTo(model.course);
  model.topic.hasMany(model.quiz);

  console.log(':) Associations defined');

  return model;
};

export default createAssociations;