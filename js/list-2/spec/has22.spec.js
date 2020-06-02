var test = require('../src/has22.js');
describe('has22', function() {
	it('has22([1, 2, 2]) → True', function() {
		expect(test.has22([1, 2, 2])).toBe(True);
	});
	it('has22([1, 2, 1, 2]) → False', function() {
		expect(test.has22([1, 2, 1, 2])).toBe(False);
	});
	it('has22([2, 1, 2]) → False', function() {
		expect(test.has22([2, 1, 2])).toBe(False);
	});
	it('has22([2, 2, 1, 2]) → True', function() {
		expect(test.has22([2, 2, 1, 2])).toBe(True);
	});
	it('has22([1, 3, 2]) → False', function() {
		expect(test.has22([1, 3, 2])).toBe(False);
	});
	it('has22([1, 3, 2, 2]) → True', function() {
		expect(test.has22([1, 3, 2, 2])).toBe(True);
	});
	it('has22([2, 3, 2, 2]) → True', function() {
		expect(test.has22([2, 3, 2, 2])).toBe(True);
	});
	it('has22([4, 2, 4, 2, 2, 5]) → True', function() {
		expect(test.has22([4, 2, 4, 2, 2, 5])).toBe(True);
	});
	it('has22([1, 2]) → False', function() {
		expect(test.has22([1, 2])).toBe(False);
	});
	it('has22([2, 2]) → True', function() {
		expect(test.has22([2, 2])).toBe(True);
	});
	it('has22([2]) → False', function() {
		expect(test.has22([2])).toBe(False);
	});
	it('has22([]) → False', function() {
		expect(test.has22([])).toBe(False);
	});
	it('has22([3, 3, 2, 2]) → True', function() {
		expect(test.has22([3, 3, 2, 2])).toBe(True);
	});
	it('has22([5, 2, 5, 2]) → False', function() {
		expect(test.has22([5, 2, 5, 2])).toBe(False);
	});
});
