const test = require('../src/front22.js');
describe('front22', () => {

      it('front22("kitten") → "kikittenki")', () => {
        expect(test.front22("kitten")).toBe("kikittenki");
      });
    

      it('front22("Ha") → "HaHaHa")', () => {
        expect(test.front22("Ha")).toBe("HaHaHa");
      });
    

      it('front22("abc") → "ababcab")', () => {
        expect(test.front22("abc")).toBe("ababcab");
      });
    

      it('front22("ab") → "ababab")', () => {
        expect(test.front22("ab")).toBe("ababab");
      });
    

      it('front22("a") → "aaa")', () => {
        expect(test.front22("a")).toBe("aaa");
      });
    

      it('front22("") → "")', () => {
        expect(test.front22("")).toBe("");
      });
    

      it('front22("Logic") → "LoLogicLo")', () => {
        expect(test.front22("Logic")).toBe("LoLogicLo");
      });
    
});
