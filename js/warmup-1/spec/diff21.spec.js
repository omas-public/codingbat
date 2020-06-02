const test = require('../src/diff21.js');
describe('diff21', () => {

      it('diff21(19) → 2)', () => {
        expect(test.diff21(19)).toBe(2);
      });
    

      it('diff21(10) → 11)', () => {
        expect(test.diff21(10)).toBe(11);
      });
    

      it('diff21(21) → 0)', () => {
        expect(test.diff21(21)).toBe(0);
      });
    

      it('diff21(22) → 2)', () => {
        expect(test.diff21(22)).toBe(2);
      });
    

      it('diff21(25) → 8)', () => {
        expect(test.diff21(25)).toBe(8);
      });
    

      it('diff21(30) → 18)', () => {
        expect(test.diff21(30)).toBe(18);
      });
    

      it('diff21(0) → 21)', () => {
        expect(test.diff21(0)).toBe(21);
      });
    

      it('diff21(1) → 20)', () => {
        expect(test.diff21(1)).toBe(20);
      });
    

      it('diff21(2) → 19)', () => {
        expect(test.diff21(2)).toBe(19);
      });
    

      it('diff21(-1) → 22)', () => {
        expect(test.diff21(-1)).toBe(22);
      });
    

      it('diff21(-2) → 23)', () => {
        expect(test.diff21(-2)).toBe(23);
      });
    

      it('diff21(50) → 58)', () => {
        expect(test.diff21(50)).toBe(58);
      });
    
});
