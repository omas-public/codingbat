var test = require('../src/max_end3.js');
describe('max_end3', function() {
	it('max_end3([1, 2, 3]) → [3, 3, 3]', function() {
		expect(test.max_end3([1, 2, 3])).toBe([3, 3, 3]);
	});
	it('max_end3([11, 5, 9]) → [11, 11, 11]', function() {
		expect(test.max_end3([11, 5, 9])).toBe([11, 11, 11]);
	});
	it('max_end3([2, 11, 3]) → [3, 3, 3]', function() {
		expect(test.max_end3([2, 11, 3])).toBe([3, 3, 3]);
	});
	it('max_end3([11, 3, 3]) → [11, 11, 11]', function() {
		expect(test.max_end3([11, 3, 3])).toBe([11, 11, 11]);
	});
	it('max_end3([3, 11, 11]) → [11, 11, 11]', function() {
		expect(test.max_end3([3, 11, 11])).toBe([11, 11, 11]);
	});
	it('max_end3([2, 2, 2]) → [2, 2, 2]', function() {
		expect(test.max_end3([2, 2, 2])).toBe([2, 2, 2]);
	});
	it('max_end3([2, 11, 2]) → [2, 2, 2]', function() {
		expect(test.max_end3([2, 11, 2])).toBe([2, 2, 2]);
	});
	it('max_end3([0, 0, 1]) → [1, 1, 1]', function() {
		expect(test.max_end3([0, 0, 1])).toBe([1, 1, 1]);
	});
});
