const functions = require('./functions.js')
const { primes, factorials, fibonacciNumbers } = require('./utils.js')

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

test.skip('determines factorial of a number', () => {
  factorials.forEach((item, idx) => {
    expect(functions.factorial(idx)).toBe(item)
  })
})

test.skip('determines the nth fibonacci of a number', () => {
  fibonacciNumbers.forEach((item, idx) => {
    expect(functions.fibonacci(idx)).toBe(item)
  })
})

test.skip('checks that array is sorted', () => {
  const { isSorted } = functions
  expect(isSorted([])).toBe(true)
  expect(isSorted([-Infinity, -5, 0, 3, 9])).toBe(true)
  expect(isSorted([3, 9, -3, 10])).toBe(false)
})

test.skip('checks that array is filtered upon a given condition', () => {
  expect(functions.filter([1, 2, 3, 4], (n) => n < 3)).toEqual([1, 2])
})

test('checks that an array will reduce upon a given condition', () => {
  const { reduce } = functions
  expect(reduce([1, 2, 3, 4], (a, b) => a + b, 0)).toBe(10)
  expect(reduce([1, 2, 3, 4], (a, b) => a * b, 1)).toBe(24)
  expect(reduce([8, 2, 2], (a, b) => a / b, 32)).toBe(1)
  expect(reduce([], (a, b) => a + b, 0)).toBe(0)
})