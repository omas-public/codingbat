const test = require('../src/startOz.js');
describe('startOz', () => {

      it('startOz("ozymandias") → "oz")', () => {
        expect(test.startOz("ozymandias")).toBe("oz");
      });
    

      it('startOz("bzoo") → "z")', () => {
        expect(test.startOz("bzoo")).toBe("z");
      });
    

      it('startOz("oxx") → "o")', () => {
        expect(test.startOz("oxx")).toBe("o");
      });
    

      it('startOz("oz") → "oz")', () => {
        expect(test.startOz("oz")).toBe("oz");
      });
    

      it('startOz("ounce") → "o")', () => {
        expect(test.startOz("ounce")).toBe("o");
      });
    

      it('startOz("o") → "o")', () => {
        expect(test.startOz("o")).toBe("o");
      });
    

      it('startOz("abc") → "")', () => {
        expect(test.startOz("abc")).toBe("");
      });
    

      it('startOz("") → "")', () => {
        expect(test.startOz("")).toBe("");
      });
    

      it('startOz("zoo") → "")', () => {
        expect(test.startOz("zoo")).toBe("");
      });
    

      it('startOz("aztec") → "z")', () => {
        expect(test.startOz("aztec")).toBe("z");
      });
    

      it('startOz("zzzz") → "z")', () => {
        expect(test.startOz("zzzz")).toBe("z");
      });
    

      it('startOz("oznic") → "oz")', () => {
        expect(test.startOz("oznic")).toBe("oz");
      });
    
});
