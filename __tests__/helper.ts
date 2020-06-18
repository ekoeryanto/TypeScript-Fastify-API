import fastify, { FastifyInstance } from "fastify";
import plug from "fastify-plugin";
import { app } from "../src/app";

function config () {
  return {};
}


export function createServer(): FastifyInstance {
  const server = fastify();

  server.register(plug(app), config());

  return server;
}