const { expect } = require("chai");
const { findStudentByName } = require("../src/index");

describe("Solution Functions", () => {
  const students = [
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },
  ];

  describe("findStudentsByName", () => {
    it("should return the entire object associated with the specified student", () => {
      const actual = findStudentByName(students, "Natalee Vargas");
      const expected = { name: "Natalee Vargas", score: 9.2 };
      expect(actual).to.eql(expected);
    });

    it("should return null for an incorrect student name", () => {
        const actual = findStudentByName(students)
        expect(actual).to.be.null
    })

    it("should return null for an empty student array", () => {
        const actual = findStudentByName([])
        expect(actual).to.be.null
    })

    it("should return null if answer is not an object", () => {
        const actual = findStudentByName(students, "Natalee Vargas")
        const expected = { name: "Natalee Vargas", score: 9.2 }
        expect(expected).to.be.a("object")
        expect(actual).to.eql(expected)
    })
  });
});
