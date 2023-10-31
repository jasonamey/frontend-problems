let post = undefined;
// let posts = localStorage.getItem('posts');

const jsInput = document.querySelector('input');
const jsDiv = document.querySelector('div');
// const button = document.querySelector('button')
// const oldPosts = document.querySelector('.old-posts')

jsInput.value = "What's on your mind?"

function dataToView () {
  jsInput.value = post === undefined ? "what's on your mind" : post
  jsDiv.textContent = post
  // oldPosts.textContent = localStorage.getItem('posts') === null ? "no posts published" : JSON.stringify(localStorage.getItem('posts'))
}

// function handleSubmit () {
//   console.log("Hello")
//   if (posts === null) {
//     newPost = []
//     newPost.push(jsInput.value)
//     const forMemory = JSON.stringify(newPost)
//     post = forMemory
//     localStorage.setItem('posts', JSON.stringify(forMemory))
//   } else {
//     let oldPostsFromMemory = JSON.parse(localStorage.getItem('posts'))
//     localStorage.setItem('posts', JSON.stringify(oldPostsFromMemory.push(jsInput.value)))
//   }
// }


function handleClick () {
  post = ""

}


function handleInput () {
  post = jsInput.value;

}

setInterval(dataToView, 15)

dataToView()

jsInput.onclick = handleClick
jsInput.oninput = handleInput
// button.onclick = handleSubmit
