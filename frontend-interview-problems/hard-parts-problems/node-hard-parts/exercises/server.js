const http = require('http');
const fs = require('fs');

function doOnRequest (request, response) {
  // Send back a message saying "Welcome to Twitter"
  // code here...
  // response.end("Welcome to twitter")
  if (request.method === 'GET' && request.url === '/') {
    // read the index.html file and send it back to the client
    // code here...

    const page = fs.readFileSync('index.html', 'utf-8')
    response.end(page)
    // reader.on('data', (chunk) => {
    //   htmlPage = chunk.toString()
    //   response.end(htmlPage)
    // })

  } else if (request.method === "GET" && request.url == "/style.css") {
    const styleSheet = fs.readFileSync("style.css", "utf8");
    response.end(styleSheet)
  }

  else if (request.method === 'POST' && request.url === '/sayHi') {
    fs.appendFileSync('hi_log.txt', `${ new Date().toDateString() } somebody said hi!\n`)

    response.end("hi back to you")

  }
  else if (request.method === 'POST' && request.url === '/greeting') {
    const requestData = []
    request.on('data', data => {
      requestData.push(data.toString())
    }).on('end', () => {
      const [requestText] = requestData
      fs.appendFileSync('hi_log.txt', `${ new Date().toDateString() } REQUEST TEXT: ${ requestText }\n`)

      if (requestText === 'hello') {
        response.end('hello there!')
      }

      else if (requestText === 'what\'s up') {
        response.end('the sky!')
      } else {
        response.end('good morning!')
      }
    })

  }
  else {
    response.end("404 ERROR - oh no !")

  }
}

const server = http.createServer(doOnRequest)

server.listen(3000);
