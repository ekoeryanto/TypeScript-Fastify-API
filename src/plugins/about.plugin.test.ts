import fastify from 'fastify';
import about from './about.plugin';

const app = fastify();

beforeAll(() => app.register(about));
afterAll(() => {
  app.close();
});

describe('About Plugin', () => {
  it('decorate author to main instance', () => {
    expect(app.author).toBe('Eko Eryanto <ekoeryanto@gmail.com>');
  });
});
