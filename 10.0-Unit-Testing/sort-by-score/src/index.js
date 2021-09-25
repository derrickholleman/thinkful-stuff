const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];

function partitionStudentsByScore(students, score) {
    const allStudents = []
    allStudents.push(students.filter((student) => student.score <= score))
    allStudents.push(students.filter((student) => student.score > score))
    return allStudents
}
console.log(partitionStudentsByScore(students, 8))

module.exports = partitionStudentsByScore;
