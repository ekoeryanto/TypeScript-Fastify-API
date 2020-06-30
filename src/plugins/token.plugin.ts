import { FastifyPlugin, FastifyRequest, FastifyReply } from "fastify";
import fp from "fastify-plugin";
import jwt, { FastifyJWTOptions } from "fastify-jwt";


const tokenPlugin: FastifyPlugin<FastifyJWTOptions> = async (app, opts) => {
  app.register(jwt, opts);

  // app.decorate("verifyJWT", async (req: FastifyRequest, rep: FastifyReply) => {
  //   try {
  //     await req.jwtVerify();
  //   } catch (err) {
  //     rep.send(err) ;
  //   }
  // });

  app.addHook("onRequest", async (request, reply) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  });
};

export default fp(tokenPlugin);

declare module "fastify" {
  interface FastifyInstance {
    verifyJWT: (request: FastifyRequest, reply: FastifyReply) => Promise<void>
  }
 }
