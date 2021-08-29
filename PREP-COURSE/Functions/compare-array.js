let studentAnswers = ['C', 'D', 'B', 'C', 'B']
let teacherAnswers = ['C', 'A', 'B', 'C', 'A']

function gradeQuiz(studentAnswers, teacherAnswers) {
    let score = 0;
    for (let i = 0; i < studentAnswers.length; i++) {
      if (studentAnswers[i] === teacherAnswers[i]) {
        score += 1;
      }
    }
    return score;
  }
console.log(gradeQuiz(studentAnswers, teacherAnswers))