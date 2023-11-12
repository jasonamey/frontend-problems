// Challenge 1
function countdown (n) {
  if (n < 0) {
    throw new Error("can't call countdown with a number less than 0")
  }
  if (n === 0) {
    return ("...Blast Off")
  }
  return `${ n } ${ countdown(n - 1) }`
}

// Challenge 2
function sum (array) {
  if (array.length == 1) {
    return array[0]
  }
  else {
    const lastIdx = array.length - 1
    array[0] = array[0] + array[lastIdx]
    return sum(array.slice(0, lastIdx))
  }
}
// Challenge 3
function palindrome (string) {
  let strLen = string.length
  if (strLen === 0 || strLen === 1) return true
  string = string.toLowerCase().replace(/[^a-z]/g, "")
  strLen = string.length
  if (string[0] !== string[strLen - 1]) {
    return false
  }
  return palindrome(string.slice(1, strLen - 1))
}
// Challenge 4
function isPrime (num) {


}

module.exports = { countdown, sum, palindrome }