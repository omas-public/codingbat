const test = require('../src/max1020.js');
describe('max1020', () => {

      it('max1020(11, 19) → 19)', () => {
        expect(test.max1020(11, 19)).toBe(19);
      });
    

      it('max1020(19, 11) → 19)', () => {
        expect(test.max1020(19, 11)).toBe(19);
      });
    

      it('max1020(11, 9) → 11)', () => {
        expect(test.max1020(11, 9)).toBe(11);
      });
    

      it('max1020(9, 21) → 0)', () => {
        expect(test.max1020(9, 21)).toBe(0);
      });
    

      it('max1020(10, 21) → 10)', () => {
        expect(test.max1020(10, 21)).toBe(10);
      });
    

      it('max1020(21, 10) → 10)', () => {
        expect(test.max1020(21, 10)).toBe(10);
      });
    

      it('max1020(9, 11) → 11)', () => {
        expect(test.max1020(9, 11)).toBe(11);
      });
    

      it('max1020(23, 10) → 10)', () => {
        expect(test.max1020(23, 10)).toBe(10);
      });
    

      it('max1020(20, 10) → 20)', () => {
        expect(test.max1020(20, 10)).toBe(20);
      });
    

      it('max1020(7, 20) → 20)', () => {
        expect(test.max1020(7, 20)).toBe(20);
      });
    

      it('max1020(17, 16) → 17)', () => {
        expect(test.max1020(17, 16)).toBe(17);
      });
    
});
