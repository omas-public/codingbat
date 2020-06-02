const test = require('../src/front3.js');
describe('front3', () => {

      it('front3("Java") → "JavJavJav")', () => {
        expect(test.front3("Java")).toBe("JavJavJav");
      });
    

      it('front3("Chocolate") → "ChoChoCho")', () => {
        expect(test.front3("Chocolate")).toBe("ChoChoCho");
      });
    

      it('front3("abc") → "abcabcabc")', () => {
        expect(test.front3("abc")).toBe("abcabcabc");
      });
    

      it('front3("abcXYZ") → "abcabcabc")', () => {
        expect(test.front3("abcXYZ")).toBe("abcabcabc");
      });
    

      it('front3("ab") → "ababab")', () => {
        expect(test.front3("ab")).toBe("ababab");
      });
    

      it('front3("a") → "aaa")', () => {
        expect(test.front3("a")).toBe("aaa");
      });
    

      it('front3("") → "")', () => {
        expect(test.front3("")).toBe("");
      });
    
});
