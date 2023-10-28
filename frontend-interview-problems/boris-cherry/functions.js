const functions = {
  isPrime: (num) => {
    if (num < 2) return false
    if (num === 2) return true
    for (let i = 2; i < Math.ceil(num / 2) + 1; i++) {
      if (num % i == 0) return false
    }
    return true
  },
  factorial: (num) => {
    if (num == 0) return 1
    sum = 1
    for (let i = num; i > 0; i--) {
      sum *= i
    }
    return sum
  },
  fibonacci: (n) => {
    cache = {
      1: 1,
      2: 1
    }
    function fibHelper (num) {
      if (cache[num]) {
        return cache[num]
      }
      cache[num] = fibHelper(num - 1) + fibHelper(num - 2)
      return cache[num]
    }
    return fibHelper(n)
  }

}

console.log(functions.fibonacci(7))
module.exports = functions