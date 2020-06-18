import { FastifyInstance } from "fastify";
import { createServer } from "../helper";
import about from "../../src/services/about";

let app: FastifyInstance;

beforeAll(() => {
  app = createServer();
  app.register(about);
});
afterAll(() => app.close());

describe("About Service", () => {

  test("GET /about", async () => {
    const about = await app.inject({
      method: "GET",
      url: "/about"
    });

    expect(about.statusCode).toBe(200);
    expect(JSON.parse(about.payload)).toEqual(expect.objectContaining({
      name: expect.any(String),
      desc: expect.any(String),
      author: expect.any(String)
    }));
  });

});
