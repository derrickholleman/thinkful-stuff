const {expect} = require("chai");
const findStudentScoreByName = require("../src/main");

describe("Solution", () => {
  const students = [
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },
  ];

  describe("findStudentScoreByName", () => {
    it("should return a particular student's score when given a name. If no name matches, return `null`", () => {

      const actual = findStudentScoreByName(students, "Morgan Sutton");
      const expected = 7.4;
      expect(actual).to.equal(expected);
    });
    it("Should return null if no student is given", () => {

      const actual = findStudentScoreByName(students);
      expect(actual).to.be.null;
    });
    it("Should return null if no student array is given", () => {

      const actual = findStudentScoreByName([]);
      expect(actual).to.be.null;
    });
  });
});
