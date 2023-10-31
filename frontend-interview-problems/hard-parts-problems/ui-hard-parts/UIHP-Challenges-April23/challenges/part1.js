/** Write your code below */
let post = ""
const jsInput = document.querySelector('input')
const jsDiv = document.querySelector('div')

// Now let's update our JavaScript data based on our user interactions. First, edit your variable declaration for post at the 
// top of the file to initialize it to an empty string instead.

// Declare a function 'handleInput' that will "handle" what we want to do with what the user types in the input. Use the value 
// getter/setter method available on our jsInput object. When the user types into the input, reassign post to hold that text.

// Set the textContent on the div to to be the value of post here in handleInput instead.


function handleInput (e) {
  post = e.target.value
  jsDiv.textContent = post
}

jsInput.oninput = handleInput

jsDiv.textContent = post
