var test = require('../src/sum2.js');
describe('sum2', function() {
	it('sum2([1, 2, 3]) → 3', function() {
		expect(test.sum2([1, 2, 3])).toBe(3);
	});
	it('sum2([1, 1]) → 2', function() {
		expect(test.sum2([1, 1])).toBe(2);
	});
	it('sum2([1, 1, 1, 1]) → 2', function() {
		expect(test.sum2([1, 1, 1, 1])).toBe(2);
	});
	it('sum2([1, 2]) → 3', function() {
		expect(test.sum2([1, 2])).toBe(3);
	});
	it('sum2([1]) → 1', function() {
		expect(test.sum2([1])).toBe(1);
	});
	it('sum2([]) → 0', function() {
		expect(test.sum2([])).toBe(0);
	});
	it('sum2([4, 5, 6]) → 9', function() {
		expect(test.sum2([4, 5, 6])).toBe(9);
	});
	it('sum2([4]) → 4', function() {
		expect(test.sum2([4])).toBe(4);
	});
});
