const test = require('../src/delDel.js');
describe('delDel', () => {

      it('delDel("adelbc") → "abc")', () => {
        expect(test.delDel("adelbc")).toBe("abc");
      });
    

      it('delDel("adelHello") → "aHello")', () => {
        expect(test.delDel("adelHello")).toBe("aHello");
      });
    

      it('delDel("adedbc") → "adedbc")', () => {
        expect(test.delDel("adedbc")).toBe("adedbc");
      });
    

      it('delDel("abcdel") → "abcdel")', () => {
        expect(test.delDel("abcdel")).toBe("abcdel");
      });
    

      it('delDel("add") → "add")', () => {
        expect(test.delDel("add")).toBe("add");
      });
    

      it('delDel("ad") → "ad")', () => {
        expect(test.delDel("ad")).toBe("ad");
      });
    

      it('delDel("a") → "a")', () => {
        expect(test.delDel("a")).toBe("a");
      });
    

      it('delDel("") → "")', () => {
        expect(test.delDel("")).toBe("");
      });
    

      it('delDel("del") → "del")', () => {
        expect(test.delDel("del")).toBe("del");
      });
    

      it('delDel("adel") → "a")', () => {
        expect(test.delDel("adel")).toBe("a");
      });
    

      it('delDel("aadelbb") → "aadelbb")', () => {
        expect(test.delDel("aadelbb")).toBe("aadelbb");
      });
    
});
