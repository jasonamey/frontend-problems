// let myName = "";

// const vDOM = [
//   [
//     "input",
//     myName,
//     function handle() {
//       myName = jsInput.value;
//     },
//   ],
//   ["div", `Hello, ${myName}!`],
// ];

// function convert(node) {
//   const element = document.createElement(node[0]);
//   element.textContent = node[1];
//   element.value = node[1];
//   element.oninput = node[2];
//   return element;
// }

/** Step @todo */
/* uncomment the code below this line, and comment out the code above*/

let isFocus = false

let myName = '';
let jsInput;
let jsDiv;
let vDOM;

// function createVDOM () {
//   return [
//     [
//       'input',
//       myName,
//       function handle () {
//         myName = jsInput.value;
//       },
//     ],
// ['div', `Hello, ${ myName }!`],
// ["div", `Great job, Jonathan!`],
// ["div", `Great job, Alexa!`],
// ["div", `Great job, Emilia!`],
//   ];
// }

function createVDOM () {
  return [[
    'input',
    myName,
    function handle () {
      myName = jsInput.value;
    },
  ], ['div', `Hello, ${ myName }!`],
  ['div', `Hello, ${ myName }!`],
  ["div", `Great job, Jonathan!`],
  ["div", `Great job, Alexa!`],
  ["div", `Great job, Emilia!`]]
}

function updateDOM () {
  document.activeElement === jsInput ? (isFocus = true) : (isFocus = false);
  vDOM = createVDOM();
  // console.log(vDOM)
  const elems = vDOM.map(convert)
  // console.log(elems)
  // jsInput = convert(vDOM[0]);
  // jsDiv = convert(vDOM[1]);
  document.body.replaceChildren(...elems);
  if (isFocus) jsInput.focus()
}

function convert (node) {
  const element = document.createElement(node[0]);
  element.textContent = node[1];

  if (node[0] === 'input') {
    element.value = node[1]
  }
  if (node.length > 2) {
    element.oninput = node[2]
  }
  return element;
}

// updateDOM()

setInterval(updateDOM, 15);
