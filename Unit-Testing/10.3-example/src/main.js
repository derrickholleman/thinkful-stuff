// students parameter comes from 'input' from describe averageScore test
const students = [
  { name: "Shane Carey", score: 9.5 },
  { name: "Rebecca Mills", score: 8.7 },
  { name: "Catarina Lima", score: 9.7 },
];

function averageScore(students) {
  let totalScore = 0;
  for (let i = 0; i < students.length; i++) {
    totalScore += students[i].score;
  }
  return totalScore > 0 ? Number((totalScore / students.length).toFixed(1)) : 0 
}
console.log(averageScore(students))

function highestScore(students) {
  if (students.length === 0) {
    return null
  }
  let sortedStudents = students.sort((a, b) => a.score < b.score ? 1 : -1)
  return sortedStudents[0]
}
console.log(highestScore(students))

module.exports = {averageScore, highestScore}
