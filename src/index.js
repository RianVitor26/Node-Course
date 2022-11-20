const path = require('path')
const url = "www.mercadolivre"

console.log(path.resolve('index.js'))
console.log(path.basename(url))
console.log(path.join(url, "/produtos.com"))
console.log(path.extname('index.js'))
console.log(__dirname  + '/index.js')

