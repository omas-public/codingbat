var test = require('../src/rotate_left3		.js');
describe('rotate_left3		', function() {
	it('rotate_left3([1, 2, 3]) → [2, 3, 1]', function() {
		expect(test.rotate_left3([1, 2, 3])).toBe([2, 3, 1]);
	});
	it('rotate_left3([5, 11, 9]) → [11, 9, 5]', function() {
		expect(test.rotate_left3([5, 11, 9])).toBe([11, 9, 5]);
	});
	it('rotate_left3([7, 0, 0]) → [0, 0, 7]', function() {
		expect(test.rotate_left3([7, 0, 0])).toBe([0, 0, 7]);
	});
	it('rotate_left3([1, 2, 1]) → [2, 1, 1]', function() {
		expect(test.rotate_left3([1, 2, 1])).toBe([2, 1, 1]);
	});
	it('rotate_left3([0, 0, 1]) → [0, 1, 0]', function() {
		expect(test.rotate_left3([0, 0, 1])).toBe([0, 1, 0]);
	});
});
