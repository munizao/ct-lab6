const request = require('supertest');
const net = require('net');
const app = require('../lib/app');
const client = require('../lib/client');

describe('client connection', () => {
  it('sends "hi" on GET /', () => {
    client({ method: 'GET', path: '/' }, data => {
      expect(data.toString()).toEqual(`HTTP/1.1 200 OK
Accept-Ranges: bytes
Content-Length: 2
Content-Type: text/plain

hi`);
    });
  });

  it('sends html on GET /green', () => {
    client({ method: 'GET', path: '/green' }, data => {
      expect(data.toString()).toEqual(`HTTP/1.1 200 OK
Accept-Ranges: bytes
Content-Length: 46
Content-Type: text/html

<html><head></head><body><h1>green</h1></body>`);
    });
  });

  it('echoes request body on POST /echo', () => {
    client({ method: POST, path: 'echo', body:  } () => )
  })
});
