const assert = require('assert');
const add = require('../src/add');

describe('Test add function', () => {
    it('Can add 2 numbers', () => {
        const kq = add(4, 1);
        assert.equal(kq, 5);
    });
    
    it('Can add 2 negative numbers', () => {
        const kq = add(-4, 1);
        assert.equal(kq, -3);
    });
});
