var test = require('../src/middle_way.js');
describe('middle_way', function() {
	it('middle_way([1, 2, 3], [4, 5, 6]) → [2, 5]', function() {
		expect(test.middle_way([1, 2, 3], [4, 5, 6])).toBe([2, 5]);
	});
	it('middle_way([7, 7, 7], [3, 8, 0]) → [7, 8]', function() {
		expect(test.middle_way([7, 7, 7], [3, 8, 0])).toBe([7, 8]);
	});
	it('middle_way([5, 2, 9], [1, 4, 5]) → [2, 4]', function() {
		expect(test.middle_way([5, 2, 9], [1, 4, 5])).toBe([2, 4]);
	});
	it('middle_way([1, 9, 7], [4, 8, 8]) → [9, 8]', function() {
		expect(test.middle_way([1, 9, 7], [4, 8, 8])).toBe([9, 8]);
	});
	it('middle_way([1, 2, 3], [3, 1, 4]) → [2, 1]', function() {
		expect(test.middle_way([1, 2, 3], [3, 1, 4])).toBe([2, 1]);
	});
	it('middle_way([1, 2, 3], [4, 1, 1]) → [2, 1]', function() {
		expect(test.middle_way([1, 2, 3], [4, 1, 1])).toBe([2, 1]);
	});
});
