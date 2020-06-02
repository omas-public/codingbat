var test = require('../src/cat_dog.js');
describe('cat_dog', function() {
	it('cat_dog('catdog') → True', function() {
		expect(test.cat_dog('catdog')).toBe(True);
	});
	it('cat_dog('catcat') → False', function() {
		expect(test.cat_dog('catcat')).toBe(False);
	});
	it('cat_dog('1cat1cadodog') → True', function() {
		expect(test.cat_dog('1cat1cadodog')).toBe(True);
	});
	it('cat_dog('catxxdogxxxdog') → False', function() {
		expect(test.cat_dog('catxxdogxxxdog')).toBe(False);
	});
	it('cat_dog('catxdogxdogxcat') → True', function() {
		expect(test.cat_dog('catxdogxdogxcat')).toBe(True);
	});
	it('cat_dog('catxdogxdogxca') → False', function() {
		expect(test.cat_dog('catxdogxdogxca')).toBe(False);
	});
	it('cat_dog('dogdogcat') → False', function() {
		expect(test.cat_dog('dogdogcat')).toBe(False);
	});
	it('cat_dog('dogogcat') → True', function() {
		expect(test.cat_dog('dogogcat')).toBe(True);
	});
	it('cat_dog('dog') → False', function() {
		expect(test.cat_dog('dog')).toBe(False);
	});
	it('cat_dog('cat') → False', function() {
		expect(test.cat_dog('cat')).toBe(False);
	});
	it('cat_dog('ca') → True', function() {
		expect(test.cat_dog('ca')).toBe(True);
	});
	it('cat_dog('c') → True', function() {
		expect(test.cat_dog('c')).toBe(True);
	});
	it('cat_dog('') → True', function() {
		expect(test.cat_dog('')).toBe(True);
	});
});
