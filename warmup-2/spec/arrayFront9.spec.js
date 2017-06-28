const test = require('../src/arrayFront9.js');
describe('arrayFront9', () => {

      it('arrayFront9([1, 2, 9, 3, 4]) → true)', () => {
        expect(test.arrayFront9([1, 2, 9, 3, 4])).toBe(true);
      });
    

      it('arrayFront9([1, 2, 3, 4, 9]) → false)', () => {
        expect(test.arrayFront9([1, 2, 3, 4, 9])).toBe(false);
      });
    

      it('arrayFront9([1, 2, 3, 4, 5]) → false)', () => {
        expect(test.arrayFront9([1, 2, 3, 4, 5])).toBe(false);
      });
    

      it('arrayFront9([9, 2, 3]) → true)', () => {
        expect(test.arrayFront9([9, 2, 3])).toBe(true);
      });
    

      it('arrayFront9([1, 9, 9]) → true)', () => {
        expect(test.arrayFront9([1, 9, 9])).toBe(true);
      });
    

      it('arrayFront9([1, 2, 3]) → false)', () => {
        expect(test.arrayFront9([1, 2, 3])).toBe(false);
      });
    

      it('arrayFront9([1, 9]) → true)', () => {
        expect(test.arrayFront9([1, 9])).toBe(true);
      });
    

      it('arrayFront9([5, 5]) → false)', () => {
        expect(test.arrayFront9([5, 5])).toBe(false);
      });
    

      it('arrayFront9([2]) → false)', () => {
        expect(test.arrayFront9([2])).toBe(false);
      });
    

      it('arrayFront9([9]) → true)', () => {
        expect(test.arrayFront9([9])).toBe(true);
      });
    

      it('arrayFront9([]) → false)', () => {
        expect(test.arrayFront9([])).toBe(false);
      });
    

      it('arrayFront9([3, 9, 2, 3, 3]) → true)', () => {
        expect(test.arrayFront9([3, 9, 2, 3, 3])).toBe(true);
      });
    
});
