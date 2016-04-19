var test = require('../src/love6.js');
describe('love6', function() {
	it('love6(6, 4) → True', function() {
		expect(test.love6(6, 4)).toBe(True);
	});
	it('love6(4, 5) → False', function() {
		expect(test.love6(4, 5)).toBe(False);
	});
	it('love6(1, 5) → True', function() {
		expect(test.love6(1, 5)).toBe(True);
	});
	it('love6(1, 6) → True', function() {
		expect(test.love6(1, 6)).toBe(True);
	});
	it('love6(1, 8) → False', function() {
		expect(test.love6(1, 8)).toBe(False);
	});
	it('love6(1, 7) → True', function() {
		expect(test.love6(1, 7)).toBe(True);
	});
	it('love6(7, 5) → False', function() {
		expect(test.love6(7, 5)).toBe(False);
	});
	it('love6(8, 2) → True', function() {
		expect(test.love6(8, 2)).toBe(True);
	});
	it('love6(6, 6) → True', function() {
		expect(test.love6(6, 6)).toBe(True);
	});
	it('love6(-6, 2) → False', function() {
		expect(test.love6(-6, 2)).toBe(False);
	});
	it('love6(-4, -10) → True', function() {
		expect(test.love6(-4, -10)).toBe(True);
	});
	it('love6(-7, 1) → False', function() {
		expect(test.love6(-7, 1)).toBe(False);
	});
	it('love6(7, -1) → True', function() {
		expect(test.love6(7, -1)).toBe(True);
	});
	it('love6(-6, 12) → True', function() {
		expect(test.love6(-6, 12)).toBe(True);
	});
	it('love6(-2, -4) → False', function() {
		expect(test.love6(-2, -4)).toBe(False);
	});
	it('love6(7, 1) → True', function() {
		expect(test.love6(7, 1)).toBe(True);
	});
	it('love6(0, 9) → False', function() {
		expect(test.love6(0, 9)).toBe(False);
	});
	it('love6(8, 3) → False', function() {
		expect(test.love6(8, 3)).toBe(False);
	});
	it('love6(3, 3) → True', function() {
		expect(test.love6(3, 3)).toBe(True);
	});
	it('love6(3, 4) → False', function() {
		expect(test.love6(3, 4)).toBe(False);
	});
});
