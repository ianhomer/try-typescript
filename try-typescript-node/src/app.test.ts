import { expect } from 'chai';
const request = require('supertest');

import app from "./app";

describe('Hello', () => {
    describe('#GET / hello', () => {
        it('should get hello', (done) => {
            request(app).get('/')
                .end((err: any, response: { statusCode: any; body: any; }) => {
                    expect(response.statusCode).to.equal(200);
                    expect(response.body).to.be.an('object');
                    expect(response.body.message).to.equal('Hello World!');
                    done();
                });
        });
    });
});