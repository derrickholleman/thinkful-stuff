const expect = require("chai").expect;
const findStudentScoreByName = require("../src/main");

describe("findStudentScoreByName", () => {
  it("should return a particular student's score when given a name. If no name matches, return `null`", () => {
    const input = [
      { name: "Leo Yeon-Joo", score: 8.9 },
      { name: "Morgan Sutton", score: 7.4 },
      { name: "Natalee Vargas", score: 9.2 },
    ];

    const actual = findStudentScoreByName(input, "Morgan Sutton")
    const expected = 7.4
    expect(actual).to.equal(expected);
  });
  it("Should return null if no student is given", () => {
    const input = [
        { name: "Leo Yeon-Joo", score: 8.9 },
        { name: "Morgan Sutton", score: 7.4 },
        { name: "Natalee Vargas", score: 9.2 },
      ];
    const actual = findStudentScoreByName(input)
    expect(actual).to.be.null
  })
});
