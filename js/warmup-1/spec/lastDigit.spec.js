const test = require('../src/lastDigit.js');
describe('lastDigit', () => {

      it('lastDigit(7, 17) → true)', () => {
        expect(test.lastDigit(7, 17)).toBe(true);
      });
    

      it('lastDigit(6, 17) → false)', () => {
        expect(test.lastDigit(6, 17)).toBe(false);
      });
    

      it('lastDigit(3, 113) → true)', () => {
        expect(test.lastDigit(3, 113)).toBe(true);
      });
    

      it('lastDigit(114, 113) → false)', () => {
        expect(test.lastDigit(114, 113)).toBe(false);
      });
    

      it('lastDigit(114, 4) → true)', () => {
        expect(test.lastDigit(114, 4)).toBe(true);
      });
    

      it('lastDigit(10, 0) → true)', () => {
        expect(test.lastDigit(10, 0)).toBe(true);
      });
    

      it('lastDigit(11, 0) → false)', () => {
        expect(test.lastDigit(11, 0)).toBe(false);
      });
    
});
