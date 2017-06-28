const test = require('../src/loneTeen.js');
describe('loneTeen', () => {

      it('loneTeen(13, 99) → true)', () => {
        expect(test.loneTeen(13, 99)).toBe(true);
      });
    

      it('loneTeen(21, 19) → true)', () => {
        expect(test.loneTeen(21, 19)).toBe(true);
      });
    

      it('loneTeen(13, 13) → false)', () => {
        expect(test.loneTeen(13, 13)).toBe(false);
      });
    

      it('loneTeen(14, 20) → true)', () => {
        expect(test.loneTeen(14, 20)).toBe(true);
      });
    

      it('loneTeen(20, 15) → true)', () => {
        expect(test.loneTeen(20, 15)).toBe(true);
      });
    

      it('loneTeen(16, 17) → false)', () => {
        expect(test.loneTeen(16, 17)).toBe(false);
      });
    

      it('loneTeen(16, 9) → true)', () => {
        expect(test.loneTeen(16, 9)).toBe(true);
      });
    

      it('loneTeen(16, 18) → false)', () => {
        expect(test.loneTeen(16, 18)).toBe(false);
      });
    

      it('loneTeen(13, 19) → false)', () => {
        expect(test.loneTeen(13, 19)).toBe(false);
      });
    

      it('loneTeen(13, 20) → true)', () => {
        expect(test.loneTeen(13, 20)).toBe(true);
      });
    

      it('loneTeen(6, 18) → true)', () => {
        expect(test.loneTeen(6, 18)).toBe(true);
      });
    

      it('loneTeen(99, 13) → true)', () => {
        expect(test.loneTeen(99, 13)).toBe(true);
      });
    

      it('loneTeen(99, 99) → false)', () => {
        expect(test.loneTeen(99, 99)).toBe(false);
      });
    
});
