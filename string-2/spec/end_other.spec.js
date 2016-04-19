var test = require('../src/end_other.js');
describe('end_other', function() {
	it('end_other('Hiabc', 'abc') → True', function() {
		expect(test.end_other('Hiabc', 'abc')).toBe(True);
	});
	it('end_other('AbC', 'HiaBc') → True', function() {
		expect(test.end_other('AbC', 'HiaBc')).toBe(True);
	});
	it('end_other('abc', 'abXabc') → True', function() {
		expect(test.end_other('abc', 'abXabc')).toBe(True);
	});
	it('end_other('Hiabc', 'abcd') → False', function() {
		expect(test.end_other('Hiabc', 'abcd')).toBe(False);
	});
	it('end_other('Hiabc', 'bc') → True', function() {
		expect(test.end_other('Hiabc', 'bc')).toBe(True);
	});
	it('end_other('Hiabcx', 'bc') → False', function() {
		expect(test.end_other('Hiabcx', 'bc')).toBe(False);
	});
	it('end_other('abc', 'abc') → True', function() {
		expect(test.end_other('abc', 'abc')).toBe(True);
	});
	it('end_other('xyz', '12xyz') → True', function() {
		expect(test.end_other('xyz', '12xyz')).toBe(True);
	});
	it('end_other('yz', '12xz') → False', function() {
		expect(test.end_other('yz', '12xz')).toBe(False);
	});
	it('end_other('Z', '12xz') → True', function() {
		expect(test.end_other('Z', '12xz')).toBe(True);
	});
	it('end_other('12', '12') → True', function() {
		expect(test.end_other('12', '12')).toBe(True);
	});
	it('end_other('abcXYZ', 'abcDEF') → False', function() {
		expect(test.end_other('abcXYZ', 'abcDEF')).toBe(False);
	});
	it('end_other('ab', 'ab12') → False', function() {
		expect(test.end_other('ab', 'ab12')).toBe(False);
	});
	it('end_other('ab', '12ab') → True', function() {
		expect(test.end_other('ab', '12ab')).toBe(True);
	});
});
