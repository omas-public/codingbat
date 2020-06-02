const test = require('../src/stringE.js');
describe('stringE', () => {

      it('stringE("Hello") → true)', () => {
        expect(test.stringE("Hello")).toBe(true);
      });
    

      it('stringE("Heelle") → true)', () => {
        expect(test.stringE("Heelle")).toBe(true);
      });
    

      it('stringE("Heelele") → false)', () => {
        expect(test.stringE("Heelele")).toBe(false);
      });
    

      it('stringE("Hll") → false)', () => {
        expect(test.stringE("Hll")).toBe(false);
      });
    

      it('stringE("e") → true)', () => {
        expect(test.stringE("e")).toBe(true);
      });
    

      it('stringE("") → false)', () => {
        expect(test.stringE("")).toBe(false);
      });
    
});
