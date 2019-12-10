const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  return socket.on('data', data => {
    const makehtml = bodyText => `<html><head></head><body><h1>${bodyText}</h1></body>`;
    const request = parseRequest(data.toString());
    if(request.method === 'GET' && request.path === '/') {
      socket.end(createResponse({ body: 'hi', status: '200 OK', contentType: 'text/plain' }));
    }
    else if(request.method === 'GET' && ['/red', '/green', '/blue'].includes(request.path)) {
      socket.end(createResponse({ body: makehtml(request.path.slice(1)), status: '200 OK', contentType: 'text/html' }));

    }
    else if(request.method === 'POST' && request.path === '/echo') {
      socket.end(createResponse({ body: request.body, status: '200 OK', contentType: 'text/plain' }));
    }
    else {
      socket.end(createResponse({ body: makehtml('Not Found'), status: '404 Not Found', contentType: 'text/html' }));
    }
  });
});

module.exports = app;
