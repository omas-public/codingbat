const test = require('../src/missingChar.js');
describe('missingChar', () => {

      it('missingChar("kitten", 1) → "ktten")', () => {
        expect(test.missingChar("kitten", 1)).toBe("ktten");
      });
    

      it('missingChar("kitten", 0) → "itten")', () => {
        expect(test.missingChar("kitten", 0)).toBe("itten");
      });
    

      it('missingChar("kitten", 4) → "kittn")', () => {
        expect(test.missingChar("kitten", 4)).toBe("kittn");
      });
    

      it('missingChar("Hi", 0) → "i")', () => {
        expect(test.missingChar("Hi", 0)).toBe("i");
      });
    

      it('missingChar("Hi", 1) → "H")', () => {
        expect(test.missingChar("Hi", 1)).toBe("H");
      });
    

      it('missingChar("code", 0) → "ode")', () => {
        expect(test.missingChar("code", 0)).toBe("ode");
      });
    

      it('missingChar("code", 1) → "cde")', () => {
        expect(test.missingChar("code", 1)).toBe("cde");
      });
    

      it('missingChar("code", 2) → "coe")', () => {
        expect(test.missingChar("code", 2)).toBe("coe");
      });
    

      it('missingChar("code", 3) → "cod")', () => {
        expect(test.missingChar("code", 3)).toBe("cod");
      });
    

      it('missingChar("chocolate", 8) → "chocolat")', () => {
        expect(test.missingChar("chocolate", 8)).toBe("chocolat");
      });
    
});
