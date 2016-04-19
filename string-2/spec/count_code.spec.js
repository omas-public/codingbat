var test = require('../src/count_code.js');
describe('count_code', function() {
	it('count_code('aaacodebbb') → 1', function() {
		expect(test.count_code('aaacodebbb')).toBe(1);
	});
	it('count_code('codexxcode') → 2', function() {
		expect(test.count_code('codexxcode')).toBe(2);
	});
	it('count_code('cozexxcope') → 2', function() {
		expect(test.count_code('cozexxcope')).toBe(2);
	});
	it('count_code('cozfxxcope') → 1', function() {
		expect(test.count_code('cozfxxcope')).toBe(1);
	});
	it('count_code('xxcozeyycop') → 1', function() {
		expect(test.count_code('xxcozeyycop')).toBe(1);
	});
	it('count_code('cozcop') → 0', function() {
		expect(test.count_code('cozcop')).toBe(0);
	});
	it('count_code('abcxyz') → 0', function() {
		expect(test.count_code('abcxyz')).toBe(0);
	});
	it('count_code('code') → 1', function() {
		expect(test.count_code('code')).toBe(1);
	});
	it('count_code('ode') → 0', function() {
		expect(test.count_code('ode')).toBe(0);
	});
	it('count_code('c') → 0', function() {
		expect(test.count_code('c')).toBe(0);
	});
	it('count_code('') → 0', function() {
		expect(test.count_code('')).toBe(0);
	});
	it('count_code('AAcodeBBcoleCCccoreDD') → 3', function() {
		expect(test.count_code('AAcodeBBcoleCCccoreDD')).toBe(3);
	});
	it('count_code('AAcodeBBcoleCCccorfDD') → 2', function() {
		expect(test.count_code('AAcodeBBcoleCCccorfDD')).toBe(2);
	});
	it('count_code('coAcodeBcoleccoreDD') → 3', function() {
		expect(test.count_code('coAcodeBcoleccoreDD')).toBe(3);
	});
});
