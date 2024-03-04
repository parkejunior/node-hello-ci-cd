import request from "supertest";
import { app } from "./index";

describe("Test Handlers", function () {
  test("responds to /", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello World!");
  });

  test("responds to /hello/:name", async () => {
    const name = "Alice";
    const response = await request(app).get(`/hello/${name}`);

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(`Hello ${name}!`);
  });
});
