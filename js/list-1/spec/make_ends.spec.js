var test = require('../src/make_ends.js');
describe('make_ends', function() {
	it('make_ends([1, 2, 3]) → [1, 3]', function() {
		expect(test.make_ends([1, 2, 3])).toBe([1, 3]);
	});
	it('make_ends([1, 2, 3, 4]) → [1, 4]', function() {
		expect(test.make_ends([1, 2, 3, 4])).toBe([1, 4]);
	});
	it('make_ends([7, 4, 6, 2]) → [7, 2]', function() {
		expect(test.make_ends([7, 4, 6, 2])).toBe([7, 2]);
	});
	it('make_ends([1, 2, 2, 2, 2, 2, 2, 3]) → [1, 3]', function() {
		expect(test.make_ends([1, 2, 2, 2, 2, 2, 2, 3])).toBe([1, 3]);
	});
	it('make_ends([7, 4]) → [7, 4]', function() {
		expect(test.make_ends([7, 4])).toBe([7, 4]);
	});
	it('make_ends([7]) → [7, 7]', function() {
		expect(test.make_ends([7])).toBe([7, 7]);
	});
	it('make_ends([5, 2, 9]) → [5, 9]', function() {
		expect(test.make_ends([5, 2, 9])).toBe([5, 9]);
	});
	it('make_ends([2, 3, 4, 1]) → [2, 1]', function() {
		expect(test.make_ends([2, 3, 4, 1])).toBe([2, 1]);
	});
});
