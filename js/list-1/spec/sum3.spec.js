var test = require('../src/sum3.js');
describe('sum3', function() {
	it('sum3([1, 2, 3]) → 6', function() {
		expect(test.sum3([1, 2, 3])).toBe(6);
	});
	it('sum3([5, 11, 2]) → 18', function() {
		expect(test.sum3([5, 11, 2])).toBe(18);
	});
	it('sum3([7, 0, 0]) → 7', function() {
		expect(test.sum3([7, 0, 0])).toBe(7);
	});
	it('sum3([1, 2, 1]) → 4', function() {
		expect(test.sum3([1, 2, 1])).toBe(4);
	});
	it('sum3([1, 1, 1]) → 3', function() {
		expect(test.sum3([1, 1, 1])).toBe(3);
	});
	it('sum3([2, 7, 2]) → 11', function() {
		expect(test.sum3([2, 7, 2])).toBe(11);
	});
});
