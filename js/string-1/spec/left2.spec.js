var test = require('../src/left2.js');
describe('left2', function() {
	it('left2('Hello') → 'lloHe'', function() {
		expect(test.left2('Hello')).toBe('lloHe');
	});
	it('left2('java') → 'vaja'', function() {
		expect(test.left2('java')).toBe('vaja');
	});
	it('left2('Hi') → 'Hi'', function() {
		expect(test.left2('Hi')).toBe('Hi');
	});
	it('left2('code') → 'deco'', function() {
		expect(test.left2('code')).toBe('deco');
	});
	it('left2('cat') → 'tca'', function() {
		expect(test.left2('cat')).toBe('tca');
	});
	it('left2('12345') → '34512'', function() {
		expect(test.left2('12345')).toBe('34512');
	});
	it('left2('Chocolate') → 'ocolateCh'', function() {
		expect(test.left2('Chocolate')).toBe('ocolateCh');
	});
	it('left2('bricks') → 'icksbr'', function() {
		expect(test.left2('bricks')).toBe('icksbr');
	});
});
