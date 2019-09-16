import { expect } from "chai";
import request from "supertest";

import app from "./app";
import {Response} from "supertest";

describe("Hello", () => {
  describe("#GET / hello", () => {
    it("should get hello", done => {
      request(app)
        .get("/")
        .end((err: any, response: Response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.be.an("object");
          expect(response.body.message).to.equal("Hello World!");
          done();
        });
    });
  });
});
