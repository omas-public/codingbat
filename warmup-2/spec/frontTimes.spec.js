const test = require('../src/frontTimes.js');
describe('frontTimes', () => {

      it('frontTimes("Chocolate", 2) → "ChoCho")', () => {
        expect(test.frontTimes("Chocolate", 2)).toBe("ChoCho");
      });
    

      it('frontTimes("Chocolate", 3) → "ChoChoCho")', () => {
        expect(test.frontTimes("Chocolate", 3)).toBe("ChoChoCho");
      });
    

      it('frontTimes("Abc", 3) → "AbcAbcAbc")', () => {
        expect(test.frontTimes("Abc", 3)).toBe("AbcAbcAbc");
      });
    

      it('frontTimes("Ab", 4) → "AbAbAbAb")', () => {
        expect(test.frontTimes("Ab", 4)).toBe("AbAbAbAb");
      });
    

      it('frontTimes("A", 4) → "AAAA")', () => {
        expect(test.frontTimes("A", 4)).toBe("AAAA");
      });
    

      it('frontTimes("", 4) → "")', () => {
        expect(test.frontTimes("", 4)).toBe("");
      });
    

      it('frontTimes("Abc", 0) → "")', () => {
        expect(test.frontTimes("Abc", 0)).toBe("");
      });
    
});
