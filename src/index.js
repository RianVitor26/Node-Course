const http = require('http')
const server = http.createServer((req, res) => {
    res.write("Hello, world!")
    res.end()
})

const port  = 3002
server.listen(port, console.log(`http://localhost:${port}`))
