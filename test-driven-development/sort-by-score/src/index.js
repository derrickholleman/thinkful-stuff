const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];

function partitionStudentsByScore(students, score) {
  const array = [];
  array.push(students.filter((student) => student.score <= score));
  array.push(students.filter((student) => student.score > score));
  return array;
}
console.log(partitionStudentsByScore(students, 7))

module.exports = partitionStudentsByScore;
