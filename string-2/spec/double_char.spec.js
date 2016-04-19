var test = require('../src/double_char.js');
describe('double_char', function() {
	it('double_char('The') → 'TThhee'', function() {
		expect(test.double_char('The')).toBe('TThhee');
	});
	it('double_char('AAbb') → 'AAAAbbbb'', function() {
		expect(test.double_char('AAbb')).toBe('AAAAbbbb');
	});
	it('double_char('Hi-There') → 'HHii--TThheerree'', function() {
		expect(test.double_char('Hi-There')).toBe('HHii--TThheerree');
	});
	it('double_char('Word!') → 'WWoorrdd!!'', function() {
		expect(test.double_char('Word!')).toBe('WWoorrdd!!');
	});
	it('double_char('!!') → '!!!!'', function() {
		expect(test.double_char('!!')).toBe('!!!!');
	});
	it('double_char('') → ''', function() {
		expect(test.double_char('')).toBe('');
	});
	it('double_char('a') → 'aa'', function() {
		expect(test.double_char('a')).toBe('aa');
	});
	it('double_char('.') → '..'', function() {
		expect(test.double_char('.')).toBe('..');
	});
	it('double_char('aa') → 'aaaa'', function() {
		expect(test.double_char('aa')).toBe('aaaa');
	});
});
