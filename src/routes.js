const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
    res.send('Home')
})
routes.get('/produtos', (req, res) => {
    res.send('Produtos')
})


module.exports = routes;