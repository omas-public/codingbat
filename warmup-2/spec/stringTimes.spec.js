const test = require('../src/stringTimes.js');
describe('stringTimes', () => {

      it('stringTimes("Hi", 2) → "HiHi")', () => {
        expect(test.stringTimes("Hi", 2)).toBe("HiHi");
      });
    

      it('stringTimes("Hi", 3) → "HiHiHi")', () => {
        expect(test.stringTimes("Hi", 3)).toBe("HiHiHi");
      });
    

      it('stringTimes("Hi", 1) → "Hi")', () => {
        expect(test.stringTimes("Hi", 1)).toBe("Hi");
      });
    

      it('stringTimes("Hi", 0) → "")', () => {
        expect(test.stringTimes("Hi", 0)).toBe("");
      });
    

      it('stringTimes("Hi", 5) → "HiHiHiHiHi")', () => {
        expect(test.stringTimes("Hi", 5)).toBe("HiHiHiHiHi");
      });
    

      it('stringTimes("Oh Boy!", 2) → "Oh Boy!Oh Boy!")', () => {
        expect(test.stringTimes("Oh Boy!", 2)).toBe("Oh Boy!Oh Boy!");
      });
    

      it('stringTimes("x", 4) → "xxxx")', () => {
        expect(test.stringTimes("x", 4)).toBe("xxxx");
      });
    

      it('stringTimes("", 4) → "")', () => {
        expect(test.stringTimes("", 4)).toBe("");
      });
    

      it('stringTimes("code", 2) → "codecode")', () => {
        expect(test.stringTimes("code", 2)).toBe("codecode");
      });
    

      it('stringTimes("code", 3) → "codecodecode")', () => {
        expect(test.stringTimes("code", 3)).toBe("codecodecode");
      });
    
});
