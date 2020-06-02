var test = require('../src/non_start.js');
describe('non_start', function() {
	it('non_start('Hello', 'There') → 'ellohere'', function() {
		expect(test.non_start('Hello', 'There')).toBe('ellohere');
	});
	it('non_start('java', 'code') → 'avaode'', function() {
		expect(test.non_start('java', 'code')).toBe('avaode');
	});
	it('non_start('shotl', 'java') → 'hotlava'', function() {
		expect(test.non_start('shotl', 'java')).toBe('hotlava');
	});
	it('non_start('ab', 'xy') → 'by'', function() {
		expect(test.non_start('ab', 'xy')).toBe('by');
	});
	it('non_start('ab', 'x') → 'b'', function() {
		expect(test.non_start('ab', 'x')).toBe('b');
	});
	it('non_start('x', 'ac') → 'c'', function() {
		expect(test.non_start('x', 'ac')).toBe('c');
	});
	it('non_start('a', 'x') → ''', function() {
		expect(test.non_start('a', 'x')).toBe('');
	});
	it('non_start('kit', 'kat') → 'itat'', function() {
		expect(test.non_start('kit', 'kat')).toBe('itat');
	});
	it('non_start('mart', 'dart') → 'artart'', function() {
		expect(test.non_start('mart', 'dart')).toBe('artart');
	});
});
