const { sum } = require("../sum");

test("Sum Function Should Calculate the Sum of Two Functions:-", () => {
    const result = sum(3, 4);
    expect(result).toBe(7);   
});