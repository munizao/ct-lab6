const request = require('supertest');
const app = require('../lib/app');

describe('client connection', () => {
  it('sends "hi" on GET /', () => {
    return request(app).get('/')
      .then(response => {
        expect(response.status).toBe(200);
        expect(response.text).toBe('hi');
      });
  });

  it('sends html on GET /green', async done => {
    const response = await request(app).get('/green');
    expect(response.status).toBe(200);
    expect(response.text).toBe('<html><head></head><body><h1>green</h1></body>');
    done();
  });

  it('echoes request body on POST /echo', async done => {
    const response = await request(app).post('/echo', { method: POST, path: 'echo', body:  })
    client({ method: POST, path: 'echo', body:  } () => )
    done();
  })
});
