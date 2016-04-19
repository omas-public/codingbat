var test = require('../src/sum13.js');
describe('sum13', function() {
	it('sum13([1, 2, 2, 1]) → 6', function() {
		expect(test.sum13([1, 2, 2, 1])).toBe(6);
	});
	it('sum13([1, 1]) → 2', function() {
		expect(test.sum13([1, 1])).toBe(2);
	});
	it('sum13([1, 2, 2, 1, 13]) → 6', function() {
		expect(test.sum13([1, 2, 2, 1, 13])).toBe(6);
	});
	it('sum13([1, 2, 13, 2, 1, 13]) → 4', function() {
		expect(test.sum13([1, 2, 13, 2, 1, 13])).toBe(4);
	});
	it('sum13([13, 1, 2, 13, 2, 1, 13]) → 3', function() {
		expect(test.sum13([13, 1, 2, 13, 2, 1, 13])).toBe(3);
	});
	it('sum13([]) → 0', function() {
		expect(test.sum13([])).toBe(0);
	});
	it('sum13([13]) → 0', function() {
		expect(test.sum13([13])).toBe(0);
	});
	it('sum13([13, 13]) → 0', function() {
		expect(test.sum13([13, 13])).toBe(0);
	});
	it('sum13([13, 0, 13]) → 0', function() {
		expect(test.sum13([13, 0, 13])).toBe(0);
	});
	it('sum13([13, 1, 13]) → 0', function() {
		expect(test.sum13([13, 1, 13])).toBe(0);
	});
	it('sum13([5, 7, 2]) → 14', function() {
		expect(test.sum13([5, 7, 2])).toBe(14);
	});
	it('sum13([5, 13, 2]) → 5', function() {
		expect(test.sum13([5, 13, 2])).toBe(5);
	});
	it('sum13([0]) → 0', function() {
		expect(test.sum13([0])).toBe(0);
	});
	it('sum13([13, 0]) → 0', function() {
		expect(test.sum13([13, 0])).toBe(0);
	});
});
