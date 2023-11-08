let data = { "myName": "" }
let vDOM = createVDOM();
let elems
let prevDOM

function createVDOM () {
  return [
    [
      "input",
      data["myName"],
      function handle (e) {
        updateData("myName", e.target.value)
      },
    ],
    ["div", `Hello, ${ data["myName"] }!`],
    ["div", `Great job, Jonathan!`],
    ["div", `Great job, Alexa!`],
    ["div", `Great job, Emilia!`],
  ];
}

function updateDOM () {
  if (elems === undefined) {
    elems = vDOM.map(convert)
    document.body.replaceChildren(...elems)
  } else {
    document.activeElement == document.querySelector("input")
      ? (isFocus = true)
      : (isFocus = false)
    prevDOM = [...vDOM]
    vDOM = createVDOM()
    findDiff(prevDOM, vDOM)
    if (isFocus) elems[0].focus();
  }
}

function convert (node) {
  const element = document.createElement(node[0]);
  element.textContent = node[1];
  element.value = node[1];
  element.oninput = node[2];
  return element;
}

function updateData (label, value) {
  data[label] = value
  updateDOM()
}

function findDiff (prevVDOM, currentVDOM) {
  for (let i = 0; i < currentVDOM.length; i++) {
    if (JSON.stringify(prevVDOM[i]) !== JSON.stringify(currentVDOM[i])) {
      elems[i].textContent = currentVDOM[i][1]
      elems[i].value = currentVDOM[i][1]
    }
  }
}

updateDOM()

