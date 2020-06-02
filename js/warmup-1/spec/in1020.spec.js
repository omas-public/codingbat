const test = require('../src/in1020.js');
describe('in1020', () => {

      it('in1020(12, 99) → true)', () => {
        expect(test.in1020(12, 99)).toBe(true);
      });
    

      it('in1020(21, 12) → true)', () => {
        expect(test.in1020(21, 12)).toBe(true);
      });
    

      it('in1020(8, 99) → false)', () => {
        expect(test.in1020(8, 99)).toBe(false);
      });
    

      it('in1020(99, 10) → true)', () => {
        expect(test.in1020(99, 10)).toBe(true);
      });
    

      it('in1020(20, 20) → true)', () => {
        expect(test.in1020(20, 20)).toBe(true);
      });
    

      it('in1020(21, 21) → false)', () => {
        expect(test.in1020(21, 21)).toBe(false);
      });
    

      it('in1020(9, 9) → false)', () => {
        expect(test.in1020(9, 9)).toBe(false);
      });
    
});
