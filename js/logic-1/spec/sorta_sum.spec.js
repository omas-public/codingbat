var test = require('../src/sorta_sum.js');
describe('sorta_sum', function() {
	it('sorta_sum(3, 4) → 7', function() {
		expect(test.sorta_sum(3, 4)).toBe(7);
	});
	it('sorta_sum(9, 4) → 20', function() {
		expect(test.sorta_sum(9, 4)).toBe(20);
	});
	it('sorta_sum(10, 11) → 21', function() {
		expect(test.sorta_sum(10, 11)).toBe(21);
	});
	it('sorta_sum(12, -3) → 9', function() {
		expect(test.sorta_sum(12, -3)).toBe(9);
	});
	it('sorta_sum(-3, 12) → 9', function() {
		expect(test.sorta_sum(-3, 12)).toBe(9);
	});
	it('sorta_sum(4, 5) → 9', function() {
		expect(test.sorta_sum(4, 5)).toBe(9);
	});
	it('sorta_sum(4, 6) → 20', function() {
		expect(test.sorta_sum(4, 6)).toBe(20);
	});
	it('sorta_sum(14, 7) → 21', function() {
		expect(test.sorta_sum(14, 7)).toBe(21);
	});
	it('sorta_sum(14, 6) → 20', function() {
		expect(test.sorta_sum(14, 6)).toBe(20);
	});
});
