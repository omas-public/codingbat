var test = require('../src/make_bricks.js');
describe('make_bricks', function() {
	it('make_bricks(3, 1, 8) → True', function() {
		expect(test.make_bricks(3, 1, 8)).toBe(True);
	});
	it('make_bricks(3, 1, 9) → False', function() {
		expect(test.make_bricks(3, 1, 9)).toBe(False);
	});
	it('make_bricks(3, 2, 10) → True', function() {
		expect(test.make_bricks(3, 2, 10)).toBe(True);
	});
	it('make_bricks(3, 2, 8) → True', function() {
		expect(test.make_bricks(3, 2, 8)).toBe(True);
	});
	it('make_bricks(3, 2, 9) → False', function() {
		expect(test.make_bricks(3, 2, 9)).toBe(False);
	});
	it('make_bricks(6, 1, 11) → True', function() {
		expect(test.make_bricks(6, 1, 11)).toBe(True);
	});
	it('make_bricks(6, 0, 11) → False', function() {
		expect(test.make_bricks(6, 0, 11)).toBe(False);
	});
	it('make_bricks(1, 4, 11) → True', function() {
		expect(test.make_bricks(1, 4, 11)).toBe(True);
	});
	it('make_bricks(0, 3, 10) → True', function() {
		expect(test.make_bricks(0, 3, 10)).toBe(True);
	});
	it('make_bricks(1, 4, 12) → False', function() {
		expect(test.make_bricks(1, 4, 12)).toBe(False);
	});
	it('make_bricks(3, 1, 7) → True', function() {
		expect(test.make_bricks(3, 1, 7)).toBe(True);
	});
	it('make_bricks(1, 1, 7) → False', function() {
		expect(test.make_bricks(1, 1, 7)).toBe(False);
	});
	it('make_bricks(2, 1, 7) → True', function() {
		expect(test.make_bricks(2, 1, 7)).toBe(True);
	});
	it('make_bricks(7, 1, 11) → True', function() {
		expect(test.make_bricks(7, 1, 11)).toBe(True);
	});
	it('make_bricks(7, 1, 8) → True', function() {
		expect(test.make_bricks(7, 1, 8)).toBe(True);
	});
	it('make_bricks(7, 1, 13) → False', function() {
		expect(test.make_bricks(7, 1, 13)).toBe(False);
	});
	it('make_bricks(43, 1, 46) → True', function() {
		expect(test.make_bricks(43, 1, 46)).toBe(True);
	});
	it('make_bricks(40, 1, 46) → False', function() {
		expect(test.make_bricks(40, 1, 46)).toBe(False);
	});
	it('make_bricks(40, 2, 47) → True', function() {
		expect(test.make_bricks(40, 2, 47)).toBe(True);
	});
	it('make_bricks(40, 2, 50) → True', function() {
		expect(test.make_bricks(40, 2, 50)).toBe(True);
	});
	it('make_bricks(40, 2, 52) → False', function() {
		expect(test.make_bricks(40, 2, 52)).toBe(False);
	});
	it('make_bricks(22, 2, 33) → False', function() {
		expect(test.make_bricks(22, 2, 33)).toBe(False);
	});
	it('make_bricks(0, 2, 10) → True', function() {
		expect(test.make_bricks(0, 2, 10)).toBe(True);
	});
	it('make_bricks(1000000, 1000, 1000100) → True', function() {
		expect(test.make_bricks(1000000, 1000, 1000100)).toBe(True);
	});
	it('make_bricks(2, 1000000, 100003) → False	', function() {
		expect(test.make_bricks(2, 1000000, 100003)).toBe(False);
	});
	it('make_bricks(20, 0, 19) → True', function() {
		expect(test.make_bricks(20, 0, 19)).toBe(True);
	});
	it('make_bricks(20, 0, 21) → False', function() {
		expect(test.make_bricks(20, 0, 21)).toBe(False);
	});
	it('make_bricks(20, 4, 51) → False', function() {
		expect(test.make_bricks(20, 4, 51)).toBe(False);
	});
	it('make_bricks(20, 4, 39) → True', function() {
		expect(test.make_bricks(20, 4, 39)).toBe(True);
	});
});
