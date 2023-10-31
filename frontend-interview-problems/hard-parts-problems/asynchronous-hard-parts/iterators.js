// http://csbin.io/iterators

// CHALLENGE 2

// A) Create a for loop that iterates through an array and returns the sum of the elements of the array.

function findSumOfArray (arr) {
  let sum = 0
  for (let element of arr) {
    sum += element
  }
  return sum
}

// console.log(findSumOfArray([1, 2, 3])) // 6

// B) Create a functional iterator for an array that returns each value of the array when called, one element at a time.

function iterator (arr) {
  idx = 0
  function inner () {
    if (idx < arr.length) {
      element = arr[idx++]
      return element
    } else {
      throw new Error("iterator exhausted")
    }
  }
  return inner
}

// const iteratorFunc = iterator([1, 2, 3])
// console.log(iteratorFunc()) // 1 
// console.log(iteratorFunc()) // 2
// console.log(iteratorFunc()) // 3 
// console.log(iteratorFunc()) // Error: iterator exhausted

//

// CHALLENGE 2

function nextIterator (arr) {
  let idx = 0
  const iterator = {
    next: function () {
      if (idx < arr.length) {
        return arr[idx++]
      }
    }
  }
  return iterator
}

const i = nextIterator()
// Uncomment the lines below to test your work
// const array3 = [1, 2, 3];
// const iteratorWithNext = nextIterator(array3);
// console.log(iteratorWithNext.next()); // -> should log 1
// console.log(iteratorWithNext.next()); // -> should log 2
// console.log(iteratorWithNext.next()); // -> should log 3

//

// CHALLENGE 3

function sumArray (arr) {
  const iteratorWithNext = nextIterator(arr)
  let element = iteratorWithNext.next()
  let sum = 0
  while (element) {
    sum += element
    element = iteratorWithNext.next()
  }
  return sum
}

// Uncomment the lines below to test your work
// const array4 = [1, 2, 3, 4];
// console.log(sumArray(array4)); // -> should log 10

//

// CHALLENGE 4

function setIterator (set) {
  const internal = {
    idx: 0,
    item: Array.from(set),
    next: function () {
      return this.item[this.idx++]
    }
  }
  return internal
}

// Uncomment the lines below to test your work
// const mySet = new Set('hey');
// const iterateSet = setIterator(mySet);
// console.log(iterateSet.next()); // -> should log 'h'
// console.log(iterateSet.next()); // -> should log 'e'
// console.log(iterateSet.next()); // -> should log 'y'

//

// CHALLENGE 5

function indexIterator (arr) {
  idx = 0
  const inner = {
    next: function () {
      const idxToReturn = idx
      const element = arr[idx++]
      return [idx, element]
    }
  }
  return inner
}

// Uncomment the lines below to test your work
// const array5 = ['a', 'b', 'c', 'd'];
// const iteratorWithIndex = indexIterator(array5);
// console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
// console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
// console.log(iteratorWithIndex.next()); // -> should log [2, 'c']


// CHALLENGE 6

function Words (string) {
  this.str = string;

}

Words.prototype[Symbol.iterator] = function () {
  let idx = 0
  const splitString = this.str.split(" ")
  return {
    next: function () {
      if (idx < splitString.length) {
        const value = splitString[idx++]
        return { value: value, done: false }
      } else {
        return { done: true }
      }
    }
  }
}

// Uncomment the lines below to test your work
// const helloWorld = new Words('Hello World');
// for (let word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'

