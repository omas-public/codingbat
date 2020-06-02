var test = require('../src/count_hi.js');
describe('count_hi', function() {
	it('count_hi('abc hi ho') → 1', function() {
		expect(test.count_hi('abc hi ho')).toBe(1);
	});
	it('count_hi('ABChi hi') → 2', function() {
		expect(test.count_hi('ABChi hi')).toBe(2);
	});
	it('count_hi('hihi') → 2', function() {
		expect(test.count_hi('hihi')).toBe(2);
	});
	it('count_hi('hiHIhi') → 2', function() {
		expect(test.count_hi('hiHIhi')).toBe(2);
	});
	it('count_hi('') → 0', function() {
		expect(test.count_hi('')).toBe(0);
	});
	it('count_hi('h') → 0', function() {
		expect(test.count_hi('h')).toBe(0);
	});
	it('count_hi('hi') → 1', function() {
		expect(test.count_hi('hi')).toBe(1);
	});
	it('count_hi('Hi is no HI on ahI') → 0', function() {
		expect(test.count_hi('Hi is no HI on ahI')).toBe(0);
	});
	it('count_hi('hiho not HOHIhi') → 2', function() {
		expect(test.count_hi('hiho not HOHIhi')).toBe(2);
	});
});
