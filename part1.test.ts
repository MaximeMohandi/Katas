
import { translateRomanNumber } from '.'

describe('should read the 7 roman numerals', () => {
        const cases = [['I', 1], ['V', 5], ['X', 10], ['D', 50], ['C', 100], ['M', 1000]];

        test.each(cases)('Should translate %p to %p',
                (romanNumeralToTranslate, expectedDecimal) => {
                        expect(translateRomanNumber(romanNumeralToTranslate as string)).toBe(expectedDecimal);
                }
        );
})

test('should not be case sensitive', () => {
        expect(translateRomanNumber('i')).toBe(1);
})

describe('should sum chained numeral', () => {
        const cases = [['ii', 2], ['xxx', 30]]
        test.each(cases)('%p should translate to %p',
                (romanNumeralToTranslate, expectDecimal) => {
                        expect(translateRomanNumber(romanNumeralToTranslate as string)).toBe(expectDecimal)
                }
        );

})

test('Numeral can not be repeated more than 3 times', () => {
        expect(() => translateRomanNumber('xxxx')).toThrow('Numeral is repeated more than three time.');
})
