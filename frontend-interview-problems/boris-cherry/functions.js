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
  },
  //7
  // O(n) time O(1) space
  reverse: (str) => {
    let reversedStr = str
    let strLen = str.length
    for (let i = 0; i < Math.floor(strLen / 2); i++) {
      reversedStr =
        reversedStr.slice(0, i) +
        reversedStr.slice(strLen - i - 1, strLen - i) +
        reversedStr.slice(i + 1, strLen - i - 1) +
        reversedStr.slice(i, i + 1) +
        reversedStr.slice(strLen - i, strLen)
    }
    return reversedStr
  },
  //8
  indexOf: (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i
      }
    }
    return -1
  },
  //9
  // O(n) time O(n) space - prob better to do iteratively
  isPalindrome: function (str) {
    str = str.toLowerCase().split(' ').join('')
    if (str.length === 1 || str.length === 0) {
      return true
    } else if (str.slice(0, 1) !== str.slice(-1)) {
      return false
    } else {
      return functions.isPalindrome(str.slice(1, -1))
    }
  },
  //10
  // O(n) time O(1) space
  missing: function (arr) {
    if (arr.length === 0) return undefined
    let max = -Infinity
    let sum = 0
    for (const element of arr) {
      max = element > max ? element : max
    }
    if (max === arr.length) return undefined
    for (let i = 1; i <= max; i++) {
      sum += i
    }
    const sumOfArr = arr.reduce((a, b) => a + b, 0)
    return sum - sumOfArr
  },
  //11
  // O(n) time O(n) space
  isBalanced: function (str) {
    const left = '([{'
    const right = ')]}'
    const stack = []
    for (const char of str) {
      if (left.indexOf(char) !== -1) {
        stack.push(char)
      } else if (right.indexOf(char) !== -1) {
        if (
          stack.length == 0 ||
          left.indexOf(stack.pop()) !== right.indexOf(char)
        ) {
          return false
        }
      }
    }
    return stack.length === 0
  },
  //11 
  //repeat of fibonacci() - memoization included 

  //12 
  //repeat of isBalanced() - 3 braces already included 

  //13
  //O(n) time O(n) space
  uniq: function (arr) {
    const set = new Set()
    for (const element of arr) {
      set.add(element)
    }
    return Array.from(set)
  }

}

console.log(functions.uniq([1, 2, 2, 3, 1, 2, 3, 4, 32]))

module.exports = functions
