const supertest = require('supertest')
const app = require('../src/index')

describe("Tests the movies microservice", () => {

    // Testing /
    it("tests the base endpoint and returns true for status", async () => {
        const response = await supertest(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body.status).toBe(true);
    });

    // Testing GET /movies - no user validation
    it("Tests get api movies method without validated user", async () => {
        const response = await supertest(app).get('/movies');
        expect(response.status).toBe(401);
    });

});
