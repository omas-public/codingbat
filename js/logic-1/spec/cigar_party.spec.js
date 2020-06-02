var test = require('../src/cigar_party.js');
describe('cigar_party', function() {
	it('cigar_party(30, False) → False', function() {
		expect(test.cigar_party(30, False)).toBe(False);
	});
	it('cigar_party(50, False) → True', function() {
		expect(test.cigar_party(50, False)).toBe(True);
	});
	it('cigar_party(70, True) → True', function() {
		expect(test.cigar_party(70, True)).toBe(True);
	});
	it('cigar_party(30, True) → False', function() {
		expect(test.cigar_party(30, True)).toBe(False);
	});
	it('cigar_party(50, True) → True', function() {
		expect(test.cigar_party(50, True)).toBe(True);
	});
	it('cigar_party(60, False) → True', function() {
		expect(test.cigar_party(60, False)).toBe(True);
	});
	it('cigar_party(61, False) → False', function() {
		expect(test.cigar_party(61, False)).toBe(False);
	});
	it('cigar_party(40, False) → True', function() {
		expect(test.cigar_party(40, False)).toBe(True);
	});
	it('cigar_party(39, False) → False', function() {
		expect(test.cigar_party(39, False)).toBe(False);
	});
	it('cigar_party(40, True) → True', function() {
		expect(test.cigar_party(40, True)).toBe(True);
	});
	it('cigar_party(39, True) → False', function() {
		expect(test.cigar_party(39, True)).toBe(False);
	});
});
