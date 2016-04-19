var test = require('../src/reverse3.js');
describe('reverse3', function() {
	it('reverse3([1, 2, 3]) → [3, 2, 1]', function() {
		expect(test.reverse3([1, 2, 3])).toBe([3, 2, 1]);
	});
	it('reverse3([5, 11, 9]) → [9, 11, 5]', function() {
		expect(test.reverse3([5, 11, 9])).toBe([9, 11, 5]);
	});
	it('reverse3([7, 0, 0]) → [0, 0, 7]', function() {
		expect(test.reverse3([7, 0, 0])).toBe([0, 0, 7]);
	});
	it('reverse3([2, 1, 2]) → [2, 1, 2]', function() {
		expect(test.reverse3([2, 1, 2])).toBe([2, 1, 2]);
	});
	it('reverse3([1, 2, 1]) → [1, 2, 1]', function() {
		expect(test.reverse3([1, 2, 1])).toBe([1, 2, 1]);
	});
	it('reverse3([2, 11, 3]) → [3, 11, 2]', function() {
		expect(test.reverse3([2, 11, 3])).toBe([3, 11, 2]);
	});
	it('reverse3([0, 6, 5]) → [5, 6, 0]', function() {
		expect(test.reverse3([0, 6, 5])).toBe([5, 6, 0]);
	});
	it('reverse3([7, 2, 3]) → [3, 2, 7]', function() {
		expect(test.reverse3([7, 2, 3])).toBe([3, 2, 7]);
	});
});
