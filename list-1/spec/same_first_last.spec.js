var test = require('../src/same_first_last.js');
describe('same_first_last', function() {
	it('same_first_last([1, 2, 3]) → False', function() {
		expect(test.same_first_last([1, 2, 3])).toBe(False);
	});
	it('same_first_last([1, 2, 3, 1]) → True', function() {
		expect(test.same_first_last([1, 2, 3, 1])).toBe(True);
	});
	it('same_first_last([1, 2, 1]) → True', function() {
		expect(test.same_first_last([1, 2, 1])).toBe(True);
	});
	it('same_first_last([7]) → True', function() {
		expect(test.same_first_last([7])).toBe(True);
	});
	it('same_first_last([]) → False', function() {
		expect(test.same_first_last([])).toBe(False);
	});
	it('same_first_last([1, 2, 3, 4, 5, 1]) → True', function() {
		expect(test.same_first_last([1, 2, 3, 4, 5, 1])).toBe(True);
	});
	it('same_first_last([1, 2, 3, 4, 5, 13]) → False', function() {
		expect(test.same_first_last([1, 2, 3, 4, 5, 13])).toBe(False);
	});
	it('same_first_last([13, 2, 3, 4, 5, 13]) → True', function() {
		expect(test.same_first_last([13, 2, 3, 4, 5, 13])).toBe(True);
	});
	it('same_first_last([7, 7]) → True', function() {
		expect(test.same_first_last([7, 7])).toBe(True);
	});
});
