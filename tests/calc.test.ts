import { add }  from '../src/calc'

describe("Test CALC", ()=>{
   it("Should return 15 for add(10,5)", () => {
    expect(add(10, 5)).toBe(15)
   }) 
})
