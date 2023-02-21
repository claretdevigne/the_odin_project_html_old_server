const https = require('http');
const fs = require('fs')

const hostname = 'localhost'
const port = 8080

const server = https.createServer((req, res) => {
  let data = null
  if (req.url === '/') {
    let data = fs.readFileSync('./index.html', 'utf-8')
    res.writeHead(200, { 'Content-type': 'text/html'})
    res.end(data)
  } else if (req.url === '/about') {
    let data = fs.readFileSync('./about.html', 'utf-8')
    res.writeHead(200, { 'Content-type': 'text/html'})
    res.end(data)
  } else if (req.url === '/contact') {
    let data = fs.readFileSync('./contact-me.html', 'utf-8')
    res.writeHead(200, { 'Content-type': 'text/html'})
    res.end(data)
  } else {
    let data = fs.readFileSync('./404.html', 'utf-8')
    res.writeHead(200, { 'Content-type': 'text/html'})
    res.end(data)  
  }
})

server.listen(port, hostname, () => {
  console.log('Server running on ' + port + " port!")
})