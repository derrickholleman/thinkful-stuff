const { averageScore, highestScore } = require("../src/main");
const {expect} = require("chai");

describe("Solution Functions", () => {
  const students = [
    { name: "Shane Carey", score: 9.5 },
    { name: "Rebecca Mills", score: 8.7 },
    { name: "Catarina Lima", score: 9.7 },
  ];

  describe("averageScore", () => {
    it("should return the average score among all students", () => {

      const actual = averageScore(students);
      const expected = 9.3;
      expect(actual).to.eql(expected);
    });
    it("should return 0 if there are no students in the array", () => {
      const actual = averageScore([]);
      const expected = 0;
      expect(actual).to.eql(expected);
    });
  });

  describe("highestScore", () => {
    it("should return an object of the highest scoring student", () => {

      const actual = highestScore(students);
      const expected = { name: "Catarina Lima", score: 9.7 };
      expect(actual).to.eql(expected);
    });
    it("should return null if there are no students in the array", () => {
      const actual = highestScore([]);
      expect(actual).to.be.null;
    });
  });
});
