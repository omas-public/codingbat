const test = require('../src/everyNth.js');
describe('everyNth', () => {

      it('everyNth("Miracle", 2) → "Mrce")', () => {
        expect(test.everyNth("Miracle", 2)).toBe("Mrce");
      });
    

      it('everyNth("abcdefg", 2) → "aceg")', () => {
        expect(test.everyNth("abcdefg", 2)).toBe("aceg");
      });
    

      it('everyNth("abcdefg", 3) → "adg")', () => {
        expect(test.everyNth("abcdefg", 3)).toBe("adg");
      });
    

      it('everyNth("Chocolate", 3) → "Cca")', () => {
        expect(test.everyNth("Chocolate", 3)).toBe("Cca");
      });
    

      it('everyNth("Chocolates", 3) → "Ccas")', () => {
        expect(test.everyNth("Chocolates", 3)).toBe("Ccas");
      });
    

      it('everyNth("Chocolates", 4) → "Coe")', () => {
        expect(test.everyNth("Chocolates", 4)).toBe("Coe");
      });
    

      it('everyNth("Chocolates", 100) → "C")', () => {
        expect(test.everyNth("Chocolates", 100)).toBe("C");
      });
    
});
