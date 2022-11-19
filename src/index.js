const url = require('url')

const decomposedUrl = new url.URL('https://rianvitor.vercel.app')

console.log('href:' + ' ' +  decomposedUrl.href)
console.log("protocol:" + " " +  decomposedUrl.protocol);
console.log("host:" + " " +  decomposedUrl.host);
console.log("hostname:" + " " +  decomposedUrl.hostname);
console.log("origin:" + " " +  decomposedUrl.origin);

