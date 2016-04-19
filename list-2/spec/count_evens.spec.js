var test = require('../src/count_evens.js');
describe('count_evens', function() {
	it('count_evens([2, 1, 2, 3, 4]) → 3', function() {
		expect(test.count_evens([2, 1, 2, 3, 4])).toBe(3);
	});
	it('count_evens([2, 2, 0]) → 3', function() {
		expect(test.count_evens([2, 2, 0])).toBe(3);
	});
	it('count_evens([1, 3, 5]) → 0', function() {
		expect(test.count_evens([1, 3, 5])).toBe(0);
	});
	it('count_evens([]) → 0', function() {
		expect(test.count_evens([])).toBe(0);
	});
	it('count_evens([11, 9, 0, 1]) → 1', function() {
		expect(test.count_evens([11, 9, 0, 1])).toBe(1);
	});
	it('count_evens([2, 11, 9, 0]) → 2', function() {
		expect(test.count_evens([2, 11, 9, 0])).toBe(2);
	});
	it('count_evens([2]) → 1', function() {
		expect(test.count_evens([2])).toBe(1);
	});
	it('count_evens([2, 5, 12]) → 2', function() {
		expect(test.count_evens([2, 5, 12])).toBe(2);
	});
});
