const request = require('supertest');
const net = require('net');
const app = require('../lib/app');

describe('client connection', () => {
  it('sends "hi" on / ', () => {
    const client = new net.Socket();
    client.connect(8001, () => {
      client.write(`GET / HTTP/1.1
      Accept-Language: en-us`);
      client.on('data', (response) => {
        expect(response.toString()).toEqual(`HTTP/1.1 200 OK
Accept-Ranges: bytes
Content-Length: 2
Content-Type: text/plain

hi`);
      });
    });
  });
});
