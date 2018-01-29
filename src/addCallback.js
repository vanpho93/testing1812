function addCallback(a, b, cb) {
    setTimeout(() => {
        if (isNaN(a) || isNaN(b)) return cb(new Error('Type error.'));
        cb(null, +a + +b);
    }, 50);
}

module.exports = addCallback;
