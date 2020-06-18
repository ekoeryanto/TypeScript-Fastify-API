import { FastifyInstance } from "fastify";

export default async (app: FastifyInstance) => {
  app.get("/about", (request, reply) => {
    reply.send({
      name: app.name,
      desc: request.desc(),
      author: reply.author()
    });
  });
};
