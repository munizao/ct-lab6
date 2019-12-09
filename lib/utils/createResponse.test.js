const createResponse = require('./createResponse');

describe('createResponse', () => {
  it('creates a valid HTTP response', () => {
    const response = createResponse({
      body: 'hi',
      status: '200 OK',
      contentType: 'text/plain'
    });

    expect(response).toEqual(`HTTP/1.1 200 OK
Accept-Ranges: bytes
Content-Length: 2
Content-Type: text/plain

hi`);
  });
});
