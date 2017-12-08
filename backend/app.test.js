/**
 * Preliminary tests
 */

/* global test expect */
const request = require("supertest");

const app = require("./app");

test("It should response with status 200 on home (/)", done => {
    return request(app)
        .get("/")
        .expect(200, done);
});

test("It should with status 404 on /whatever", done => {
    return request(app)
        .get("/whatever")
        .expect(404, done);
});

test("/api/test should respond with status 200", done => {
    return request(app)
        .get("/api/test")
        .expect(200, done);
});

test("/api/test should respond with body containing 'test' key", done => {
    return request(app)
        .get("/api/test")
        .then(res => expect(res.body).toHaveProperty("test"))
        .then(done);
});

test("/api/reports/kmom01 should respond with 200", done => {
    return request(app)
        .get("/api/reports/kmom01")
        .expect(200, done);
});

test("/api/reports/kmom01 should respond with body containing 'kmom01'", done => {
    return request(app)
        .get("/api/reports/kmom01")
        .then(res => expect(res.body).toContain("kmom01"))
        .then(done);
});

test("/api/reports/whatever should respond with 404", done => {
    return request(app)
        .get("/api/reports/whatever")
        .expect(404, done);
});

test("/api/reports/whatever should respond err in json", done => {
    return request(app)
        .get("/api/reports/whatever")
        .then(res => expect(res.body).toHaveProperty("err"))
        .then(done);
});

test("/api/reports/whatever should respond with 404", done => {
    return request(app)
        .get("/api/reports/whatever")
        .expect(404, done);
});
