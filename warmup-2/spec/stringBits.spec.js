const test = require('../src/stringBits.js');
describe('stringBits', () => {

      it('stringBits("Hello") → "Hlo")', () => {
        expect(test.stringBits("Hello")).toBe("Hlo");
      });
    

      it('stringBits("Hi") → "H")', () => {
        expect(test.stringBits("Hi")).toBe("H");
      });
    

      it('stringBits("Heeololeo") → "Hello")', () => {
        expect(test.stringBits("Heeololeo")).toBe("Hello");
      });
    

      it('stringBits("HiHiHi") → "HHH")', () => {
        expect(test.stringBits("HiHiHi")).toBe("HHH");
      });
    

      it('stringBits("") → "")', () => {
        expect(test.stringBits("")).toBe("");
      });
    

      it('stringBits("Greetings") → "Getns")', () => {
        expect(test.stringBits("Greetings")).toBe("Getns");
      });
    

      it('stringBits("Chocoate") → "Coot")', () => {
        expect(test.stringBits("Chocoate")).toBe("Coot");
      });
    

      it('stringBits("pi") → "p")', () => {
        expect(test.stringBits("pi")).toBe("p");
      });
    

      it('stringBits("Hello Kitten") → "HloKte")', () => {
        expect(test.stringBits("Hello Kitten")).toBe("HloKte");
      });
    

      it('stringBits("hxaxpxpxy") → "happy")', () => {
        expect(test.stringBits("hxaxpxpxy")).toBe("happy");
      });
    
});
