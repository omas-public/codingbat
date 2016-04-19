var test = require('../src/lone_sum.js');
describe('lone_sum', function() {
	it('lone_sum(1, 2, 3) → 6', function() {
		expect(test.lone_sum(1, 2, 3)).toBe(6);
	});
	it('lone_sum(3, 2, 3) → 2', function() {
		expect(test.lone_sum(3, 2, 3)).toBe(2);
	});
	it('lone_sum(3, 3, 3) → 0', function() {
		expect(test.lone_sum(3, 3, 3)).toBe(0);
	});
	it('lone_sum(9, 2, 2) → 9', function() {
		expect(test.lone_sum(9, 2, 2)).toBe(9);
	});
	it('lone_sum(2, 2, 9) → 9', function() {
		expect(test.lone_sum(2, 2, 9)).toBe(9);
	});
	it('lone_sum(2, 9, 2) → 9', function() {
		expect(test.lone_sum(2, 9, 2)).toBe(9);
	});
	it('lone_sum(2, 9, 3) → 14', function() {
		expect(test.lone_sum(2, 9, 3)).toBe(14);
	});
	it('lone_sum(4, 2, 3) → 9', function() {
		expect(test.lone_sum(4, 2, 3)).toBe(9);
	});
	it('lone_sum(1, 3, 1) → 3', function() {
		expect(test.lone_sum(1, 3, 1)).toBe(3);
	});
});
