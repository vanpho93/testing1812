const add = require('../src/add');

it('Can add 2 numbers', () => {
    const kq = add(4, 1);
    if (kq !== 5) throw new Error('Wrong.');
});
