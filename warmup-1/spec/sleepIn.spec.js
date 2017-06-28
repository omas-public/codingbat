const test = require('../src/sleepIn.js');
describe('sleepIn', () => {

      it('sleepIn(false, false) → true)', () => {
        expect(test.sleepIn(false, false)).toBe(true);
      });
    

      it('sleepIn(true, false) → false)', () => {
        expect(test.sleepIn(true, false)).toBe(false);
      });
    

      it('sleepIn(false, true) → true)', () => {
        expect(test.sleepIn(false, true)).toBe(true);
      });
    

      it('sleepIn(true, true) → true)', () => {
        expect(test.sleepIn(true, true)).toBe(true);
      });
    
});
