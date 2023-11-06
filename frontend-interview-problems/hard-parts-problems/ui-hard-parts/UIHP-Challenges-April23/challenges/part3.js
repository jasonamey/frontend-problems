let myName = '';
let isFocus = false;
let vDOM

let jsInput = document.querySelector('input');
let jsDiv = document.querySelector('div');

function handleInput () {
  myName = jsInput.value;
}
jsInput.oninput = handleInput

function convert (node) {
  const element = document.createElement(node[0])
  element.textContent = node[1]
  if (node[0] === 'input') {
    element.value = node[1]
  }
  if (node.length > 2) {
    element.oninput = node[2]
  }
  return element
}

function createVDOM () {
  return [[
    'input',
    myName,
    function handle () {
      myName = jsInput.value;
    },
  ], ['div', `Hello, ${ myName }!`]]
}

function updateVDOM () {
  document.activeElement === jsInput ? (isFocus = true) : (isFocus = false);
  vDOM = createVDOM()
  jsInput = convert(vDOM[0])
  jsDiv = convert(vDOM[1])
  // console.log(vDOM)
  document.body.replaceChildren(jsInput, jsDiv)
  if (isFocus) jsInput.focus();
}

setInterval(updateVDOM, 15);
