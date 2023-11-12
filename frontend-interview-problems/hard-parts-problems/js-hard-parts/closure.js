//challenge 1 

function createFunction () {
  function sayHello () {
    console.log("hello")
  }
  return sayHello
}

// /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); // => should console.log('hello');

//

//challenge 2 

function createFunctionPrinter (input) {
  function printer () {
    console.log(input)
  }
  return printer
}

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');

//

//challenge 3

function outer () {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

// /*** Uncomment these to check your work! ***/

/*
const willCounter = outer();
const jasCounter = outer();
willCounter() // will console.log: 'counter 1'
willCounter() // will console.log: 'counter 2'
willCounter() // will console.log: 'counter 3'

jasCounter() // will console.log: 'counter 1'
willCounter() // will console.log: 'counter 4'
*/

function addByX (x) {
  function adder (numberToAddToX) {
    return x + numberToAddToX
  }
  return adder
}
// /*** Uncomment these to check your work! ***/
// const addByTwo = addByX(2);
// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

// const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9

//

//challenge 4 

function once (fn) {
  //should this be null or undefined ? 
  result = null
  function handleCall (...args) {
    if (!result) {
      result = fn(...args)
      return result
    } else {
      return result
    }
  }
  return handleCall
}

// /*** Uncomment these to check your work! ***/
// const addByTwo = addByX(2)
// const onceFunc = once(addByTwo);
// console.log(onceFunc(4));  // => should log 6
// console.log(onceFunc(10));  // => should log 6
// console.log(onceFunc(9001));  // => should log 6

//

//challenge 5 

function after (count, func) {
  functionCallCountdown = 0
  //should this be null or undefined ? 
  result = null
  function functionToCall (...args) {
    functionCallCountdown++
    if (functionCallCountdown >= count) {
      return result ? result : func(...args)
    }
  }
  return functionToCall
}

// /*** Uncomment these to check your work! ***/
// const called = function () { console.log('hello') };
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed

//

//challenge 6 

function delay (func, wait, ...args) {
  function delayedFunction () {
    setTimeout(() => {
      console.log(func(...args))
    }, wait)
  }
  return delayedFunction
}

function add (a, b) {
  return a + b
}

// /*** Uncomment these to check your work! ***/
// const delayedAdder = delay(add, 1000, 4, 5)
// delayedAdder()

//

//challenge 7 

function rollCall (names) {
  idx = 0
  function callName () {
    if (idx >= names.length) {
      console.log("Everyone accounted for...")
    } else {
      console.log(names[idx++])
    }
  }
  return callName
}

// /*** Uncomment these to check your work! ***/
// const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// rollCaller() // => should log 'Victoria'
// rollCaller() // => should log 'Juan'
// rollCaller() // => should log 'Ruth'
// rollCaller() // => should log 'Everyone accounted for'

//

//challenge 8 

function saveOutput (func, magicWord) {
  const output = {}
  function logOutput (input) {
    if (typeof input === "string") {
      if (input === magicWord) {
        console.log(output)
      } else {
        console.log("login credentials incorrect")
      }
    } else {
      if (output[input]) {
        console.log(output[input])
      } else {
        const result = func(input)
        output[input] = result
        console.log(result)
      }
    }
  }
  return logOutput
}

// /*** Uncomment these to check your work! ***/
// const multiplyBy2 = function(num) { return num * 2; };
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }

//

// CHALLENGE 9
function cycleIterator (array) {
  let idx = 0
  function logItemInArray () {
    console.log(array[idx])
    idx = (idx + 1) % array.length
  }
  return logItemInArray

}

// /*** Uncomment these to check your work! ***/
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'

//

// CHALLENGE 10
function defineFirstArg (func, arg) {
  function logValueWithSecondArg (secondArg) {
    console.log(func(arg, secondArg))
  }
  return logValueWithSecondArg
}

// /*** Uncomment these to check your work! ***/
// const subtract = function(big, small) { return big - small; };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15

//

// CHALLENGE 11
function dateStamp (func) {
  const date = new Date()
  function logWithDate (arg) {
    console.log(`{ date : ${ date }, output: ${ func(arg) }}`)
  }
  return logWithDate
}

// /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

//

// CHALLENGE 12
function censor () {
  const censoredWords = {}
  function logCensoredContent (...args) {
    if (args.length === 2) {
      censoredWords[args[0]] = args[1]
    } else if (args.length === 1) {
      contentArray = args[0].split(" ")

      for (let i = 0; i < contentArray.length; i++) {
        const offensiveTest = contentArray[i]
        console.log(censoredWords)
        console.log(censoredWords[offensiveTest])
        if (censoredWords[offensiveTest]) {
          console.log("hello")
          contentArray[i] = censoredWords[offensiveTest]
        }
      }
      console.log(contentArray.join(" "))
    } else {
      console.log("invalid arguments")
    }
  }
  return logCensoredContent
}

// /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'

//

//challenge 13 

function createSecretHolder (secret) {
  secretHolder = {
    secretNumber: secret,
    getSecret () {
      console.log(this.secretNumber)
      return this.secretNumber
    },
    setSecret (num) {
      this.secretNumber = num
    }
  }
  return secretHolder
}

// /*** Uncomment these to check your work! ***/
// obj = createSecretHolder(5)
// obj.getSecret() // => returns 5
// obj.setSecret(2)
// obj.getSecret() // => returns 2

// 

//challenge 14

function callTimes () {
  let callCount = 0
  function countTheCalls () {
    callCount++
    console.log(callCount)
    return callCount
  }
  return countTheCalls
}

// /*** Uncomment these to check your work! ***/
// let myNewFunc1 = callTimes();
// let myNewFunc2 = callTimes();
// myNewFunc1(); // => 1
// myNewFunc1(); // => 2
// myNewFunc2(); // => 1
// myNewFunc2(); // => 2

//

//challenge 15 

function roulette (num) {
  let numSpins = 0
  function spinWheel () {
    numSpins++
    if (numSpins > num) {
      return "pick a number to play again"
    }
    return numSpins === num ? "win" : "spin"
  }
  return spinWheel
}

// /*** Uncomment these to check your work! ***/
// const play = roulette(3);
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'win'
// console.log(play()); // => should log 'pick a number to play again'
// console.log(play()); // => should log 'pick a number to play again'

// 

//challenge 16

function average () {
  const items = []
  function findCurrentAverage (...args) {
    if (args.length > 1) {
      console.log("...too many items")
      return
    }
    if (args.length === 1) {
      items.push(args[0])
    }
    if (items.length === 0) {
      return 0
    }
    return (items.reduce((a, b) => a + b, 0)) / items.length
  }
  return findCurrentAverage
}

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
// console.log(avgSoFar()); // => should log 6
// console.log(avgSoFar(12)); // => should log 8
// console.log(avgSoFar()); // => should log 8

// 

//challenge


module.exports = { createFunction, createFunctionPrinter, addByX, once, after, delay, rollCall, saveOutput, cycleIterator, defineFirstArg, dateStamp, censor, createSecretHolder, callTimes, roulette, average }



