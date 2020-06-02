const test = require('../src/stringYak.js');
describe('stringYak', () => {

      it('stringYak("yakpak") → "pak")', () => {
        expect(test.stringYak("yakpak")).toBe("pak");
      });
    

      it('stringYak("pakyak") → "pak")', () => {
        expect(test.stringYak("pakyak")).toBe("pak");
      });
    

      it('stringYak("yak123ya") → "123ya")', () => {
        expect(test.stringYak("yak123ya")).toBe("123ya");
      });
    

      it('stringYak("yak") → "")', () => {
        expect(test.stringYak("yak")).toBe("");
      });
    

      it('stringYak("yakxxxyak") → "xxx")', () => {
        expect(test.stringYak("yakxxxyak")).toBe("xxx");
      });
    

      it('stringYak("HiyakHi") → "HiHi")', () => {
        expect(test.stringYak("HiyakHi")).toBe("HiHi");
      });
    

      it('stringYak("xxxyakyyyakzzz") → "xxxyyzzz")', () => {
        expect(test.stringYak("xxxyakyyyakzzz")).toBe("xxxyyzzz");
      });
    
});
