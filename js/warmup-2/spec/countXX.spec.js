const test = require('../src/countXX.js');
describe('countXX', () => {

      it('countXX("abcxx") → 1)', () => {
        expect(test.countXX("abcxx")).toBe(1);
      });
    

      it('countXX("xxx") → 2)', () => {
        expect(test.countXX("xxx")).toBe(2);
      });
    

      it('countXX("xxxx") → 3)', () => {
        expect(test.countXX("xxxx")).toBe(3);
      });
    

      it('countXX("abc") → 0)', () => {
        expect(test.countXX("abc")).toBe(0);
      });
    

      it('countXX("Hello there") → 0)', () => {
        expect(test.countXX("Hello there")).toBe(0);
      });
    

      it('countXX("Hexxo thxxe") → 2)', () => {
        expect(test.countXX("Hexxo thxxe")).toBe(2);
      });
    

      it('countXX("") → 0)', () => {
        expect(test.countXX("")).toBe(0);
      });
    

      it('countXX("Kittens") → 0)', () => {
        expect(test.countXX("Kittens")).toBe(0);
      });
    

      it('countXX("Kittensxxx") → 2)', () => {
        expect(test.countXX("Kittensxxx")).toBe(2);
      });
    
});
