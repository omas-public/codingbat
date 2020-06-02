var test = require('../src/no_teen_sum.js');
describe('no_teen_sum', function() {
	it('no_teen_sum(1, 2, 3) → 6', function() {
		expect(test.no_teen_sum(1, 2, 3)).toBe(6);
	});
	it('no_teen_sum(2, 13, 1) → 3', function() {
		expect(test.no_teen_sum(2, 13, 1)).toBe(3);
	});
	it('no_teen_sum(2, 1, 14) → 3', function() {
		expect(test.no_teen_sum(2, 1, 14)).toBe(3);
	});
	it('no_teen_sum(2, 1, 15) → 18', function() {
		expect(test.no_teen_sum(2, 1, 15)).toBe(18);
	});
	it('no_teen_sum(2, 1, 16) → 19', function() {
		expect(test.no_teen_sum(2, 1, 16)).toBe(19);
	});
	it('no_teen_sum(2, 1, 17) → 3', function() {
		expect(test.no_teen_sum(2, 1, 17)).toBe(3);
	});
	it('no_teen_sum(17, 1, 2) → 3', function() {
		expect(test.no_teen_sum(17, 1, 2)).toBe(3);
	});
	it('no_teen_sum(2, 15, 2) → 19', function() {
		expect(test.no_teen_sum(2, 15, 2)).toBe(19);
	});
	it('no_teen_sum(16, 17, 18) → 16', function() {
		expect(test.no_teen_sum(16, 17, 18)).toBe(16);
	});
	it('no_teen_sum(17, 18, 19) → 0', function() {
		expect(test.no_teen_sum(17, 18, 19)).toBe(0);
	});
	it('no_teen_sum(15, 16, 1) → 32', function() {
		expect(test.no_teen_sum(15, 16, 1)).toBe(32);
	});
	it('no_teen_sum(15, 15, 19) → 30', function() {
		expect(test.no_teen_sum(15, 15, 19)).toBe(30);
	});
	it('no_teen_sum(15, 19, 16) → 31', function() {
		expect(test.no_teen_sum(15, 19, 16)).toBe(31);
	});
	it('no_teen_sum(5, 17, 18) → 5', function() {
		expect(test.no_teen_sum(5, 17, 18)).toBe(5);
	});
	it('no_teen_sum(17, 18, 16) → 16', function() {
		expect(test.no_teen_sum(17, 18, 16)).toBe(16);
	});
	it('no_teen_sum(17, 19, 18) → 0', function() {
		expect(test.no_teen_sum(17, 19, 18)).toBe(0);
	});
});
