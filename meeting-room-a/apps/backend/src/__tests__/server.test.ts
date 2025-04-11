import supertest from "supertest";
import { describe, it, expect } from "@jest/globals";
import Server from "../server.js";

describe("server", () => {
  it("status check returns 200", async () => {
    await supertest(await Server.createServer())
      .get("/status")
      .expect(200)
      .then((res) => {
        expect(res.body.ok).toBe(true);
      });
  });

  it("message endpoint says hello", async () => {
    await supertest(await Server.createServer())
      .get("/message/jared")
      .expect(200)
      .then((res) => {
        expect(res.body.message).toBe("hello jared");
      });
  });
});
