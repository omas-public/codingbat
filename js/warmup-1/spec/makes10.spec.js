const test = require('../src/makes10.js');
describe('makes10', () => {

      it('makes10(9, 10) → true)', () => {
        expect(test.makes10(9, 10)).toBe(true);
      });
    

      it('makes10(9, 9) → false)', () => {
        expect(test.makes10(9, 9)).toBe(false);
      });
    

      it('makes10(1, 9) → true)', () => {
        expect(test.makes10(1, 9)).toBe(true);
      });
    

      it('makes10(10, 1) → true)', () => {
        expect(test.makes10(10, 1)).toBe(true);
      });
    

      it('makes10(10, 10) → true)', () => {
        expect(test.makes10(10, 10)).toBe(true);
      });
    

      it('makes10(8, 2) → true)', () => {
        expect(test.makes10(8, 2)).toBe(true);
      });
    

      it('makes10(8, 3) → false)', () => {
        expect(test.makes10(8, 3)).toBe(false);
      });
    

      it('makes10(10, 42) → true)', () => {
        expect(test.makes10(10, 42)).toBe(true);
      });
    

      it('makes10(12, -2) → true)', () => {
        expect(test.makes10(12, -2)).toBe(true);
      });
    
});
