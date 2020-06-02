const test = require('../src/stringMatch.js');
describe('stringMatch', () => {

      it('stringMatch("xxcaazz", "xxbaaz") → 3)', () => {
        expect(test.stringMatch("xxcaazz", "xxbaaz")).toBe(3);
      });
    

      it('stringMatch("abc", "abc") → 2)', () => {
        expect(test.stringMatch("abc", "abc")).toBe(2);
      });
    

      it('stringMatch("abc", "axc") → 0)', () => {
        expect(test.stringMatch("abc", "axc")).toBe(0);
      });
    

      it('stringMatch("hello", "he") → 1)', () => {
        expect(test.stringMatch("hello", "he")).toBe(1);
      });
    

      it('stringMatch("he", "hello") → 1)', () => {
        expect(test.stringMatch("he", "hello")).toBe(1);
      });
    

      it('stringMatch("h", "hello") → 0)', () => {
        expect(test.stringMatch("h", "hello")).toBe(0);
      });
    

      it('stringMatch("", "hello") → 0)', () => {
        expect(test.stringMatch("", "hello")).toBe(0);
      });
    

      it('stringMatch("aabbccdd", "abbbxxd") → 1)', () => {
        expect(test.stringMatch("aabbccdd", "abbbxxd")).toBe(1);
      });
    

      it('stringMatch("aaxxaaxx", "iaxxai") → 3)', () => {
        expect(test.stringMatch("aaxxaaxx", "iaxxai")).toBe(3);
      });
    

      it('stringMatch("iaxxai", "aaxxaaxx") → 3)', () => {
        expect(test.stringMatch("iaxxai", "aaxxaaxx")).toBe(3);
      });
    
});
