var test = require('../src/squirrel_play.js');
describe('squirrel_play', function() {
	it('squirrel_play(70, False) → True', function() {
		expect(test.squirrel_play(70, False)).toBe(True);
	});
	it('squirrel_play(95, False) → False', function() {
		expect(test.squirrel_play(95, False)).toBe(False);
	});
	it('squirrel_play(95, True) → True', function() {
		expect(test.squirrel_play(95, True)).toBe(True);
	});
	it('squirrel_play(90, False) → True', function() {
		expect(test.squirrel_play(90, False)).toBe(True);
	});
	it('squirrel_play(90, True) → True', function() {
		expect(test.squirrel_play(90, True)).toBe(True);
	});
	it('squirrel_play(50, False) → False', function() {
		expect(test.squirrel_play(50, False)).toBe(False);
	});
	it('squirrel_play(50, True) → False', function() {
		expect(test.squirrel_play(50, True)).toBe(False);
	});
	it('squirrel_play(100, False) → False', function() {
		expect(test.squirrel_play(100, False)).toBe(False);
	});
	it('squirrel_play(100, True) → True', function() {
		expect(test.squirrel_play(100, True)).toBe(True);
	});
	it('squirrel_play(105, True) → False', function() {
		expect(test.squirrel_play(105, True)).toBe(False);
	});
	it('squirrel_play(59, False) → False', function() {
		expect(test.squirrel_play(59, False)).toBe(False);
	});
	it('squirrel_play(59, True) → False', function() {
		expect(test.squirrel_play(59, True)).toBe(False);
	});
	it('squirrel_play(60, False) → True', function() {
		expect(test.squirrel_play(60, False)).toBe(True);
	});
});
