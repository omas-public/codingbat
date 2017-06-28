const test = require('../src/or35.js');
describe('or35', () => {

      it('or35(3) → true)', () => {
        expect(test.or35(3)).toBe(true);
      });
    

      it('or35(10) → true)', () => {
        expect(test.or35(10)).toBe(true);
      });
    

      it('or35(8) → false)', () => {
        expect(test.or35(8)).toBe(false);
      });
    

      it('or35(15) → true)', () => {
        expect(test.or35(15)).toBe(true);
      });
    

      it('or35(5) → true)', () => {
        expect(test.or35(5)).toBe(true);
      });
    

      it('or35(9) → true)', () => {
        expect(test.or35(9)).toBe(true);
      });
    

      it('or35(4) → false)', () => {
        expect(test.or35(4)).toBe(false);
      });
    

      it('or35(7) → false)', () => {
        expect(test.or35(7)).toBe(false);
      });
    

      it('or35(6) → true)', () => {
        expect(test.or35(6)).toBe(true);
      });
    

      it('or35(17) → false)', () => {
        expect(test.or35(17)).toBe(false);
      });
    

      it('or35(18) → true)', () => {
        expect(test.or35(18)).toBe(true);
      });
    

      it('or35(29) → false)', () => {
        expect(test.or35(29)).toBe(false);
      });
    

      it('or35(20) → true)', () => {
        expect(test.or35(20)).toBe(true);
      });
    

      it('or35(21) → true)', () => {
        expect(test.or35(21)).toBe(true);
      });
    

      it('or35(22) → false)', () => {
        expect(test.or35(22)).toBe(false);
      });
    

      it('or35(45) → true)', () => {
        expect(test.or35(45)).toBe(true);
      });
    

      it('or35(99) → true)', () => {
        expect(test.or35(99)).toBe(true);
      });
    

      it('or35(100) → true)', () => {
        expect(test.or35(100)).toBe(true);
      });
    

      it('or35(101) → false)', () => {
        expect(test.or35(101)).toBe(false);
      });
    

      it('or35(121) → false)', () => {
        expect(test.or35(121)).toBe(false);
      });
    

      it('or35(122) → false)', () => {
        expect(test.or35(122)).toBe(false);
      });
    

      it('or35(123) → true)', () => {
        expect(test.or35(123)).toBe(true);
      });
    
});
