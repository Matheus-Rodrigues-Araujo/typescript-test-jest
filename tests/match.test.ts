import {equalNames} from '../src/match'

describe("Match Test", () => {
    it("Should return true for equalNames('Bob','Bob')", ()=>{
        expect(equalNames("Bob", "Bob")).toBe(true)
    })

    it("Should return false equalNames('Bob', 'Dylan')", ()=>{
        expect(equalNames("Bob", "Dylan")).toBe(false)
    })
})