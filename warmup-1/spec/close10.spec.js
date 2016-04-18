var test = require('../src/close10.js');

describe('close10', function() {
    it('close10(8, 13) → 8', function() {
        expect(test.close10(8, 13)).toBe(8);
    });
    it('close10(13, 8) → 8', function() {
        expect(test.close10(13, 8)).toBe(8);
    });
    it('close10(13, 7) → 0', function() {
        expect(test.close10(13, 7)).toBe(0);
    });
    it('lose10(7, 13) → 0', function() {
        expect(test.close10(7, 13)).toBe(0);
    });
    it('close10(9, 13) → 9', function() {
        expect(test.close10(9, 13)).toBe(9);
    });
    it('close10(13, 8) → 8', function() {
        expect(test.close10(13, 8)).toBe(8);
    });
    it('close10(10, 12) → 10', function() {
        expect(test.close10(10, 12)).toBe(10);
    });
    it('close10(11, 10) → 10', function() {
        expect(test.close10(11, 10)).toBe(10);
    });
    it('close10(5, 21) → 5', function() {
        expect(test.close10(5, 21)).toBe(5);
    });
    it('close10(0, 20) → 0', function() {
        expect(test.close10(0, 20)).toBe(0);
    });
    it('close10(10, 10) → 0', function() {
        expect(test.close10(10, 10)).toBe(0);
    });
});