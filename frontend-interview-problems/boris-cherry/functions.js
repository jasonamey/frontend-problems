const functions = {
  // 1 
  isPrime: (num) => {
    if (num < 2) return false
    if (num === 2) return true
    for (let i = 2; i < Math.ceil(num / 2) + 1; i++) {
      if (num % i == 0) return false
    }
    return true
  },
  // 2 
  factorial: (num) => {
    if (num == 0) return 1
    sum = 1
    for (let i = num; i > 0; i--) {
      sum *= i
    }
    return sum
  },
  // 3
  fibonacci: (n) => {
    cache = {
      0: 0,
      1: 1
    }
    function fibHelper (num) {
      if (cache[num] !== undefined) {
        return cache[num]
      }
      cache[num] = fibHelper(num - 1) + fibHelper(num - 2)
      return cache[num]
    }
    return fibHelper(n)
  },
  // 4
  isSorted: (arr) => {
    if (arr.length === 0) return true
    let element = arr[0]
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < element) {
        return false
      }
      element = arr[i]
    }
    return true
  },
  // 5
  filter: (arr, fn) => {
    const newArr = []
    for (element of arr) {
      if (fn(element)) {
        newArr.push(element)
      }
    }
    return newArr
  },
  //6 
  reduce: (arr, reduceFn, start) => {
    let sum = start
    for (let element of arr) {
      sum = reduceFn(sum, element)
    }
    return sum
  }

}
module.exports = functions