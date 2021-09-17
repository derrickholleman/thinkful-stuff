const caesar = require('../caesar')
const {expect} = require('chai')

describe("caesar", () => {
    it("It should return false if the shift value is equal to 0, less than -25, greater than 25, or not present", () => {
        const actual = caesar("Cheud Pdjdclqh", 27)
        expect(actual).to.be.false
    })
    it("should ignore upper case letters", () => {
        const actual = caesar('Hello', 3)
        const expected = 'khoor'
        expect(actual).to.equal(expected)
    })
    it("should handle shifts that go past the end of the alphabet", () => {
        const actual = caesar('zebra', 3)
        const expected = 'cheud'
        expect(actual).to.equal(expected)
    })
    it("should maintain spaces and other nonalphabetic symbols in the message, before and after encoding or decoding", () => {
        const actual = caesar("This is a secret message!", 8)
        const expected = "bpqa qa i amkzmb umaaiom!"
        expect(actual).to.equal(expected)
    })
})