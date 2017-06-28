const test = require('../src/altPairs.js');
describe('altPairs', () => {

      it('altPairs("kitten") → "kien")', () => {
        expect(test.altPairs("kitten")).toBe("kien");
      });
    

      it('altPairs("Chocolate") → "Chole")', () => {
        expect(test.altPairs("Chocolate")).toBe("Chole");
      });
    

      it('altPairs("CodingHorror") → "Congrr")', () => {
        expect(test.altPairs("CodingHorror")).toBe("Congrr");
      });
    

      it('altPairs("yak") → "ya")', () => {
        expect(test.altPairs("yak")).toBe("ya");
      });
    

      it('altPairs("ya") → "ya")', () => {
        expect(test.altPairs("ya")).toBe("ya");
      });
    

      it('altPairs("y") → "y")', () => {
        expect(test.altPairs("y")).toBe("y");
      });
    

      it('altPairs("") → "")', () => {
        expect(test.altPairs("")).toBe("");
      });
    

      it('altPairs("ThisThatTheOther") → "ThThThth")', () => {
        expect(test.altPairs("ThisThatTheOther")).toBe("ThThThth");
      });
    
});
