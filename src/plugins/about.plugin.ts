import { FastifyPluginCallback } from 'fastify';
import fp from 'fastify-plugin';

declare module 'fastify' {
  interface FastifyInstance {
    author: string | Record<string, string>
  }
}

//  define options
export interface AboutOptions {
  sensitive?: string
}

const about: FastifyPluginCallback<AboutOptions> = (app, options, done) => {
  app.decorate('author', 'Eko Eryanto <ekoeryanto@gmail.com>');

  done();
};

export default fp(about);
