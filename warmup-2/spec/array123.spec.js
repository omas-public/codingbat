const test = require('../src/array123.js');
describe('array123', () => {

      it('array123([1, 1, 2, 3, 1]) → true)', () => {
        expect(test.array123([1, 1, 2, 3, 1])).toBe(true);
      });
    

      it('array123([1, 1, 2, 4, 1]) → false)', () => {
        expect(test.array123([1, 1, 2, 4, 1])).toBe(false);
      });
    

      it('array123([1, 1, 2, 1, 2, 3]) → true)', () => {
        expect(test.array123([1, 1, 2, 1, 2, 3])).toBe(true);
      });
    

      it('array123([1, 1, 2, 1, 2, 1]) → false)', () => {
        expect(test.array123([1, 1, 2, 1, 2, 1])).toBe(false);
      });
    

      it('array123([1, 2, 3, 1, 2, 3]) → true)', () => {
        expect(test.array123([1, 2, 3, 1, 2, 3])).toBe(true);
      });
    

      it('array123([1, 2, 3]) → true)', () => {
        expect(test.array123([1, 2, 3])).toBe(true);
      });
    

      it('array123([1, 1, 1]) → false)', () => {
        expect(test.array123([1, 1, 1])).toBe(false);
      });
    

      it('array123([1, 2]) → false)', () => {
        expect(test.array123([1, 2])).toBe(false);
      });
    

      it('array123([1]) → false)', () => {
        expect(test.array123([1])).toBe(false);
      });
    

      it('array123([]) → false)', () => {
        expect(test.array123([])).toBe(false);
      });
    
});
