var test = require('../src/make_chocolate.js');
describe('make_chocolate', function() {
	it('make_chocolate(4, 1, 9) → 4', function() {
		expect(test.make_chocolate(4, 1, 9)).toBe(4);
	});
	it('make_chocolate(4, 1, 10) → -1', function() {
		expect(test.make_chocolate(4, 1, 10)).toBe(-1);
	});
	it('make_chocolate(4, 1, 7) → 2', function() {
		expect(test.make_chocolate(4, 1, 7)).toBe(2);
	});
	it('make_chocolate(6, 2, 7) → 2', function() {
		expect(test.make_chocolate(6, 2, 7)).toBe(2);
	});
	it('make_chocolate(4, 1, 5) → 0', function() {
		expect(test.make_chocolate(4, 1, 5)).toBe(0);
	});
	it('make_chocolate(4, 1, 4) → 4', function() {
		expect(test.make_chocolate(4, 1, 4)).toBe(4);
	});
	it('make_chocolate(5, 4, 9) → 4', function() {
		expect(test.make_chocolate(5, 4, 9)).toBe(4);
	});
	it('make_chocolate(9, 3, 18) → 3', function() {
		expect(test.make_chocolate(9, 3, 18)).toBe(3);
	});
	it('make_chocolate(3, 1, 9) → -1', function() {
		expect(test.make_chocolate(3, 1, 9)).toBe(-1);
	});
	it('make_chocolate(1, 2, 7) → -1', function() {
		expect(test.make_chocolate(1, 2, 7)).toBe(-1);
	});
	it('make_chocolate(1, 2, 6) → 1', function() {
		expect(test.make_chocolate(1, 2, 6)).toBe(1);
	});
	it('make_chocolate(1, 2, 5) → 0', function() {
		expect(test.make_chocolate(1, 2, 5)).toBe(0);
	});
	it('make_chocolate(6, 1, 10) → 5', function() {
		expect(test.make_chocolate(6, 1, 10)).toBe(5);
	});
	it('make_chocolate(6, 1, 11) → 6', function() {
		expect(test.make_chocolate(6, 1, 11)).toBe(6);
	});
	it('make_chocolate(6, 1, 12) → -1', function() {
		expect(test.make_chocolate(6, 1, 12)).toBe(-1);
	});
	it('make_chocolate(6, 1, 13) → -1', function() {
		expect(test.make_chocolate(6, 1, 13)).toBe(-1);
	});
	it('make_chocolate(6, 2, 10) → 0', function() {
		expect(test.make_chocolate(6, 2, 10)).toBe(0);
	});
	it('make_chocolate(6, 2, 11) → 1', function() {
		expect(test.make_chocolate(6, 2, 11)).toBe(1);
	});
	it('make_chocolate(6, 2, 12) → 2', function() {
		expect(test.make_chocolate(6, 2, 12)).toBe(2);
	});
	it('make_chocolate(60, 100, 550) → 50', function() {
		expect(test.make_chocolate(60, 100, 550)).toBe(50);
	});
	it('make_chocolate(1000, 1000000, 5000006) → 6', function() {
		expect(test.make_chocolate(1000, 1000000, 5000006)).toBe(6);
	});
	it('make_chocolate(7, 1, 12) → 7', function() {
		expect(test.make_chocolate(7, 1, 12)).toBe(7);
	});
	it('make_chocolate(7, 1, 13) → -1', function() {
		expect(test.make_chocolate(7, 1, 13)).toBe(-1);
	});
	it('make_chocolate(7, 2, 13) → 3', function() {
		expect(test.make_chocolate(7, 2, 13)).toBe(3);
	});
});
