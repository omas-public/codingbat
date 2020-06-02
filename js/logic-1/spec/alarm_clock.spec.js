var test = require('../src/alarm_clock.js');
describe('alarm_clock', function() {
	it('alarm_clock(1, False) → '7:00'', function() {
		expect(test.alarm_clock(1, False)).toBe('7:00');
	});
	it('alarm_clock(5, False) → '7:00'', function() {
		expect(test.alarm_clock(5, False)).toBe('7:00');
	});
	it('alarm_clock(0, False) → '10:00'', function() {
		expect(test.alarm_clock(0, False)).toBe('10:00');
	});
	it('alarm_clock(6, False) → '10:00'', function() {
		expect(test.alarm_clock(6, False)).toBe('10:00');
	});
	it('alarm_clock(0, True) → 'off'', function() {
		expect(test.alarm_clock(0, True)).toBe('off');
	});
	it('alarm_clock(6, True) → 'off'', function() {
		expect(test.alarm_clock(6, True)).toBe('off');
	});
	it('alarm_clock(1, True) → '10:00'', function() {
		expect(test.alarm_clock(1, True)).toBe('10:00');
	});
	it('alarm_clock(3, True) → '10:00'', function() {
		expect(test.alarm_clock(3, True)).toBe('10:00');
	});
	it('alarm_clock(5, True) → '10:00'', function() {
		expect(test.alarm_clock(5, True)).toBe('10:00');
	});
});
