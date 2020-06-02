const test = require('../src/array667.js');
describe('array667', () => {

      it('array667([6, 6, 2]) → 1)', () => {
        expect(test.array667([6, 6, 2])).toBe(1);
      });
    

      it('array667([6, 6, 2, 6]) → 1)', () => {
        expect(test.array667([6, 6, 2, 6])).toBe(1);
      });
    

      it('array667([6, 7, 2, 6]) → 1)', () => {
        expect(test.array667([6, 7, 2, 6])).toBe(1);
      });
    

      it('array667([6, 6, 2, 6, 7]) → 2)', () => {
        expect(test.array667([6, 6, 2, 6, 7])).toBe(2);
      });
    

      it('array667([1, 6, 3]) → 0)', () => {
        expect(test.array667([1, 6, 3])).toBe(0);
      });
    

      it('array667([6, 1]) → 0)', () => {
        expect(test.array667([6, 1])).toBe(0);
      });
    

      it('array667([]) → 0)', () => {
        expect(test.array667([])).toBe(0);
      });
    

      it('array667([3, 6, 7, 6]) → 1)', () => {
        expect(test.array667([3, 6, 7, 6])).toBe(1);
      });
    

      it('array667([3, 6, 6, 7]) → 2)', () => {
        expect(test.array667([3, 6, 6, 7])).toBe(2);
      });
    

      it('array667([6, 3, 6, 6]) → 1)', () => {
        expect(test.array667([6, 3, 6, 6])).toBe(1);
      });
    

      it('array667([6, 7, 6, 6]) → 2)', () => {
        expect(test.array667([6, 7, 6, 6])).toBe(2);
      });
    

      it('array667([1, 2, 3, 5, 6]) → 0)', () => {
        expect(test.array667([1, 2, 3, 5, 6])).toBe(0);
      });
    

      it('array667([1, 2, 3, 6, 6]) → 1)', () => {
        expect(test.array667([1, 2, 3, 6, 6])).toBe(1);
      });
    
});
