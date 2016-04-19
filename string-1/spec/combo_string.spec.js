var test = require('../src/combo_string.js');
describe('combo_string', function() {
	it('combo_string('Hello', 'hi') → 'hiHellohi'', function() {
		expect(test.combo_string('Hello', 'hi')).toBe('hiHellohi');
	});
	it('combo_string('hi', 'Hello') → 'hiHellohi'', function() {
		expect(test.combo_string('hi', 'Hello')).toBe('hiHellohi');
	});
	it('combo_string('aaa', 'b') → 'baaab'', function() {
		expect(test.combo_string('aaa', 'b')).toBe('baaab');
	});
	it('combo_string('b', 'aaa') → 'baaab'', function() {
		expect(test.combo_string('b', 'aaa')).toBe('baaab');
	});
	it('combo_string('aaa', '') → 'aaa'', function() {
		expect(test.combo_string('aaa', '')).toBe('aaa');
	});
	it('combo_string('', 'bb') → 'bb'', function() {
		expect(test.combo_string('', 'bb')).toBe('bb');
	});
	it('combo_string('aaa', '1234') → 'aaa1234aaa'', function() {
		expect(test.combo_string('aaa', '1234')).toBe('aaa1234aaa');
	});
	it('combo_string('aaa', 'bb') → 'bbaaabb'', function() {
		expect(test.combo_string('aaa', 'bb')).toBe('bbaaabb');
	});
	it('combo_string('a', 'bb') → 'abba'', function() {
		expect(test.combo_string('a', 'bb')).toBe('abba');
	});
	it('combo_string('bb', 'a') → 'abba'', function() {
		expect(test.combo_string('bb', 'a')).toBe('abba');
	});
	it('combo_string('xyz', 'ab') → 'abxyzab'', function() {
		expect(test.combo_string('xyz', 'ab')).toBe('abxyzab');
	});
});
