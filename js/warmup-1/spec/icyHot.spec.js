const test = require('../src/icyHot.js');
describe('icyHot', () => {

      it('icyHot(120, -1) → true)', () => {
        expect(test.icyHot(120, -1)).toBe(true);
      });
    

      it('icyHot(-1, 120) → true)', () => {
        expect(test.icyHot(-1, 120)).toBe(true);
      });
    

      it('icyHot(2, 120) → false)', () => {
        expect(test.icyHot(2, 120)).toBe(false);
      });
    

      it('icyHot(-1, 100) → false)', () => {
        expect(test.icyHot(-1, 100)).toBe(false);
      });
    

      it('icyHot(-2, -2) → false)', () => {
        expect(test.icyHot(-2, -2)).toBe(false);
      });
    

      it('icyHot(120, 120) → false)', () => {
        expect(test.icyHot(120, 120)).toBe(false);
      });
    
});
