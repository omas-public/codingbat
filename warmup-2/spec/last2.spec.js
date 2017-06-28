const test = require('../src/last2.js');
describe('last2', () => {

      it('last2("hixxhi") → 1)', () => {
        expect(test.last2("hixxhi")).toBe(1);
      });
    

      it('last2("xaxxaxaxx") → 1)', () => {
        expect(test.last2("xaxxaxaxx")).toBe(1);
      });
    

      it('last2("axxxaaxx") → 2)', () => {
        expect(test.last2("axxxaaxx")).toBe(2);
      });
    

      it('last2("xxaxxaxxaxx") → 3)', () => {
        expect(test.last2("xxaxxaxxaxx")).toBe(3);
      });
    

      it('last2("xaxaxaxx") → 0)', () => {
        expect(test.last2("xaxaxaxx")).toBe(0);
      });
    

      it('last2("xxxx") → 2)', () => {
        expect(test.last2("xxxx")).toBe(2);
      });
    

      it('last2("13121312") → 1)', () => {
        expect(test.last2("13121312")).toBe(1);
      });
    

      it('last2("11212") → 1)', () => {
        expect(test.last2("11212")).toBe(1);
      });
    

      it('last2("13121311") → 0)', () => {
        expect(test.last2("13121311")).toBe(0);
      });
    

      it('last2("1717171") → 2)', () => {
        expect(test.last2("1717171")).toBe(2);
      });
    

      it('last2("hi") → 0)', () => {
        expect(test.last2("hi")).toBe(0);
      });
    

      it('last2("h") → 0)', () => {
        expect(test.last2("h")).toBe(0);
      });
    

      it('last2("") → 0)', () => {
        expect(test.last2("")).toBe(0);
      });
    
});
