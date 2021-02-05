import fastify from 'fastify';
import pinoms from 'pino-multi-stream';
import { app } from './app';

const { ADDRESS = '127.0.0.1', PORT = 3000, TRUST_PROXY } = process.env;

const streams: pinoms.Streams = [
  { stream: process.stdout }, // an "info" level destination stream
  { level: 'error', stream: process.stderr }, // an "error" level destination stream
];

const server = fastify({
  logger: pinoms({ streams }),
  trustProxy: TRUST_PROXY || ADDRESS,
});

server.register(app);

server.listen(PORT, ADDRESS);

export default server;
