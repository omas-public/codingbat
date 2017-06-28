const test = require('../src/notString.js');
describe('notString', () => {

      it('posNeg(1, -1, false) → true)', () => {
        expect(test.posNeg(1, -1, false)).toBe(true);
      });
    

      it('posNeg(-1, 1, false) → true)', () => {
        expect(test.posNeg(-1, 1, false)).toBe(true);
      });
    

      it('posNeg(-4, -5, true) → true)', () => {
        expect(test.posNeg(-4, -5, true)).toBe(true);
      });
    

      it('posNeg(-4, -5, false) → false)', () => {
        expect(test.posNeg(-4, -5, false)).toBe(false);
      });
    

      it('posNeg(-4, 5, false) → true)', () => {
        expect(test.posNeg(-4, 5, false)).toBe(true);
      });
    

      it('posNeg(-4, 5, true) → false)', () => {
        expect(test.posNeg(-4, 5, true)).toBe(false);
      });
    

      it('posNeg(1, 1, false) → false)', () => {
        expect(test.posNeg(1, 1, false)).toBe(false);
      });
    

      it('posNeg(-1, -1, false) → false)', () => {
        expect(test.posNeg(-1, -1, false)).toBe(false);
      });
    

      it('posNeg(1, -1, true) → false)', () => {
        expect(test.posNeg(1, -1, true)).toBe(false);
      });
    

      it('posNeg(-1, 1, true) → false)', () => {
        expect(test.posNeg(-1, 1, true)).toBe(false);
      });
    

      it('posNeg(1, 1, true) → false)', () => {
        expect(test.posNeg(1, 1, true)).toBe(false);
      });
    

      it('posNeg(-1, -1, true) → true)', () => {
        expect(test.posNeg(-1, -1, true)).toBe(true);
      });
    

      it('posNeg(5, -5, false) → true)', () => {
        expect(test.posNeg(5, -5, false)).toBe(true);
      });
    

      it('posNeg(-6, 6, false) → true)', () => {
        expect(test.posNeg(-6, 6, false)).toBe(true);
      });
    

      it('posNeg(-5, -6, false) → false)', () => {
        expect(test.posNeg(-5, -6, false)).toBe(false);
      });
    

      it('posNeg(-2, -1, false) → false)', () => {
        expect(test.posNeg(-2, -1, false)).toBe(false);
      });
    

      it('posNeg(1, 2, false) → false)', () => {
        expect(test.posNeg(1, 2, false)).toBe(false);
      });
    

      it('posNeg(-5, 6, true) → false)', () => {
        expect(test.posNeg(-5, 6, true)).toBe(false);
      });
    

      it('posNeg(-5, -5, true) → true)', () => {
        expect(test.posNeg(-5, -5, true)).toBe(true);
      });
    
});
