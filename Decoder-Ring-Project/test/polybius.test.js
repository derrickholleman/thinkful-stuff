const {polybius} = require("../src/polybius")
const {expect} = require("chai")

describe("polybius", () => {
    it("should translate the letters i and j to 42", () => {
        const actual = polybius("thinkful")
        const expected = "4432423352125413"
        expect(actual).to.equal(expected)
    })
    it("when decoding it should translate 42 to (i/j)", () => {
        const actual = polybius("4432423352125413", false)
        const expected = "th(i/j)nkful"
        expect(actual).to.equal(expected)
    })
    it("should ignore capital letters", () => {
        const actual = polybius('Message')
        const expected = "23513434112251"
        expect(actual).to.equal(expected)
    })
    it("should maintain spaces in the message before encoding", () => {
        const actual = polybius("Hello world")
        const expected = "3251131343 2543241341"
        expect(actual).to.equal(expected)
    })
    it("should maintain spaces in the message after encoding", () => {
        const actual = polybius("3251131343 2543241341", false)
        const expected = "hello world"
        expect(actual).to.equal(expected)
    })
    it("should have an even number of characters excluding spaces, when decoding.  Otherwise return false.", () => {
        const actual = polybius("44324233521254134", false)
        expect(actual).to.be.false
    })
    it("should still have the output as a string even when encoding", () => {
        const actual = polybius("thinkful")
        expect(actual).to.be.a("string")

    })
})