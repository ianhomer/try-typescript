import { expect } from 'chai';
const request = require('supertest');

import app from "./app";

describe('Hello', function() {
    describe('#GET / hello', function() {
        it('should get hello', function(done) {
            request(app).get('/')
                .end(function(err: any, response: { statusCode: any; body: any; }) {
                    expect(response.statusCode).to.equal(200);
                    expect(response.body).to.be.an('object');
                    expect(response.body.message).to.equal('Hello World!');
                    done();
                });
        });
    });
});