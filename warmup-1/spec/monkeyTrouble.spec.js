const test = require('../src/monkeyTrouble.js');
describe('monkeyTrouble', () => {

      it('monkeyTrouble(true, true) → true)', () => {
        expect(test.monkeyTrouble(true, true)).toBe(true);
      });
    

      it('monkeyTrouble(false, false) → true)', () => {
        expect(test.monkeyTrouble(false, false)).toBe(true);
      });
    

      it('monkeyTrouble(true, false) → false)', () => {
        expect(test.monkeyTrouble(true, false)).toBe(false);
      });
    

      it('monkeyTrouble(false, true) → false)', () => {
        expect(test.monkeyTrouble(false, true)).toBe(false);
      });
    
});
