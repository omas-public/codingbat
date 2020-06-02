const test = require('../src/frontBack.js');
describe('frontBack', () => {

      it('frontBack("code") → "eodc")', () => {
        expect(test.frontBack("code")).toBe("eodc");
      });
    

      it('frontBack("a") → "a")', () => {
        expect(test.frontBack("a")).toBe("a");
      });
    

      it('frontBack("ab") → "ba")', () => {
        expect(test.frontBack("ab")).toBe("ba");
      });
    

      it('frontBack("abc") → "cba")', () => {
        expect(test.frontBack("abc")).toBe("cba");
      });
    

      it('frontBack("") → "")', () => {
        expect(test.frontBack("")).toBe("");
      });
    

      it('frontBack("Chocolate") → "ehocolatC")', () => {
        expect(test.frontBack("Chocolate")).toBe("ehocolatC");
      });
    

      it('frontBack("aavJ") → "Java")', () => {
        expect(test.frontBack("aavJ")).toBe("Java");
      });
    

      it('frontBack("hello") → "oellh")', () => {
        expect(test.frontBack("hello")).toBe("oellh");
      });
    
});
