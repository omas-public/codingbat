var test = require('../src/lucky_sum.js');
describe('lucky_sum', function() {
	it('lucky_sum(1, 2, 3) → 6', function() {
		expect(test.lucky_sum(1, 2, 3)).toBe(6);
	});
	it('lucky_sum(1, 2, 13) → 3', function() {
		expect(test.lucky_sum(1, 2, 13)).toBe(3);
	});
	it('lucky_sum(1, 13, 3) → 1', function() {
		expect(test.lucky_sum(1, 13, 3)).toBe(1);
	});
	it('lucky_sum(1, 13, 13) → 1', function() {
		expect(test.lucky_sum(1, 13, 13)).toBe(1);
	});
	it('lucky_sum(6, 5, 2) → 13', function() {
		expect(test.lucky_sum(6, 5, 2)).toBe(13);
	});
	it('lucky_sum(13, 2, 3) → 0', function() {
		expect(test.lucky_sum(13, 2, 3)).toBe(0);
	});
	it('lucky_sum(13, 2, 13) → 0', function() {
		expect(test.lucky_sum(13, 2, 13)).toBe(0);
	});
	it('lucky_sum(13, 13, 2) → 0', function() {
		expect(test.lucky_sum(13, 13, 2)).toBe(0);
	});
	it('lucky_sum(9, 4, 13) → 13', function() {
		expect(test.lucky_sum(9, 4, 13)).toBe(13);
	});
	it('lucky_sum(8, 13, 2) → 8', function() {
		expect(test.lucky_sum(8, 13, 2)).toBe(8);
	});
	it('lucky_sum(7, 2, 1) → 10', function() {
		expect(test.lucky_sum(7, 2, 1)).toBe(10);
	});
	it('lucky_sum(3, 3, 13) → 6', function() {
		expect(test.lucky_sum(3, 3, 13)).toBe(6);
	});
});
