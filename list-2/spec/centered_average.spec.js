var test = require('../src/centered_average.js');
describe('centered_average', function() {
	it('centered_average([1, 2, 3, 4, 100]) → 3', function() {
		expect(test.centered_average([1, 2, 3, 4, 100])).toBe(3);
	});
	it('centered_average([1, 1, 5, 5, 10, 8, 7]) → 5', function() {
		expect(test.centered_average([1, 1, 5, 5, 10, 8, 7])).toBe(5);
	});
	it('centered_average([-10, -4, -2, -4, -2, 0]) → -3', function() {
		expect(test.centered_average([-10, -4, -2, -4, -2, 0])).toBe(-3);
	});
	it('centered_average([5, 3, 4, 6, 2]) → 4', function() {
		expect(test.centered_average([5, 3, 4, 6, 2])).toBe(4);
	});
	it('centered_average([5, 3, 4, 0, 100]) → 4', function() {
		expect(test.centered_average([5, 3, 4, 0, 100])).toBe(4);
	});
	it('centered_average([100, 0, 5, 3, 4]) → 4', function() {
		expect(test.centered_average([100, 0, 5, 3, 4])).toBe(4);
	});
	it('centered_average([4, 0, 100]) → 4', function() {
		expect(test.centered_average([4, 0, 100])).toBe(4);
	});
	it('centered_average([0, 2, 3, 4, 100]) → 3', function() {
		expect(test.centered_average([0, 2, 3, 4, 100])).toBe(3);
	});
	it('centered_average([1, 1, 100]) → 1', function() {
		expect(test.centered_average([1, 1, 100])).toBe(1);
	});
	it('centered_average([7, 7, 7]) → 7', function() {
		expect(test.centered_average([7, 7, 7])).toBe(7);
	});
	it('centered_average([1, 7, 8]) → 7', function() {
		expect(test.centered_average([1, 7, 8])).toBe(7);
	});
	it('centered_average([1, 1, 99, 99]) → 50', function() {
		expect(test.centered_average([1, 1, 99, 99])).toBe(50);
	});
	it('centered_average([1000, 0, 1, 99]) → 50', function() {
		expect(test.centered_average([1000, 0, 1, 99])).toBe(50);
	});
	it('centered_average([4, 4, 4, 4, 5]) → 4', function() {
		expect(test.centered_average([4, 4, 4, 4, 5])).toBe(4);
	});
	it('centered_average([4, 4, 4, 1, 5]) → 4', function() {
		expect(test.centered_average([4, 4, 4, 1, 5])).toBe(4);
	});
	it('centered_average([6, 4, 8, 12, 3]) → 6', function() {
		expect(test.centered_average([6, 4, 8, 12, 3])).toBe(6);
	});
});
