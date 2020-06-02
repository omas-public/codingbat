const test = require('../src/has271.js');
describe('has271', () => {

      it('has271([1, 2, 7, 1]) → true)', () => {
        expect(test.has271([1, 2, 7, 1])).toBe(true);
      });
    

      it('has271([1, 2, 8, 1]) → false)', () => {
        expect(test.has271([1, 2, 8, 1])).toBe(false);
      });
    

      it('has271([2, 7, 1]) → true)', () => {
        expect(test.has271([2, 7, 1])).toBe(true);
      });
    

      it('has271([3, 8, 2]) → true)', () => {
        expect(test.has271([3, 8, 2])).toBe(true);
      });
    

      it('has271([2, 7, 3]) → true)', () => {
        expect(test.has271([2, 7, 3])).toBe(true);
      });
    

      it('has271([2, 7, 4]) → false)', () => {
        expect(test.has271([2, 7, 4])).toBe(false);
      });
    

      it('has271([2, 7, -1]) → true)', () => {
        expect(test.has271([2, 7, -1])).toBe(true);
      });
    

      it('has271([2, 7, -2]) → false)', () => {
        expect(test.has271([2, 7, -2])).toBe(false);
      });
    

      it('has271([4, 5, 3, 8, 0]) → true)', () => {
        expect(test.has271([4, 5, 3, 8, 0])).toBe(true);
      });
    

      it('has271([2, 7, 5, 10, 4]) → true)', () => {
        expect(test.has271([2, 7, 5, 10, 4])).toBe(true);
      });
    

      it('has271([2, 7, -2, 4, 9, 3]) → true)', () => {
        expect(test.has271([2, 7, -2, 4, 9, 3])).toBe(true);
      });
    

      it('has271([2, 7, 5, 10, 1]) → false)', () => {
        expect(test.has271([2, 7, 5, 10, 1])).toBe(false);
      });
    

      it('has271([2, 7, -2, 4, 10, 2]) → false)', () => {
        expect(test.has271([2, 7, -2, 4, 10, 2])).toBe(false);
      });
    

      it('has271([1, 1, 4, 9, 0]) → false)', () => {
        expect(test.has271([1, 1, 4, 9, 0])).toBe(false);
      });
    

      it('has271([1, 1, 4, 9, 4, 9, 2]) → true)', () => {
        expect(test.has271([1, 1, 4, 9, 4, 9, 2])).toBe(true);
      });
    
});
