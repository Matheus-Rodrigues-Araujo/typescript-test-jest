import { add, multiply } from "../src/calc";

describe("Test CALC", () => {
  it("Should return 15 for add(10,5)", () => {
    expect(add(10, 5)).toBe(15);
  });

  it("Should return 52 for multiply(13,4)", () => {
    expect(multiply(13,4)).toBe(52)
  });
});

interface Interface_Data{
    one: number;
}

test('atribuição de objeto', () => {
    const data:Interface_Data = {one: 1};
    expect(data).toEqual({one: 1});
  });