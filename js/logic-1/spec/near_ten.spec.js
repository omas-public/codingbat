var test = require('../src/near_ten.js');
describe('near_ten', function() {
	it('near_ten(12) → True', function() {
		expect(test.near_ten(12)).toBe(True);
	});
	it('near_ten(17) → False', function() {
		expect(test.near_ten(17)).toBe(False);
	});
	it('near_ten(19) → True', function() {
		expect(test.near_ten(19)).toBe(True);
	});
	it('near_ten(31) → True', function() {
		expect(test.near_ten(31)).toBe(True);
	});
	it('near_ten(6) → False', function() {
		expect(test.near_ten(6)).toBe(False);
	});
	it('near_ten(10) → True', function() {
		expect(test.near_ten(10)).toBe(True);
	});
	it('near_ten(11) → True', function() {
		expect(test.near_ten(11)).toBe(True);
	});
	it('near_ten(21) → True', function() {
		expect(test.near_ten(21)).toBe(True);
	});
	it('near_ten(22) → True', function() {
		expect(test.near_ten(22)).toBe(True);
	});
	it('near_ten(23) → False', function() {
		expect(test.near_ten(23)).toBe(False);
	});
	it('near_ten(54) → False', function() {
		expect(test.near_ten(54)).toBe(False);
	});
	it('near_ten(155) → False', function() {
		expect(test.near_ten(155)).toBe(False);
	});
	it('near_ten(158) → True', function() {
		expect(test.near_ten(158)).toBe(True);
	});
	it('near_ten(3) → False', function() {
		expect(test.near_ten(3)).toBe(False);
	});
	it('near_ten(1) → True', function() {
		expect(test.near_ten(1)).toBe(True);
	});
});
