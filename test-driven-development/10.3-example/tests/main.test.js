const { averageScore, highestScore } = require("../src/main");
const expect = require("chai").expect;

describe("averageScore", () => {
  it("should return the average score among all students", () => {
    const input = [
      { name: "Shane Carey", score: 9.5 },
      { name: "Rebecca Mills", score: 8.7 },
      { name: "Catarina Lima", score: 9.7 },
    ];
    const expected = 9.3;
    const actual = averageScore(input);
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
    const input = [
      { name: "Shane Carey", score: 9.5 },
      { name: "Rebecca Mills", score: 8.7 },
      { name: "Catarina Lima", score: 9.7 },
    ];
    const expected = { name: "Catarina Lima", score: 9.7 };
    const actual = highestScore(input);
    expect(actual).to.eql(expected);
  });
  it("should return null if there are no students in the array", () => {
    const actual = highestScore([]);
    expect(actual).to.be.null;
  });
});
