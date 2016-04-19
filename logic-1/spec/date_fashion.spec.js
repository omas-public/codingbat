var test = require('../src/date_fashion.js');
describe('date_fashion', function() {
	it('date_fashion(5, 10) → 2', function() {
		expect(test.date_fashion(5, 10)).toBe(2);
	});
	it('date_fashion(5, 2) → 0', function() {
		expect(test.date_fashion(5, 2)).toBe(0);
	});
	it('date_fashion(5, 5) → 1', function() {
		expect(test.date_fashion(5, 5)).toBe(1);
	});
	it('date_fashion(3, 3) → 1', function() {
		expect(test.date_fashion(3, 3)).toBe(1);
	});
	it('date_fashion(10, 2) → 0', function() {
		expect(test.date_fashion(10, 2)).toBe(0);
	});
	it('date_fashion(2, 9) → 0', function() {
		expect(test.date_fashion(2, 9)).toBe(0);
	});
	it('date_fashion(9, 9) → 2', function() {
		expect(test.date_fashion(9, 9)).toBe(2);
	});
	it('date_fashion(10, 5) → 2', function() {
		expect(test.date_fashion(10, 5)).toBe(2);
	});
	it('date_fashion(2, 2) → 0', function() {
		expect(test.date_fashion(2, 2)).toBe(0);
	});
	it('date_fashion(3, 7) → 1', function() {
		expect(test.date_fashion(3, 7)).toBe(1);
	});
	it('date_fashion(2, 7) → 0', function() {
		expect(test.date_fashion(2, 7)).toBe(0);
	});
	it('date_fashion(6, 2) → 0', function() {
		expect(test.date_fashion(6, 2)).toBe(0);
	});
});
