const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];
// Write a function that returns a particular student's score when given a name. If no name matches, return `null`.

function findStudentScoreByName(students, name) {
    let studentMatch = students.find((student) => student.name === name)
    return studentMatch ? studentMatch.score : null
}
console.log(findStudentScoreByName(students, "Morgan Sutton"))

module.exports = findStudentScoreByName
