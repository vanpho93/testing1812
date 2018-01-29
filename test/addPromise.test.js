const assert = require('assert');
const addPromise = require('../src/addPromise');

describe('Test addPromise', () => {
    it('Can add 2 native numbers', (done) => {
        addPromise(4, 5)
        .then(result => {
            assert.equal(result, 9);
            done();
        });
    });

    it('Cannot add sth that is not a number', (done) => {
        addPromise('x', 5)
        .then(() => { throw new Error('Wrong'); })
        .catch(err => {
            assert.equal(err.message, 'Type error.');
            done();
        });
    });
});

describe('Test addPromise with async', () => {
    it('Can add 2 native numbers', async () => {
        const result = await addPromise(4, 5);
        assert.equal(result, 9);
    });

    it.only('Cannot add sth that is not a number', async () => {
        try {
            const result = await addPromise('x', 5);
            throw new Error('Wrong.');
        } catch (err) {
            assert.equal(err.message, 'Type error.');
        }
    });
});
