var test = require('../src/first_two.js');
describe('first_two', function() {
	it('first_two('Hello') → 'He'', function() {
		expect(test.first_two('Hello')).toBe('He');
	});
	it('first_two('abcdefg') → 'ab'', function() {
		expect(test.first_two('abcdefg')).toBe('ab');
	});
	it('first_two('ab') → 'ab'', function() {
		expect(test.first_two('ab')).toBe('ab');
	});
	it('first_two('a') → 'a'', function() {
		expect(test.first_two('a')).toBe('a');
	});
	it('first_two('') → ''', function() {
		expect(test.first_two('')).toBe('');
	});
	it('first_two('Kitten') → 'Ki'', function() {
		expect(test.first_two('Kitten')).toBe('Ki');
	});
	it('first_two('hi') → 'hi'', function() {
		expect(test.first_two('hi')).toBe('hi');
	});
	it('first_two('hiya') → 'hi'', function() {
		expect(test.first_two('hiya')).toBe('hi');
	});
});
