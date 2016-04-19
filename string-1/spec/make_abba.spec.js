var test = require('../src/make_abba.js');
describe('make_abba', function() {
	it('make_abba('Hi', 'Bye') → 'HiByeByeHi'', function() {
		expect(test.make_abba('Hi', 'Bye')).toBe('HiByeByeHi');
	});
	it('make_abba('Yo', 'Alice') → 'YoAliceAliceYo'', function() {
		expect(test.make_abba('Yo', 'Alice')).toBe('YoAliceAliceYo');
	});
	it('make_abba('What', 'Up') → 'WhatUpUpWhat'', function() {
		expect(test.make_abba('What', 'Up')).toBe('WhatUpUpWhat');
	});
	it('make_abba('aaa', 'bbb') → 'aaabbbbbbaaa'', function() {
		expect(test.make_abba('aaa', 'bbb')).toBe('aaabbbbbbaaa');
	});
	it('make_abba('x', 'y') → 'xyyx'', function() {
		expect(test.make_abba('x', 'y')).toBe('xyyx');
	});
	it('make_abba('x', '') → 'xx'', function() {
		expect(test.make_abba('x', '')).toBe('xx');
	});
	it('make_abba('', 'y') → 'yy'', function() {
		expect(test.make_abba('', 'y')).toBe('yy');
	});
	it('make_abba('Bo', 'Ya') → 'BoYaYaBo'', function() {
		expect(test.make_abba('Bo', 'Ya')).toBe('BoYaYaBo');
	});
	it('make_abba('Ya', 'Ya') → 'YaYaYaYa'', function() {
		expect(test.make_abba('Ya', 'Ya')).toBe('YaYaYaYa');
	});
});
