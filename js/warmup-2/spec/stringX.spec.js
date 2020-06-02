const test = require('../src/stringX.js');
describe('stringX', () => {

      it('stringX("xxHxix") → "xHix")', () => {
        expect(test.stringX("xxHxix")).toBe("xHix");
      });
    

      it('stringX("abxxxcd") → "abcd")', () => {
        expect(test.stringX("abxxxcd")).toBe("abcd");
      });
    

      it('stringX("xabxxxcdx") → "xabcdx")', () => {
        expect(test.stringX("xabxxxcdx")).toBe("xabcdx");
      });
    

      it('stringX("xKittenx") → "xKittenx")', () => {
        expect(test.stringX("xKittenx")).toBe("xKittenx");
      });
    

      it('stringX("Hello") → "Hello")', () => {
        expect(test.stringX("Hello")).toBe("Hello");
      });
    

      it('stringX("xx") → "xx")', () => {
        expect(test.stringX("xx")).toBe("xx");
      });
    

      it('stringX("x") → "x")', () => {
        expect(test.stringX("x")).toBe("x");
      });
    

      it('stringX("") → "")', () => {
        expect(test.stringX("")).toBe("");
      });
    
});
