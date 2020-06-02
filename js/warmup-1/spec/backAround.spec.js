const test = require('../src/backAround.js');
describe('backAround', () => {

      it('backAround("cat") → "tcatt")', () => {
        expect(test.backAround("cat")).toBe("tcatt");
      });
    

      it('backAround("Hello") → "oHelloo")', () => {
        expect(test.backAround("Hello")).toBe("oHelloo");
      });
    

      it('backAround("a") → "aaa")', () => {
        expect(test.backAround("a")).toBe("aaa");
      });
    

      it('backAround("abc") → "cabcc")', () => {
        expect(test.backAround("abc")).toBe("cabcc");
      });
    

      it('backAround("read") → "dreadd")', () => {
        expect(test.backAround("read")).toBe("dreadd");
      });
    

      it('backAround("boo") → "obooo")', () => {
        expect(test.backAround("boo")).toBe("obooo");
      });
    
});
