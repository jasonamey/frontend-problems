let post = undefined;


const jsInput = document.querySelector('input');
const jsDiv = document.querySelector('div');




function dataToView () {
  jsInput.value = post === undefined ? "What's on your mind" : post
  jsDiv.textContent = post
}

function handleClick () {
  post = ""
  dataToView()
}


function handleInput () {
  post = jsInput.value
  dataToView()
}

// setInterval(dataToView, 15)

// dataToView()

jsInput.onclick = handleClick
jsInput.oninput = handleInput

window.onload = dataToView