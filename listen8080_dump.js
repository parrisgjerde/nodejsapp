const http = require('http');

http.createServer((request, response) => {
  request.on('error', (err) => {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  response.on('error', (err) => {
    console.error(err);
  });
  let data = '';
  request.on('data', chunk => {
    data += chunk;
  })
  request.on('end', () => {
    console.log("----------");
    console.log(JSON.parse(data)); 
    response.end();
  });
//  if (request.method === 'POST' && request.url === '/echo') {
//    request.pipe(response);
//    console.log("request URL is " +request.url);
//  } else {
//    response.statusCode = 404;
//    response.end();
//  }
}).listen(8080);
