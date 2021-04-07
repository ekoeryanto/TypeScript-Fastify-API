import { FastifyInstance } from 'fastify';
import { createServer } from '../tester';
import about from './about';

let app: FastifyInstance;

beforeAll(() => {
  app = createServer();
  app.register(about);
});
afterAll(() => app.close());

describe('About Service', () => {
  test('GET /about', async () => {
    const res = await app.inject({
      method: 'GET',
      url: '/about',
    });

    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.payload)).toEqual(expect.objectContaining({
      author: expect.any(String),
    }));
  });
});
