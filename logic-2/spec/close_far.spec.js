var test = require('../src/close_far.js');
describe('close_far', function() {
	it('close_far(1, 2, 10) → True', function() {
		expect(test.close_far(1, 2, 10)).toBe(True);
	});
	it('close_far(1, 2, 3) → False', function() {
		expect(test.close_far(1, 2, 3)).toBe(False);
	});
	it('close_far(4, 1, 3) → True', function() {
		expect(test.close_far(4, 1, 3)).toBe(True);
	});
	it('close_far(4, 5, 3) → False', function() {
		expect(test.close_far(4, 5, 3)).toBe(False);
	});
	it('close_far(4, 3, 5) → False', function() {
		expect(test.close_far(4, 3, 5)).toBe(False);
	});
	it('close_far(-1, 10, 0) → True', function() {
		expect(test.close_far(-1, 10, 0)).toBe(True);
	});
	it('close_far(0, -1, 10) → True', function() {
		expect(test.close_far(0, -1, 10)).toBe(True);
	});
	it('close_far(10, 10, 8) → True', function() {
		expect(test.close_far(10, 10, 8)).toBe(True);
	});
	it('close_far(10, 8, 9) → False', function() {
		expect(test.close_far(10, 8, 9)).toBe(False);
	});
	it('close_far(8, 9, 10) → False', function() {
		expect(test.close_far(8, 9, 10)).toBe(False);
	});
	it('close_far(8, 9, 7) → False', function() {
		expect(test.close_far(8, 9, 7)).toBe(False);
	});
	it('close_far(8, 6, 9) → True', function() {
		expect(test.close_far(8, 6, 9)).toBe(True);
	});
});
