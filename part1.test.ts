/*Test Cases
 *
 * should convert all 7 letteres to correct number (I:1, V:5, X:10, D:50, C:100, M:1000)
 * 
 */
import { translateRomanNumber } from '.'

describe('should read the 7 roman numerals', () => {
        const cases = [['I', 1], ['V', 5], ['X', 10], ['D', 50], ['C', 100], ['M', 1000]];

        test.each(cases)('Should translate %p to %p',
                (romanNumeralToTranslate, expectedDecimal) => {
                        expect(translateRomanNumber(romanNumeralToTranslate as string)).toBe(expectedDecimal);
                }
        );
})
