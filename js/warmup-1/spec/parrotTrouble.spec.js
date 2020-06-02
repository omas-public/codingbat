const test = require('../src/parrotTrouble.js');
describe('parrotTrouble', () => {

      it('parrotTrouble(true, 6) → true)', () => {
        expect(test.parrotTrouble(true, 6)).toBe(true);
      });
    

      it('parrotTrouble(true, 7) → false)', () => {
        expect(test.parrotTrouble(true, 7)).toBe(false);
      });
    

      it('parrotTrouble(false, 6) → false)', () => {
        expect(test.parrotTrouble(false, 6)).toBe(false);
      });
    

      it('parrotTrouble(true, 21) → true)', () => {
        expect(test.parrotTrouble(true, 21)).toBe(true);
      });
    

      it('parrotTrouble(false, 21) → false)', () => {
        expect(test.parrotTrouble(false, 21)).toBe(false);
      });
    

      it('parrotTrouble(false, 20) → false)', () => {
        expect(test.parrotTrouble(false, 20)).toBe(false);
      });
    

      it('parrotTrouble(true, 23) → true)', () => {
        expect(test.parrotTrouble(true, 23)).toBe(true);
      });
    

      it('parrotTrouble(false, 23) → false)', () => {
        expect(test.parrotTrouble(false, 23)).toBe(false);
      });
    

      it('parrotTrouble(true, 20) → false)', () => {
        expect(test.parrotTrouble(true, 20)).toBe(false);
      });
    

      it('parrotTrouble(false, 12) → false)', () => {
        expect(test.parrotTrouble(false, 12)).toBe(false);
      });
    
});
