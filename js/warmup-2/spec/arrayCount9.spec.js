const test = require('../src/arrayCount9.js');
describe('arrayCount9', () => {

      it('arrayCount9([1, 2, 9]) → 1)', () => {
        expect(test.arrayCount9([1, 2, 9])).toBe(1);
      });
    

      it('arrayCount9([1, 9, 9]) → 2)', () => {
        expect(test.arrayCount9([1, 9, 9])).toBe(2);
      });
    

      it('arrayCount9([1, 9, 9, 3, 9]) → 3)', () => {
        expect(test.arrayCount9([1, 9, 9, 3, 9])).toBe(3);
      });
    

      it('arrayCount9([1, 2, 3]) → 0)', () => {
        expect(test.arrayCount9([1, 2, 3])).toBe(0);
      });
    

      it('arrayCount9([]) → 0)', () => {
        expect(test.arrayCount9([])).toBe(0);
      });
    

      it('arrayCount9([4, 2, 4, 3, 1]) → 0)', () => {
        expect(test.arrayCount9([4, 2, 4, 3, 1])).toBe(0);
      });
    

      it('arrayCount9([9, 2, 4, 3, 1]) → 1)', () => {
        expect(test.arrayCount9([9, 2, 4, 3, 1])).toBe(1);
      });
    
});
