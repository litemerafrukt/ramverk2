/**
 * Preliminary tests
 */

/* global test expect */
const request = require("supertest");

const app = require("./app");

test("It should response to GET method on home with status 200", () => {
    return request(app)
        .get("/")
        .expect(200);
});

test("It should response to GET method on /whatever with status 404", () => {
    return request(app)
        .get("/whatever")
        .expect(404);
});

test("/api/test should respond with status 200", () => {
    return request(app)
        .get("/api/test")
        .expect(200);
});

test("/api/test should respond with body containing 'test' key", () => {
    return request(app)
        .get("/api/test")
        .then(res => expect(res.body).toHaveProperty("test"));
});

test("/api/reports/kmom01 should respond with 200", () => {
    return request(app)
        .get("/api/reports/kmom01")
        .expect(200);
});

test("/api/reports/whatever should respond with 404", () => {
    return request(app)
        .get("/api/reports/whatever")
        .expect(404);
});
