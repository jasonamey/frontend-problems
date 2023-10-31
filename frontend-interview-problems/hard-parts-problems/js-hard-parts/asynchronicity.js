//challenge 1 

function sayHowdy () {
  console.log('Howdy');
}

function testMe () {
  setTimeout(sayHowdy, 0);
  console.log('Partnah');
}

// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first? Jason's Answer: 1. Partnah 2. Howdy

//

//challenge 2 

function delayedGreet () {
  setTimeout(() => {
    console.log("welcome")
  }, 3000)
}
// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome

//

//challenge 3 

function helloGoodbye () {
  setTimeout(() => {
    console.log("goodbye")
  }, 3000)
  console.log("hello")
}
// Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

//

//challenge 4

function brokenRecord () {
  setInterval(() => {
    console.log("hi again")
  }, 1000)
}
// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again

//

//challenge 5

function limitedRepeat () {
  count = 0
  interval = setInterval(() => {
    count++
    console.log("here for now")
    if (count === 5) {
      clearInterval(interval)
    }
  }, 1000)
}
// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now

//

//challenge 6 

function everyXsecsForYsecs (fn, fn_interval, duration) {
  let total_count = duration / fn_interval
  let count = 0
  interval = setInterval(() => {
    if (count < total_count) {
      fn()
      count += fn_interval
    } else {
      clearInterval(interval)
    }

  }, fn_interval * 1000)


}
// Uncomment the following lines to check your work!
// function theEnd () {
//   console.log('This is the end!');
// }
// everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!

//

//challenge 7 

function delayCounter (target, wait) {
  function counter () {
    count = 0
    const interval = setInterval(() => {
      count++
      if (count >= target) {
        clearInterval(interval)
      }
      console.log(`After ${ count } second${ count > 1 ? 's' : '' }, log ${ count }`)
    }, wait)
  }
  return counter

}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const countLogger = delayCounter(3, 1000)
// countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

//

//challenge 8 

function promised (val) {
  let promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(val)
    }, 2000)
  })
  return promise
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const createPromise = promised('wait for it...');
// createPromise.then((val) => console.log(val));
// will log "wait for it..." to the console after 2 seconds

// 

//challenge 9 


class SecondClock {
  constructor (cb) {
    this.mainMethod = cb
  }
  // ADD METHODS HERE
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const clock = new SecondClock((val) => { console.log(val) });
// console.log("Started Clock.");
// clock.start();
// setTimeout(() => {
//     clock.reset();
//     console.log("Stopped Clock after 6 seconds.");
// }, 6000);

//
