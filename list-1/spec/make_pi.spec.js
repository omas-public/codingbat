var test = require('../src/make_pi.js');
describe('make_pi', function() {
	it('make_pi() → [3, 1, 4]', function() {
		expect(test.make_pi()).toBe([3, 1, 4]);
	});
});
