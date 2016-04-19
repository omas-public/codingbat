var test = require('../src/first_last6.js');
describe('first_last6', function() {
	it('first_last6([1, 2, 6]) → True', function() {
		expect(test.first_last6([1, 2, 6])).toBe(True);
	});
	it('first_last6([6, 1, 2, 3]) → True', function() {
		expect(test.first_last6([6, 1, 2, 3])).toBe(True);
	});
	it('first_last6([13, 6, 1, 2, 3]) → False', function() {
		expect(test.first_last6([13, 6, 1, 2, 3])).toBe(False);
	});
	it('first_last6([13, 6, 1, 2, 6]) → True', function() {
		expect(test.first_last6([13, 6, 1, 2, 6])).toBe(True);
	});
	it('first_last6([3, 2, 1]) → False', function() {
		expect(test.first_last6([3, 2, 1])).toBe(False);
	});
	it('first_last6([3, 6, 1]) → False', function() {
		expect(test.first_last6([3, 6, 1])).toBe(False);
	});
	it('first_last6([3, 6]) → True', function() {
		expect(test.first_last6([3, 6])).toBe(True);
	});
	it('first_last6([6]) → True', function() {
		expect(test.first_last6([6])).toBe(True);
	});
	it('first_last6([3]) → False', function() {
		expect(test.first_last6([3])).toBe(False);
	});
	it('first_last6([5, 6]) → True', function() {
		expect(test.first_last6([5, 6])).toBe(True);
	});
	it('first_last6([5, 5]) → False', function() {
		expect(test.first_last6([5, 5])).toBe(False);
	});
	it('first_last6([1, 2, 3, 4, 6]) → True', function() {
		expect(test.first_last6([1, 2, 3, 4, 6])).toBe(True);
	});
	it('first_last6([1, 2, 3, 4]) → False', function() {
		expect(test.first_last6([1, 2, 3, 4])).toBe(False);
	});
});
