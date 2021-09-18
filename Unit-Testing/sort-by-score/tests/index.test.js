const partitionStudentsByScore = require("../src/index");
const {expect} = require("chai");

describe("Solution Functions", () => {
  const students = [
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },
  ];

  describe("Organizing students into two arrays, one scoring below", () => {
    it("should be correctly partitioned into their appropriate arrays", () => {
      const expected = [
        [{ name: "Morgan Sutton", score: 7.4 }],
        [
          { name: "Leo Yeon-Joo", score: 8.9 },
          { name: "Natalee Vargas", score: 9.2 },
        ],
      ];
      const actual = partitionStudentsByScore(students, 8);
      expect(actual).to.eql(expected);
    });
    it("should be able to have all students go into one array", () => {
      const expected = [
        [],
        [
          { name: "Leo Yeon-Joo", score: 8.9 },
          { name: "Morgan Sutton", score: 7.4 },
          { name: "Natalee Vargas", score: 9.2 },
        ],
      ];
      const actual = partitionStudentsByScore(students, 7);
      expect(actual).to.eql(expected);
    });
    it("should return two empty arrays if student list is empty", () => {
      const expected = [[], []];
      const actual = partitionStudentsByScore(students);
      expect(actual).to.eql(expected);
    });
  });
});
