var test = require('../src/big_diff.js');
describe('big_diff', function() {
	it('big_diff([10, 3, 5, 6]) → 7', function() {
		expect(test.big_diff([10, 3, 5, 6])).toBe(7);
	});
	it('big_diff([7, 2, 10, 9]) → 8', function() {
		expect(test.big_diff([7, 2, 10, 9])).toBe(8);
	});
	it('big_diff([2, 10, 7, 2]) → 8', function() {
		expect(test.big_diff([2, 10, 7, 2])).toBe(8);
	});
	it('big_diff([2, 10]) → 8', function() {
		expect(test.big_diff([2, 10])).toBe(8);
	});
	it('big_diff([10, 2]) → 8', function() {
		expect(test.big_diff([10, 2])).toBe(8);
	});
	it('big_diff([10, 0]) → 10', function() {
		expect(test.big_diff([10, 0])).toBe(10);
	});
	it('big_diff([2, 3]) → 1', function() {
		expect(test.big_diff([2, 3])).toBe(1);
	});
	it('big_diff([2, 2]) → 0', function() {
		expect(test.big_diff([2, 2])).toBe(0);
	});
	it('big_diff([2]) → 0', function() {
		expect(test.big_diff([2])).toBe(0);
	});
	it('big_diff([5, 1, 6, 1, 9, 9]) → 8', function() {
		expect(test.big_diff([5, 1, 6, 1, 9, 9])).toBe(8);
	});
	it('big_diff([7, 6, 8, 5]) → 3', function() {
		expect(test.big_diff([7, 6, 8, 5])).toBe(3);
	});
	it('big_diff([7, 7, 6, 8, 5, 5, 6]) → 3', function() {
		expect(test.big_diff([7, 7, 6, 8, 5, 5, 6])).toBe(3);
	});
});
