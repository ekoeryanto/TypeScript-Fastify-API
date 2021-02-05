import { join } from 'path';
import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import Autoload from 'fastify-autoload';
import about from './plugins/about.plugin';

export function app(
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
  next: CallableFunction,
) {
  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'test') {
    fastify.register(Autoload, {
      dir: join(__dirname, 'services'),
    });
  }

  fastify.register(about);

  next();
}

export default app;
