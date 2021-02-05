import { FastifyInstance } from 'fastify';

export default async (app: FastifyInstance) => {
  app.get('/about', (request, reply) => {
    reply.send({
      author: app.author,
    });
  });
};
