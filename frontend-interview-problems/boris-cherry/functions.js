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
  //1 
  //repeat of fibonacci() - memoization included 

  //2 
  //repeat of isBalanced() - 3 braces already included 

  //3
  //O(n) time O(n) space
  uniq: function (arr) {
    const set = new Set()
    for (const element of arr) {
      set.add(element)
    }
    return Array.from(set)
  },
  //4
  //Time O(m + n) space O(n) 
  intersection: function (arr1, arr2) {
    const set = new Set()
    const intersection = []
    for (const element of arr1) {
      set.add(element)
    }
    for (const element of arr2) {
      if (set.has(element)) {
        intersection.push(element)
      }
    }
    return intersection
  },
  //time O(n*log(n)) space(log(n))
  //quicksort 
  sort: function (arr) {
    function helper (low, hi, arr) {
      if (low >= hi) return
      let pivot = low
      let left = pivot + 1
      let right = hi
      while (left <= right) {
        if (arr[left] > arr[pivot] && arr[right] < arr[pivot]) {
          swap(left, right, arr)
        }
        if (arr[left] <= arr[pivot]) {
          left += 1
        }
        if (arr[right] >= arr[pivot]) {
          right -= 1
        }
      }
      swap(pivot, right, arr)
      helper(low, right - 1, arr)
      helper(right + 1, hi, arr)
    }
    function swap (i, j, arr) {
      temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    helper(0, arr.length - 1, arr)
    return arr
  },
  includes: function (arr, target) {
    let lo = 0
    let hi = arr.length - 1
    while (lo <= hi) {
      mid = Math.ceil((hi + lo) / 2)
      if (arr[mid] === target) {
        return true
      }
      if (arr[mid] > target) {
        hi = mid - 1
      } else {
        lo = mid + 1
      }
    }
    return false
  },
  //check this ... not done yet
  assignDeep (obj1, obj2) {
    let newObj = {}
    for (let key in obj1) {
      if (typeof obj1[key] !== 'object') {
        newObj[key] = obj1[key]
      } else {
        newObj[key] = { ...this.assignDeep(obj1[key], obj2[key]) }
      }
    }
    for (let key in obj2) {
      if (typeof obj2[key] !== 'object') {
        newObj[key] = obj2[key]
      } else {
        newObj[key] = { ...this.assignDeep(obj1[key], obj2[key]) }
      }
    }
    return newObj
  }
}


module.exports = functions
