var test = require('../src/make_tags.js');
describe('make_tags', function() {
	it('make_tags('i', 'Yay') → '<i>Yay</i>'', function() {
		expect(test.make_tags('i', 'Yay')).toBe('<i>Yay</i>');
	});
	it('make_tags('i', 'Hello') → '<i>Hello</i>'', function() {
		expect(test.make_tags('i', 'Hello')).toBe('<i>Hello</i>');
	});
	it('make_tags('cite', 'Yay') → '<cite>Yay</cite>'', function() {
		expect(test.make_tags('cite', 'Yay')).toBe('<cite>Yay</cite>');
	});
	it('make_tags('address', 'here') → '<address>here</address>'', function() {
		expect(test.make_tags('address', 'here')).toBe('<address>here</address>');
	});
	it('make_tags('body', 'Heart') → '<body>Heart</body>'', function() {
		expect(test.make_tags('body', 'Heart')).toBe('<body>Heart</body>');
	});
	it('make_tags('i', 'i') → '<i>i</i>'', function() {
		expect(test.make_tags('i', 'i')).toBe('<i>i</i>');
	});
	it('make_tags('i', '') → '<i></i>'', function() {
		expect(test.make_tags('i', '')).toBe('<i></i>');
	});
});
