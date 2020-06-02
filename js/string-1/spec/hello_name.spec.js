var test = require('../src/hello_name.js');
describe('hello_name', function() {
	it('hello_name('Bob') → 'Hello Bob!'', function() {
		expect(test.hello_name('Bob')).toBe('Hello Bob!');
	});
	it('hello_name('Alice') → 'Hello Alice!'', function() {
		expect(test.hello_name('Alice')).toBe('Hello Alice!');
	});
	it('hello_name('X') → 'Hello X!'', function() {
		expect(test.hello_name('X')).toBe('Hello X!');
	});
	it('hello_name('Dolly') → 'Hello Dolly!'', function() {
		expect(test.hello_name('Dolly')).toBe('Hello Dolly!');
	});
	it('hello_name('Alpha') → 'Hello Alpha!'', function() {
		expect(test.hello_name('Alpha')).toBe('Hello Alpha!');
	});
	it('hello_name('Omega') → 'Hello Omega!'', function() {
		expect(test.hello_name('Omega')).toBe('Hello Omega!');
	});
	it('hello_name('Goodbye') → 'Hello Goodbye!'', function() {
		expect(test.hello_name('Goodbye')).toBe('Hello Goodbye!');
	});
	it('hello_name('ho ho ho') → 'Hello ho ho ho!'', function() {
		expect(test.hello_name('ho ho ho')).toBe('Hello ho ho ho!');
	});
	it('hello_name('xyz!') → 'Hello xyz!!'', function() {
		expect(test.hello_name('xyz!')).toBe('Hello xyz!!');
	});
	it('hello_name('Hello') → 'Hello Hello!'', function() {
		expect(test.hello_name('Hello')).toBe('Hello Hello!');
	});
});
