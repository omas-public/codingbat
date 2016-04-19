var test = require('../src/first_half.js');
describe('first_half', function() {
	it('first_half('WooHoo') → 'Woo'', function() {
		expect(test.first_half('WooHoo')).toBe('Woo');
	});
	it('first_half('HelloThere') → 'Hello'', function() {
		expect(test.first_half('HelloThere')).toBe('Hello');
	});
	it('first_half('abcdef') → 'abc'', function() {
		expect(test.first_half('abcdef')).toBe('abc');
	});
	it('first_half('ab') → 'a'', function() {
		expect(test.first_half('ab')).toBe('a');
	});
	it('first_half('') → ''', function() {
		expect(test.first_half('')).toBe('');
	});
	it('first_half('0123456789') → '01234'', function() {
		expect(test.first_half('0123456789')).toBe('01234');
	});
	it('first_half('kitten') → 'kit'', function() {
		expect(test.first_half('kitten')).toBe('kit');
	});
});
