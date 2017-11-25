import topics from './topics.js';
import students from './students.js';

const quizScores = [];

students.forEach((student, studentIdx) => {
  topics.forEach((topic, topicIdx) => {
    const score = Math.random() * 40 + 60;
    quizScores.push({
      score: score,
      topicId: topicIdx + 1,
      studentId: studentIdx + 1
    });
  });
});

export default quizScores;