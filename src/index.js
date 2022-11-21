const express = require('express')
const port = 3000
const server = express()
const path = require('path')


const baseUrl = path.join(__dirname, './index.html')

server.get('/users/:id', (req, res) => {
  res.sendFile(`${baseUrl}`)
  const id = req.params.id;
  console.log(`${id}`)
})

server.get('/', (req, res) => {
  res.send('Hello world!')
})

server.listen(port, () => console.log(`http://localhost:${port}`))

