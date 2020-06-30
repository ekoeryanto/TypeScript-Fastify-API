import { FastifyInstance } from "fastify";

export default async (app: FastifyInstance): Promise<void> => {
  app.get("/token", (request, reply) => {
    reply.send(app.jwt.sign({"foo": "bar"}));
  });

  app.get("/whoami", { preHandler: app.verifyJWT }, async (request) => {
    return request.user || {};
  });
};
