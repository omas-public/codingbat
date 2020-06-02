var test = require('../src/round_sum.js');
describe('round_sum', function() {
	it('round_sum(16, 17, 18) → 60', function() {
		expect(test.round_sum(16, 17, 18)).toBe(60);
	});
	it('round_sum(12, 13, 14) → 30', function() {
		expect(test.round_sum(12, 13, 14)).toBe(30);
	});
	it('round_sum(6, 4, 4) → 10', function() {
		expect(test.round_sum(6, 4, 4)).toBe(10);
	});
	it('round_sum(4, 6, 5) → 20', function() {
		expect(test.round_sum(4, 6, 5)).toBe(20);
	});
	it('round_sum(4, 4, 6) → 10', function() {
		expect(test.round_sum(4, 4, 6)).toBe(10);
	});
	it('round_sum(9, 4, 4) → 10', function() {
		expect(test.round_sum(9, 4, 4)).toBe(10);
	});
	it('round_sum(0, 0, 1) → 0', function() {
		expect(test.round_sum(0, 0, 1)).toBe(0);
	});
	it('round_sum(0, 9, 0) → 10', function() {
		expect(test.round_sum(0, 9, 0)).toBe(10);
	});
	it('round_sum(10, 10, 19) → 40', function() {
		expect(test.round_sum(10, 10, 19)).toBe(40);
	});
	it('round_sum(20, 30, 40) → 90', function() {
		expect(test.round_sum(20, 30, 40)).toBe(90);
	});
	it('round_sum(45, 21, 30) → 100', function() {
		expect(test.round_sum(45, 21, 30)).toBe(100);
	});
	it('round_sum(23, 11, 26) → 60', function() {
		expect(test.round_sum(23, 11, 26)).toBe(60);
	});
	it('round_sum(23, 24, 25) → 70', function() {
		expect(test.round_sum(23, 24, 25)).toBe(70);
	});
	it('round_sum(25, 24, 25) → 80', function() {
		expect(test.round_sum(25, 24, 25)).toBe(80);
	});
	it('round_sum(23, 24, 29) → 70', function() {
		expect(test.round_sum(23, 24, 29)).toBe(70);
	});
	it('round_sum(11, 24, 36) → 70', function() {
		expect(test.round_sum(11, 24, 36)).toBe(70);
	});
	it('round_sum(24, 36, 32) → 90', function() {
		expect(test.round_sum(24, 36, 32)).toBe(90);
	});
	it('round_sum(14, 12, 26) → 50', function() {
		expect(test.round_sum(14, 12, 26)).toBe(50);
	});
	it('round_sum(12, 10, 24) → 40', function() {
		expect(test.round_sum(12, 10, 24)).toBe(40);
	});
});
