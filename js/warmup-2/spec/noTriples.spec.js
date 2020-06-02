const test = require('../src/noTriples.js');
describe('noTriples', () => {

      it('noTriples([1, 1, 2, 2, 1]) → true)', () => {
        expect(test.noTriples([1, 1, 2, 2, 1])).toBe(true);
      });
    

      it('noTriples([1, 1, 2, 2, 2, 1]) → false)', () => {
        expect(test.noTriples([1, 1, 2, 2, 2, 1])).toBe(false);
      });
    

      it('noTriples([1, 1, 1, 2, 2, 2, 1]) → false)', () => {
        expect(test.noTriples([1, 1, 1, 2, 2, 2, 1])).toBe(false);
      });
    

      it('noTriples([1, 1, 2, 2, 1, 2, 1]) → true)', () => {
        expect(test.noTriples([1, 1, 2, 2, 1, 2, 1])).toBe(true);
      });
    

      it('noTriples([1, 2, 1]) → true)', () => {
        expect(test.noTriples([1, 2, 1])).toBe(true);
      });
    

      it('noTriples([1, 1, 1]) → false)', () => {
        expect(test.noTriples([1, 1, 1])).toBe(false);
      });
    

      it('noTriples([1, 1]) → true)', () => {
        expect(test.noTriples([1, 1])).toBe(true);
      });
    

      it('noTriples([1]) → true)', () => {
        expect(test.noTriples([1])).toBe(true);
      });
    

      it('noTriples([]) → true)', () => {
        expect(test.noTriples([])).toBe(true);
      });
    
});
