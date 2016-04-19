var test = require('../src/xyz_there.js');
describe('xyz_there', function() {
	it('xyz_there('abcxyz') → True', function() {
		expect(test.xyz_there('abcxyz')).toBe(True);
	});
	it('xyz_there('abc.xyz') → False', function() {
		expect(test.xyz_there('abc.xyz')).toBe(False);
	});
	it('xyz_there('xyz.abc') → True', function() {
		expect(test.xyz_there('xyz.abc')).toBe(True);
	});
	it('xyz_there('abcxy') → False', function() {
		expect(test.xyz_there('abcxy')).toBe(False);
	});
	it('xyz_there('xyz') → True', function() {
		expect(test.xyz_there('xyz')).toBe(True);
	});
	it('xyz_there('xy') → False', function() {
		expect(test.xyz_there('xy')).toBe(False);
	});
	it('xyz_there('x') → False', function() {
		expect(test.xyz_there('x')).toBe(False);
	});
	it('xyz_there('') → False', function() {
		expect(test.xyz_there('')).toBe(False);
	});
	it('xyz_there('abc.xyzxyz') → True', function() {
		expect(test.xyz_there('abc.xyzxyz')).toBe(True);
	});
	it('xyz_there('abc.xxyz') → True', function() {
		expect(test.xyz_there('abc.xxyz')).toBe(True);
	});
	it('xyz_there('.xyz') → False', function() {
		expect(test.xyz_there('.xyz')).toBe(False);
	});
	it('xyz_there('12.xyz') → False', function() {
		expect(test.xyz_there('12.xyz')).toBe(False);
	});
	it('xyz_there('12xyz') → True', function() {
		expect(test.xyz_there('12xyz')).toBe(True);
	});
	it('xyz_there('1.xyz.xyz2.xyz') → False', function() {
		expect(test.xyz_there('1.xyz.xyz2.xyz')).toBe(False);
	});
});
