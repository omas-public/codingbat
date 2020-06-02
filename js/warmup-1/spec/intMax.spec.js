const test = require('../src/intMax.js');
describe('intMax', () => {

      it('intMax(1, 2, 3) → 3)', () => {
        expect(test.intMax(1, 2, 3)).toBe(3);
      });
    

      it('intMax(1, 3, 2) → 3)', () => {
        expect(test.intMax(1, 3, 2)).toBe(3);
      });
    

      it('intMax(3, 2, 1) → 3)', () => {
        expect(test.intMax(3, 2, 1)).toBe(3);
      });
    

      it('intMax(9, 3, 3) → 9)', () => {
        expect(test.intMax(9, 3, 3)).toBe(9);
      });
    

      it('intMax(3, 9, 3) → 9)', () => {
        expect(test.intMax(3, 9, 3)).toBe(9);
      });
    

      it('intMax(3, 3, 9) → 9)', () => {
        expect(test.intMax(3, 3, 9)).toBe(9);
      });
    

      it('intMax(8, 2, 3) → 8)', () => {
        expect(test.intMax(8, 2, 3)).toBe(8);
      });
    

      it('intMax(-3, -1, -2) → -1)', () => {
        expect(test.intMax(-3, -1, -2)).toBe(-1);
      });
    

      it('intMax(6, 2, 5) → 6)', () => {
        expect(test.intMax(6, 2, 5)).toBe(6);
      });
    

      it('intMax(5, 6, 2) → 6)', () => {
        expect(test.intMax(5, 6, 2)).toBe(6);
      });
    

      it('intMax(5, 2, 6) → 6)', () => {
        expect(test.intMax(5, 2, 6)).toBe(6);
      });
    
});
