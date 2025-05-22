const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return Hello from Jenkins Node.js Pipeline!', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello from Jenkins Node.js Pipeline!');
    expect(res.statusCode).toBe(200);
  });
});