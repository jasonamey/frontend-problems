const functions = require('./functions.js')
const { primes, factorials, fibonacciNumbers } = require('./utils.js')

//1
test.skip('determines prime number', () => {
  primes.forEach(item => {
    expect(functions.isPrime(item)).toBe(true)
  })

  //find the "not primes"....
  notPrimes = Array.from(Array(primes[primes.length - 1]).keys()).filter(item => !primes.includes(item))
  //add one to include '0' 
  const numberOfNumbers = primes[primes.length - 1] + 1
  //make sure you have correct number of numbers : prime and not-prime 
  expect(notPrimes.length + primes.length).toBe(numberOfNumbers)

  //now test "not primes"... 
  notPrimes.forEach(item => {
    expect(functions.isPrime(item)).toBe(false)
  })
})

//2
test.skip('determines factorial of a number', () => {
  factorials.forEach((item, idx) => {
    expect(functions.factorial(idx)).toBe(item)
  })
})

//3
test.skip('determines the nth fibonacci of a number', () => {
  fibonacciNumbers.forEach((item, idx) => {
    expect(functions.fibonacci(idx)).toBe(item)
  })
})

//4
test.skip('checks that array is sorted', () => {
  const { isSorted } = functions
  expect(isSorted([])).toBe(true)
  expect(isSorted([-Infinity, -5, 0, 3, 9])).toBe(true)
  expect(isSorted([3, 9, -3, 10])).toBe(false)
})

//5
test.skip('checks that array is filtered upon a given condition', () => {
  expect(functions.filter([1, 2, 3, 4], (n) => n < 3)).toEqual([1, 2])
})

//6
test.skip('checks that an array will reduce upon a given condition', () => {
  const { reduce } = functions
  expect(reduce([1, 2, 3, 4], (a, b) => a + b, 0)).toBe(10)
  expect(reduce([1, 2, 3, 4], (a, b) => a * b, 1)).toBe(24)
  expect(reduce([8, 2, 2], (a, b) => a / b, 32)).toBe(1)
  expect(reduce([], (a, b) => a + b, 0)).toBe(0)
})

//7
test.skip('checks that string is reversed', () => {
  const { reverse } = functions
  expect(reverse('')).toBe('')
  expect(reverse('abcdef')).toBe('fedcba')
  expect(reverse('abc')).toBe('cba')
  expect(reverse('ab')).toBe('ba')
  expect(reverse('aab')).toBe('baa')
})

//8
test.skip('finds index of target in an array', () => {
  const { indexOf } = functions
  expect(indexOf([1, 2, 3], 1)).toBe(0)
  expect(indexOf([1, 2, 3], 4)).toBe(-1)
})

//9
test.skip("checks if string is a palindrome", () => {
  const { isPalindrome } = functions
  expect(isPalindrome('')).toBe(true)
  expect(isPalindrome('abcdcba')).toBe(true)
  expect(isPalindrome('abcd')).toBe(false)
  expect(isPalindrome('A man a plan a canal Panama')).toBe(true)
})

//10
test.skip("checks for number missing in an unordered array of sequential numbers of 1 to N, where the array length is N - 1", () => {
  const { missing } = functions
  expect(missing([])).toBe(undefined)
  expect(missing([1, 4, 3])).toBe(2)
  expect(missing([2, 3, 4])).toBe(1)
  expect(missing([5, 1, 4, 2])).toBe(3)
  expect(missing([1, 2, 3, 4])).toBe(undefined)
})

//11
test.skip("checks higher fibonacci numbers", () => {
  const { fibonacci: fib2 } = functions
  expect(fib2(0)).toBe(0)
  expect(fib2(1)).toBe(1)
  expect(fib2(10)).toBe(55)
  expect(fib2(50)).toBe(12586269025)
})

//12
test.skip("check for balanced braces for 3 types of braces", () => {
  const { isBalanced: isBalanced2 } = functions
  expect(isBalanced2('(foo { bar (baz) [boo] })')).toBe(true)
  expect(isBalanced2('foo { bar { baz }')).toBe(false)
  expect(isBalanced2('foo { (bar [baz] } )')).toBe(false)
})

//13
test.skip("return an array of all the unique numbers in an array", () => {
  const { uniq } = functions
  expect(uniq([])).toEqual([])
  expect(uniq([1, 4, 2, 2, 3, 4, 8])).toEqual([1, 4, 2, 3, 8])
})

//4 
test.skip("return an array of the intersection of the numbers in two arrays", () => {
  const { intersection } = functions
  expect(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])).toEqual([4, 1])
  expect(intersection([1, 5, 4, 2], [7, 12])).toEqual([])
})
//5
test("sorts an array in n*log(n) time", () => {
  const { sort } = functions
  expect(sort([])).toEqual([])
  expect(sort([-4, 1, Infinity, 3, 3, 0])).toEqual([-4, 0, 1, 3, 3, Infinity])
})

//6
test("determines if target is found in sorted array", () => {
  const { includes } = functions
  expect(includes([1, 3, 8, 10], 8)).toBe(true)
  expect(includes([1, 3, 8, 8, 15], 15)).toBe(true)
  expect(includes([1, 3, 8, 10, 15], 9)).toBe(false)
})
