var test = require('../src/common_end.js');

describe('common_end', function() {

	it('common_end([1, 2, 3], [7, 3]) → True', function() {
		expect(test.common_end([1, 2, 3], [7, 3])).toBe(True);
	});

	it('common_end([1, 2, 3], [7, 3, 2]) → False', function() {
		expect(test.common_end([1, 2, 3], [7, 3, 2])).toBe(False);
	});
  
	it('common_end([1, 2, 3], [1, 3]) → True', function() {
		expect(test.common_end([1, 2, 3], [1, 3])).toBe(True);
	});
	it('common_end([1, 2, 3], [1]) → True', function() {
		expect(test.common_end([1, 2, 3], [1])).toBe(True);
	});
	it('common_end([1, 2, 3], [2]) → False', function() {
		expect(test.common_end([1, 2, 3], [2])).toBe(False);
	});
});
