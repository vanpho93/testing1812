const assert = require('assert');
const request = require('supertest');
const app = require('../../src/app');

describe.only('Test GET /cong/:a/:b', () => {
    it('Can add 2 numbers', async () => {
        const response = await request(app).get('/cong/4/5');
        assert.equal(response.text, 9);
        assert.equal(response.status, 200);
    });
    
    it('Cannot add 2 not numbers ', async () => {
        const response = await request(app).get('/cong/x/5');
        assert.equal(response.text, 'Type error.');
        assert.equal(response.status, 400);
    });
});
