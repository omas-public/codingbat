var test = require('../src/sum67.js');
describe('sum67', function() {
	it('sum67([1, 2, 2]) → 5', function() {
		expect(test.sum67([1, 2, 2])).toBe(5);
	});
	it('sum67([1, 2, 2, 6, 99, 99, 7]) → 5', function() {
		expect(test.sum67([1, 2, 2, 6, 99, 99, 7])).toBe(5);
	});
	it('sum67([1, 1, 6, 7, 2]) → 4', function() {
		expect(test.sum67([1, 1, 6, 7, 2])).toBe(4);
	});
	it('sum67([1, 6, 2, 2, 7, 1, 6, 99, 99, 7]) → 2', function() {
		expect(test.sum67([1, 6, 2, 2, 7, 1, 6, 99, 99, 7])).toBe(2);
	});
	it('sum67([1, 6, 2, 6, 2, 7, 1, 6, 99, 99, 7]) → 2', function() {
		expect(test.sum67([1, 6, 2, 6, 2, 7, 1, 6, 99, 99, 7])).toBe(2);
	});
	it('sum67([2, 7, 6, 2, 6, 7, 2, 7]) → 18', function() {
		expect(test.sum67([2, 7, 6, 2, 6, 7, 2, 7])).toBe(18);
	});
	it('sum67([2, 7, 6, 2, 6, 2, 7]) → 9', function() {
		expect(test.sum67([2, 7, 6, 2, 6, 2, 7])).toBe(9);
	});
	it('sum67([1, 6, 7, 7]) → 8', function() {
		expect(test.sum67([1, 6, 7, 7])).toBe(8);
	});
	it('sum67([6, 7, 1, 6, 7, 7]) → 8', function() {
		expect(test.sum67([6, 7, 1, 6, 7, 7])).toBe(8);
	});
	it('sum67([6, 8, 1, 6, 7]) → 0', function() {
		expect(test.sum67([6, 8, 1, 6, 7])).toBe(0);
	});
	it('sum67([]) → 0', function() {
		expect(test.sum67([])).toBe(0);
	});
	it('sum67([6, 7, 11]) → 11', function() {
		expect(test.sum67([6, 7, 11])).toBe(11);
	});
	it('sum67([11, 6, 7, 11]) → 22', function() {
		expect(test.sum67([11, 6, 7, 11])).toBe(22);
	});
	it('sum67([2, 2, 6, 7, 7]) → 11', function() {
		expect(test.sum67([2, 2, 6, 7, 7])).toBe(11);
	});
});
