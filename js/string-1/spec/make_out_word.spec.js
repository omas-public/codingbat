var test = require('../src/make_out_word.js');
describe('make_out_word', function() {
	it('make_out_word('<<>>', 'Yay') → '<<Yay>>'', function() {
		expect(test.make_out_word('<<>>', 'Yay')).toBe('<<Yay>>');
	});
	it('make_out_word('<<>>', 'WooHoo') → '<<WooHoo>>'', function() {
		expect(test.make_out_word('<<>>', 'WooHoo')).toBe('<<WooHoo>>');
	});
	it('make_out_word('[[]]', 'word') → '[[word]]'', function() {
		expect(test.make_out_word('[[]]', 'word')).toBe('[[word]]');
	});
	it('make_out_word('HHoo', 'Hello') → 'HHHellooo'', function() {
		expect(test.make_out_word('HHoo', 'Hello')).toBe('HHHellooo');
	});
	it('make_out_word('abyz', 'YAY') → 'abYAYyz'', function() {
		expect(test.make_out_word('abyz', 'YAY')).toBe('abYAYyz');
	});
});
