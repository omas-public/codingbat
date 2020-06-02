var test = require('../src/caught_speeding.js');
describe('caught_speeding', function() {
	it('caught_speeding(60, False) → 0', function() {
		expect(test.caught_speeding(60, False)).toBe(0);
	});
	it('caught_speeding(65, False) → 1', function() {
		expect(test.caught_speeding(65, False)).toBe(1);
	});
	it('caught_speeding(65, True) → 0', function() {
		expect(test.caught_speeding(65, True)).toBe(0);
	});
	it('caught_speeding(80, False) → 1', function() {
		expect(test.caught_speeding(80, False)).toBe(1);
	});
	it('caught_speeding(85, False) → 2', function() {
		expect(test.caught_speeding(85, False)).toBe(2);
	});
	it('caught_speeding(85, True) → 1', function() {
		expect(test.caught_speeding(85, True)).toBe(1);
	});
	it('caught_speeding(70, False) → 1', function() {
		expect(test.caught_speeding(70, False)).toBe(1);
	});
	it('caught_speeding(75, False) → 1', function() {
		expect(test.caught_speeding(75, False)).toBe(1);
	});
	it('caught_speeding(75, True) → 1', function() {
		expect(test.caught_speeding(75, True)).toBe(1);
	});
	it('caught_speeding(40, False) → 0', function() {
		expect(test.caught_speeding(40, False)).toBe(0);
	});
	it('caught_speeding(40, True) → 0', function() {
		expect(test.caught_speeding(40, True)).toBe(0);
	});
	it('caught_speeding(90, False) → 2', function() {
		expect(test.caught_speeding(90, False)).toBe(2);
	});
});
