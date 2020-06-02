const test = require('../src/doubleX.js');
describe('doubleX', () => {

      it('doubleX("axxbb") → true)', () => {
        expect(test.doubleX("axxbb")).toBe(true);
      });
    

      it('doubleX("axaxax") → false)', () => {
        expect(test.doubleX("axaxax")).toBe(false);
      });
    

      it('doubleX("xxxxx") → true)', () => {
        expect(test.doubleX("xxxxx")).toBe(true);
      });
    

      it('doubleX("xaxxx") → false)', () => {
        expect(test.doubleX("xaxxx")).toBe(false);
      });
    

      it('doubleX("aaaax") → false)', () => {
        expect(test.doubleX("aaaax")).toBe(false);
      });
    

      it('doubleX("") → false)', () => {
        expect(test.doubleX("")).toBe(false);
      });
    

      it('doubleX("abc") → false)', () => {
        expect(test.doubleX("abc")).toBe(false);
      });
    

      it('doubleX("x") → false)', () => {
        expect(test.doubleX("x")).toBe(false);
      });
    

      it('doubleX("xx") → true)', () => {
        expect(test.doubleX("xx")).toBe(true);
      });
    

      it('doubleX("xax") → false)', () => {
        expect(test.doubleX("xax")).toBe(false);
      });
    

      it('doubleX("xaxx") → false)', () => {
        expect(test.doubleX("xaxx")).toBe(false);
      });
    
});
