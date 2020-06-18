import { FastifyPlugin } from "fastify";
import fp from "fastify-plugin";

import * as pkg from "../../package.json";

declare module "fastify" {
  interface FastifyInstance {
    name: string
  }
  interface FastifyRequest {
    desc: () => string
  }
  interface FastifyReply {
    author: () => any
  }
 }

//  define options
 export interface AboutOptions {
  sensitive?: string
 }

const about: FastifyPlugin<AboutOptions> = (app, options, done) => {
  app.decorate("name", pkg.name);
  app.decorateRequest("desc", () => pkg.description);
  app.decorateReply("author", () => pkg.author);

  done();
};

export default fp(about);
