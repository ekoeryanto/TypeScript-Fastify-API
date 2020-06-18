import fastify from "fastify";
import about from "../../src/plugins/about.plugin";
import pkg from "../../package.json";

const app = fastify();

beforeAll(() => app.register(about));
afterAll(() => {
  app.close();
});

describe("About Plugin", () => {
  it("decorate name to main instance", () => {
    expect(app.name).toBe(pkg.name);
  });

  it("decorate desc to request", () => {
    expect(app.hasRequestDecorator("desc")).toBeTruthy();
  });

  it("decorate author to reply", () => {
    expect(app.hasReplyDecorator("author")).toBeTruthy();
  });
});
