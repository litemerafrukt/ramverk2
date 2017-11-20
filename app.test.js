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
