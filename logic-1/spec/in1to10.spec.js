var test = require('../src/in1to10.js');
describe('in1to10', function() {
	it('in1to10(5, False) → True', function() {
		expect(test.in1to10(5, False)).toBe(True);
	});
	it('in1to10(11, False) → False', function() {
		expect(test.in1to10(11, False)).toBe(False);
	});
	it('in1to10(11, True) → True', function() {
		expect(test.in1to10(11, True)).toBe(True);
	});
	it('in1to10(10, False) → True', function() {
		expect(test.in1to10(10, False)).toBe(True);
	});
	it('in1to10(10, True) → True', function() {
		expect(test.in1to10(10, True)).toBe(True);
	});
	it('in1to10(9, False) → True', function() {
		expect(test.in1to10(9, False)).toBe(True);
	});
	it('in1to10(9, True) → False', function() {
		expect(test.in1to10(9, True)).toBe(False);
	});
	it('in1to10(1, False) → True', function() {
		expect(test.in1to10(1, False)).toBe(True);
	});
	it('in1to10(1, True) → True', function() {
		expect(test.in1to10(1, True)).toBe(True);
	});
	it('in1to10(0, False) → False', function() {
		expect(test.in1to10(0, False)).toBe(False);
	});
	it('in1to10(0, True) → True', function() {
		expect(test.in1to10(0, True)).toBe(True);
	});
	it('in1to10(-1, False) → False', function() {
		expect(test.in1to10(-1, False)).toBe(False);
	});
});
