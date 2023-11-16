const recursionFunctions = require('./recursion.js')

describe("test all recursion functions from recursion.js", () => {
  //1
  it.skip("countdown numbers until blastoff", () => {
    const { countdown } = recursionFunctions
    const stringToTest = "5 4 3 2 1 ...Blast Off"
    expect(countdown(5)).toBe(stringToTest)
  })
  //3
  it.skip("sum adds up numbers in array", () => {
    const { sum } = recursionFunctions
    expect(sum([1, 1, 1])).toBe(3)
    expect(sum([1, 2, 3, 4, 5, 6])).toBe(21)
  })
  //4
  it.skip("palindrome checks for palindrome string", () => {
    const { palindrome } = recursionFunctions
    expect(palindrome("Anne, I vote more cars race Rome-to-Vienna")).toBe(true)
    expect(palindrome("llama mall")).toBe(true)
    expect(palindrome("jmoney")).toBe(false)

  })

})