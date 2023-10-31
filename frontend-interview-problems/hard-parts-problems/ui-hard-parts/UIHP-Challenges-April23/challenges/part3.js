let myName = '';
let isFocus = false;

let jsInput = document.querySelector('input');
let jsDiv = document.querySelector('div');

// function dataToView () {
//   jsInput.value = myName;
//   jsDiv.textContent = myName;
// }

function handleInput () {
  myName = jsInput.value;
}

// jsInput.oninput = handleInput;

function component () {
  document.activeElement === jsInput ? (isFocus = true) : (isFocus = false);
  jsInput = document.createElement('input')
  jsDiv = document.createElement('div')
  jsInput.value = myName
  jsDiv.textContent = myName
  jsInput.oninput = handleInput
  //your code here

  if (isFocus) jsInput.focus();
}

setInterval(dataToView, 15);
