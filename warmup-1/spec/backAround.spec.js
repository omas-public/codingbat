var test = require('../src/backAround.js');

describe('backAround', function() {
    it('backAround("cat") → "tcatt"', function() {
        expect(test.backAround('cat')).toBe('tcatt');
    });
    it('backAround("Hello") → "oHelloo"', function() {
        expect(test.backAround('Hello')).toBe('oHelloo');
    });
    it('backAround("a") → "aaa" ', function() {
        expect(test.backAround('a')).toBe('aaa');
    });
    it('backAround("abc") → "cabcc"', function() {
        expect(test.backAround('abc')).toBe('cabcc');
    });
    it('backAround("read") → "dreadd"', function() {
        expect(test.backAround('read')).toBe('dreadd');
    });
    it('backAround("boo") → "obooo"', function() {
        expect(test.backAround('boo')).toBe('obooo');
    });
});