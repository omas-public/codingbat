const test = require('../src/startHi.js');
describe('startHi', () => {

      it('startHi("hi there") → true)', () => {
        expect(test.startHi("hi there")).toBe(true);
      });
    

      it('startHi("hi") → true)', () => {
        expect(test.startHi("hi")).toBe(true);
      });
    

      it('startHi("hello hi") → false)', () => {
        expect(test.startHi("hello hi")).toBe(false);
      });
    

      it('startHi("he") → false)', () => {
        expect(test.startHi("he")).toBe(false);
      });
    

      it('startHi("h") → false)', () => {
        expect(test.startHi("h")).toBe(false);
      });
    

      it('startHi("") → false)', () => {
        expect(test.startHi("")).toBe(false);
      });
    

      it('startHi("ho hi") → false)', () => {
        expect(test.startHi("ho hi")).toBe(false);
      });
    

      it('startHi("hi ho") → true)', () => {
        expect(test.startHi("hi ho")).toBe(true);
      });
    
});
