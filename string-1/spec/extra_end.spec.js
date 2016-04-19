var test = require('../src/extra_end.js');
describe('extra_end', function() {
	it('extra_end('Hello') → 'lololo'', function() {
		expect(test.extra_end('Hello')).toBe('lololo');
	});
	it('extra_end('ab') → 'ababab'', function() {
		expect(test.extra_end('ab')).toBe('ababab');
	});
	it('extra_end('Hi') → 'HiHiHi'', function() {
		expect(test.extra_end('Hi')).toBe('HiHiHi');
	});
	it('extra_end('Candy') → 'dydydy'', function() {
		expect(test.extra_end('Candy')).toBe('dydydy');
	});
	it('extra_end('Code') → 'dedede'', function() {
		expect(test.extra_end('Code')).toBe('dedede');
	});
});
