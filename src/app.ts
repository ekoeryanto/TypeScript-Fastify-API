import { join } from "path";
import { FastifyInstance } from "fastify";
import Autoload from "fastify-autoload";
import about from "./plugins/about.plugin";
import { FastifyPluginOptions } from "fastify";
import tokenPlugin from "./plugins/token.plugin";

export function app(fastify: FastifyInstance, opts: FastifyPluginOptions, next: CallableFunction) {

  /* istanbul ignore next */
  if (process.env.NODE_ENV !== "test") {
    fastify.register(Autoload, {
      dir: join(__dirname, "services")
    });
  }

  fastify.register(about);
  fastify.register(tokenPlugin, {
    secret: "foo"
  });

  next();
}
