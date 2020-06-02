const test = require('../src/stringSplosion.js');
describe('stringSplosion', () => {

      it('stringSplosion("Code") → "CCoCodCode")', () => {
        expect(test.stringSplosion("Code")).toBe("CCoCodCode");
      });
    

      it('stringSplosion("abc") → "aababc")', () => {
        expect(test.stringSplosion("abc")).toBe("aababc");
      });
    

      it('stringSplosion("ab") → "aab")', () => {
        expect(test.stringSplosion("ab")).toBe("aab");
      });
    

      it('stringSplosion("x") → "x")', () => {
        expect(test.stringSplosion("x")).toBe("x");
      });
    

      it('stringSplosion("fade") → "ffafadfade")', () => {
        expect(test.stringSplosion("fade")).toBe("ffafadfade");
      });
    

      it('stringSplosion("There") → "TThTheTherThere")', () => {
        expect(test.stringSplosion("There")).toBe("TThTheTherThere");
      });
    

      it('stringSplosion("Kitten") → "KKiKitKittKitteKitten")', () => {
        expect(test.stringSplosion("Kitten")).toBe("KKiKitKittKitteKitten");
      });
    

      it('stringSplosion("Bye") → "BByBye")', () => {
        expect(test.stringSplosion("Bye")).toBe("BByBye");
      });
    

      it('stringSplosion("Good") → "GGoGooGood")', () => {
        expect(test.stringSplosion("Good")).toBe("GGoGooGood");
      });
    

      it('stringSplosion("Bad") → "BBaBad")', () => {
        expect(test.stringSplosion("Bad")).toBe("BBaBad");
      });
    
});
