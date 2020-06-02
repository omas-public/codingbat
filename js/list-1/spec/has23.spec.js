var test = require('../src/has23.js');
describe('has23', function() {
	it('has23([2, 5]) → True', function() {
		expect(test.has23([2, 5])).toBe(True);
	});
	it('has23([4, 3]) → True', function() {
		expect(test.has23([4, 3])).toBe(True);
	});
	it('has23([4, 5]) → False', function() {
		expect(test.has23([4, 5])).toBe(False);
	});
	it('has23([2, 2]) → True', function() {
		expect(test.has23([2, 2])).toBe(True);
	});
	it('has23([3, 2]) → True', function() {
		expect(test.has23([3, 2])).toBe(True);
	});
	it('has23([3, 3]) → True', function() {
		expect(test.has23([3, 3])).toBe(True);
	});
	it('has23([7, 7]) → False', function() {
		expect(test.has23([7, 7])).toBe(False);
	});
	it('has23([3, 9]) → True', function() {
		expect(test.has23([3, 9])).toBe(True);
	});
	it('has23([9, 5]) → False', function() {
		expect(test.has23([9, 5])).toBe(False);
	});
});
