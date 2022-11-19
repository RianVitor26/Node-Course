const http = require('http')
const server = http.createServer((req, res) => {
    const url = require('url')
    const urlInfo = url.parse(req.url, true)
    const name = urlInfo.query.nome


    res.setHeader('Content-Type', 'text/html; charset=utf8')
    res.statusCode = 200


    if (!name) {
        res.end(`
            <h1>Insira seu nome</h1>
            <form action="GET">
                <label for="name">Name</label>
                <input type="text" name="nome">
                <input type="submit">
            </form>/        
        `);
    } else {
        res.end(`Hello, ${name}`); 
    }
})

const port  = 3002
server.listen(port, console.log(`http://localhost:${port}`))
