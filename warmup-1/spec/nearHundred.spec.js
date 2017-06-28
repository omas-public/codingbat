const test = require('../src/nearHundred.js');
describe('nearHundred', () => {

      it('nearHundred(93) → true)', () => {
        expect(test.nearHundred(93)).toBe(true);
      });
    

      it('nearHundred(90) → true)', () => {
        expect(test.nearHundred(90)).toBe(true);
      });
    

      it('nearHundred(89) → false)', () => {
        expect(test.nearHundred(89)).toBe(false);
      });
    

      it('nearHundred(110) → true)', () => {
        expect(test.nearHundred(110)).toBe(true);
      });
    

      it('nearHundred(111) → false)', () => {
        expect(test.nearHundred(111)).toBe(false);
      });
    

      it('nearHundred(121) → false)', () => {
        expect(test.nearHundred(121)).toBe(false);
      });
    

      it('nearHundred(-101) → false)', () => {
        expect(test.nearHundred(-101)).toBe(false);
      });
    

      it('nearHundred(-209) → false)', () => {
        expect(test.nearHundred(-209)).toBe(false);
      });
    

      it('nearHundred(190) → true)', () => {
        expect(test.nearHundred(190)).toBe(true);
      });
    

      it('nearHundred(209) → true)', () => {
        expect(test.nearHundred(209)).toBe(true);
      });
    

      it('nearHundred(0) → false)', () => {
        expect(test.nearHundred(0)).toBe(false);
      });
    

      it('nearHundred(5) → false)', () => {
        expect(test.nearHundred(5)).toBe(false);
      });
    

      it('nearHundred(-50) → false)', () => {
        expect(test.nearHundred(-50)).toBe(false);
      });
    

      it('nearHundred(191) → true)', () => {
        expect(test.nearHundred(191)).toBe(true);
      });
    

      it('nearHundred(189) → false)', () => {
        expect(test.nearHundred(189)).toBe(false);
      });
    

      it('nearHundred(200) → true)', () => {
        expect(test.nearHundred(200)).toBe(true);
      });
    

      it('nearHundred(210) → true)', () => {
        expect(test.nearHundred(210)).toBe(true);
      });
    

      it('nearHundred(211) → false)', () => {
        expect(test.nearHundred(211)).toBe(false);
      });
    

      it('nearHundred(290) → false)', () => {
        expect(test.nearHundred(290)).toBe(false);
      });
    
});
