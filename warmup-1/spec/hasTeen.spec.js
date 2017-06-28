const test = require('../src/hasTeen.js');
describe('hasTeen', () => {

      it('hasTeen(13, 20, 10) → true)', () => {
        expect(test.hasTeen(13, 20, 10)).toBe(true);
      });
    

      it('hasTeen(20, 19, 10) → true)', () => {
        expect(test.hasTeen(20, 19, 10)).toBe(true);
      });
    

      it('hasTeen(20, 10, 13) → true)', () => {
        expect(test.hasTeen(20, 10, 13)).toBe(true);
      });
    

      it('hasTeen(1, 20, 12) → false)', () => {
        expect(test.hasTeen(1, 20, 12)).toBe(false);
      });
    

      it('hasTeen(19, 20, 12) → true)', () => {
        expect(test.hasTeen(19, 20, 12)).toBe(true);
      });
    

      it('hasTeen(12, 20, 19) → true)', () => {
        expect(test.hasTeen(12, 20, 19)).toBe(true);
      });
    

      it('hasTeen(12, 9, 20) → false)', () => {
        expect(test.hasTeen(12, 9, 20)).toBe(false);
      });
    

      it('hasTeen(12, 18, 20) → true)', () => {
        expect(test.hasTeen(12, 18, 20)).toBe(true);
      });
    

      it('hasTeen(14, 2, 20) → true)', () => {
        expect(test.hasTeen(14, 2, 20)).toBe(true);
      });
    

      it('hasTeen(4, 2, 20) → false)', () => {
        expect(test.hasTeen(4, 2, 20)).toBe(false);
      });
    

      it('hasTeen(11, 22, 22) → false)', () => {
        expect(test.hasTeen(11, 22, 22)).toBe(false);
      });
    
});
