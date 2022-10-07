import request from "supertest";
import { Response } from "supertest";

import app from "./app";

describe("Hello", () => {
  describe("#GET / hello", () => {
    it("should get hello", (done) => {
      request(app)
        .get("/")
        .end((err: string, response: Response) => {
          expect(response.status).toEqual(200);
          expect(typeof response.body).toEqual("object");
          expect(response.body.message).toEqual("Hello World!");
          done();
        });
    });
  });
});
