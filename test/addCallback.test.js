const assert = require('assert');
const addCallback = require('../src/addCallback');

describe('Test add callback', () => {
    it('Can add 2 native number', done => {
        addCallback(3, 4, (err, result) => {
            assert.equal(err, null);
            assert.equal(result, 7);
            done();
        });
    });

    it('Cannot add sth that is not a number', done => {
        addCallback('x', 4, (err, result) => {
            assert.equal(result, undefined);
            assert.equal(err.message, 'Type error.');
            done();
        });
    });
});
