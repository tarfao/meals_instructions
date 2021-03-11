const { isNumber } = require("../controllers/utils/isNumber")

beforeAll(() => {
    console.log("Início dos testes unitários")
})

afterAll(() => {
    console.log("Final dos testes unitários")
})

test("Verificando método isNumber", () => {
    let strNum = '1';
    let strNumDec = '12';
    let strBigNum = '1234';
    let strNumAlpha = '1a2b';
    let strAlphaNum = 'a1b2';
    let strAlha = 'asdf';

    expect(isNumber(strNum)).toBe(true);
    expect(isNumber(strNumDec)).toBe(true);
    expect(isNumber(strBigNum)).toBe(true);
    expect(isNumber(strNumAlpha)).toBe(false);
    expect(isNumber(strAlphaNum)).toBe(false);
    expect(isNumber(strAlha)).toBe(false);
})