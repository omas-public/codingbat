const test = require('../src/endUp.js');
describe('endUp', () => {

      it('endUp("Hello") → "HeLLO")', () => {
        expect(test.endUp("Hello")).toBe("HeLLO");
      });
    

      it('endUp("hi there") → "hi thERE")', () => {
        expect(test.endUp("hi there")).toBe("hi thERE");
      });
    

      it('endUp("hi") → "HI")', () => {
        expect(test.endUp("hi")).toBe("HI");
      });
    

      it('endUp("woo hoo") → "woo HOO")', () => {
        expect(test.endUp("woo hoo")).toBe("woo HOO");
      });
    

      it('endUp("xyz12") → "xyZ12")', () => {
        expect(test.endUp("xyz12")).toBe("xyZ12");
      });
    

      it('endUp("x") → "X")', () => {
        expect(test.endUp("x")).toBe("X");
      });
    

      it('endUp("") → "")', () => {
        expect(test.endUp("")).toBe("");
      });
    
});
