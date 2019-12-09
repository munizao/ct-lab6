const request = require('supertest');
const net = require('net');
const app = require('../lib/app');

describe('app client', () => {
  it('sends "hi" on / ', () => {
    const client = new net.Socket();
    client.write(`GET / HTTP/1.1
    Accept-Language: en-us`);
    client.on('data', (response) => {
      expect(response).toEqual(`HTTP/1.1 200 OK
Accept-Ranges: bytes
Content-Length: 2
Content-Type: text/plain

hi`);
    });
  });
});
