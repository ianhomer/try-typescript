import { expect } from "chai";
import request from "supertest";
import { Response } from "supertest";

import app from "./app";

describe("Hello", () => {
  describe("#GET / hello", () => {
    it("should get hello", done => {
      request(app)
        .get("/")
        .end((err: string, response: Response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.be.an("object");
          expect(response.body.message).to.equal("Hello World!");
          done();
        });
    });
  });
});
