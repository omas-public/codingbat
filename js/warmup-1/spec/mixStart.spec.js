const test = require('../src/mixStart.js');
describe('mixStart', () => {

      it('mixStart("mix snacks") → true)', () => {
        expect(test.mixStart("mix snacks")).toBe(true);
      });
    

      it('mixStart("pix snacks") → true)', () => {
        expect(test.mixStart("pix snacks")).toBe(true);
      });
    

      it('mixStart("piz snacks") → false)', () => {
        expect(test.mixStart("piz snacks")).toBe(false);
      });
    

      it('mixStart("nix") → true)', () => {
        expect(test.mixStart("nix")).toBe(true);
      });
    

      it('mixStart("ni") → false)', () => {
        expect(test.mixStart("ni")).toBe(false);
      });
    

      it('mixStart("n") → false)', () => {
        expect(test.mixStart("n")).toBe(false);
      });
    

      it('mixStart("") → false)', () => {
        expect(test.mixStart("")).toBe(false);
      });
    
});
