const test = require('../src/sumDouble.js');
describe('sumDouble', () => {

      it('sumDouble(1, 2) → 3)', () => {
        expect(test.sumDouble(1, 2)).toBe(3);
      });
    

      it('sumDouble(3, 2) → 5)', () => {
        expect(test.sumDouble(3, 2)).toBe(5);
      });
    

      it('sumDouble(2, 2) → 8)', () => {
        expect(test.sumDouble(2, 2)).toBe(8);
      });
    

      it('sumDouble(-1, 0) → -1)', () => {
        expect(test.sumDouble(-1, 0)).toBe(-1);
      });
    

      it('sumDouble(3, 3) → 12)', () => {
        expect(test.sumDouble(3, 3)).toBe(12);
      });
    

      it('sumDouble(0, 0) → 0)', () => {
        expect(test.sumDouble(0, 0)).toBe(0);
      });
    

      it('sumDouble(0, 1) → 1)', () => {
        expect(test.sumDouble(0, 1)).toBe(1);
      });
    

      it('sumDouble(3, 4) → 7)', () => {
        expect(test.sumDouble(3, 4)).toBe(7);
      });
    
});
