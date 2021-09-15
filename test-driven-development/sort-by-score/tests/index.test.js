const { expect } = require("chai");
const { partitionStudentsByScore } = require("../src/index");

describe("Solution Functions", () => {
  const students = [
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },
  ];

  describe("partitionStudentsByScore", () => {
    it("should takes an array of students and a specific score and return an array of two arrays seperated by the score", () => {
      const actual = partitionStudentsByScore(students, 8);
      const expected = [
        [
            { name: "Morgan Sutton", score: 7.4 }
        ],
        [
          { name: "Leo Yeon-Joo", score: 8.9 },
          { name: "Natalee Vargas", score: 9.2 },
        ],
        expect(actual).to.eql(expected)
      ];
    });
  });
});
