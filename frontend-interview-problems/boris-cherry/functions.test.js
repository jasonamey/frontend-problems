const functions = require('./functions.js')
const { primes, factorials } = require('./utils.js')

test('determines prime number', () => {
  primes.forEach(item => {
    expect(functions.isPrime(item)).toBe(true)
  })
  notPrimes = Array.from(Array(primes[primes.length - 1]).keys()).filter(item => !primes.includes(item))
  //add one to include '0' 
  const numberOfNumbers = primes[primes.length - 1] + 1
  //make sure you have correct number of numbers : prime and not-prime 
  expect(notPrimes.length + primes.length).toBe(numberOfNumbers)
  notPrimes.forEach(item => {
    expect(functions.isPrime(item)).toBe(false)
  })
})

test('determines factorial of a number', () => {
  factorials.forEach((item, idx) => {
    expect(functions.factorial(idx)).toBe(item)
  })
})