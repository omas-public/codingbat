const test = require('../src/in3050.js');
describe('in3050', () => {

      it('in3050(30, 31) → true)', () => {
        expect(test.in3050(30, 31)).toBe(true);
      });
    

      it('in3050(30, 41) → false)', () => {
        expect(test.in3050(30, 41)).toBe(false);
      });
    

      it('in3050(40, 50) → true)', () => {
        expect(test.in3050(40, 50)).toBe(true);
      });
    

      it('in3050(40, 51) → false)', () => {
        expect(test.in3050(40, 51)).toBe(false);
      });
    

      it('in3050(39, 50) → false)', () => {
        expect(test.in3050(39, 50)).toBe(false);
      });
    

      it('in3050(50, 39) → false)', () => {
        expect(test.in3050(50, 39)).toBe(false);
      });
    

      it('in3050(40, 39) → true)', () => {
        expect(test.in3050(40, 39)).toBe(true);
      });
    

      it('in3050(49, 48) → true)', () => {
        expect(test.in3050(49, 48)).toBe(true);
      });
    

      it('in3050(50, 40) → true)', () => {
        expect(test.in3050(50, 40)).toBe(true);
      });
    

      it('in3050(50, 51) → false)', () => {
        expect(test.in3050(50, 51)).toBe(false);
      });
    

      it('in3050(35, 36) → true)', () => {
        expect(test.in3050(35, 36)).toBe(true);
      });
    

      it('in3050(35, 45) → false)', () => {
        expect(test.in3050(35, 45)).toBe(false);
      });
    
});
