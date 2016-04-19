var test = require('../src/without_end.js');
describe('without_end', function() {
	it('without_end('Hello') → 'ell'', function() {
		expect(test.without_end('Hello')).toBe('ell');
	});
	it('without_end('java') → 'av'', function() {
		expect(test.without_end('java')).toBe('av');
	});
	it('without_end('coding') → 'odin'', function() {
		expect(test.without_end('coding')).toBe('odin');
	});
	it('without_end('code') → 'od'', function() {
		expect(test.without_end('code')).toBe('od');
	});
	it('without_end('ab') → ''', function() {
		expect(test.without_end('ab')).toBe('');
	});
	it('without_end('Chocolate!') → 'hocolate'', function() {
		expect(test.without_end('Chocolate!')).toBe('hocolate');
	});
	it('without_end('kitten') → 'itte'', function() {
		expect(test.without_end('kitten')).toBe('itte');
	});
	it('without_end('woohoo') → 'ooho'', function() {
		expect(test.without_end('woohoo')).toBe('ooho');
	});
});
