/*Test Cases
 *
 * should convert all 7 letteres to correct number (I:1, V:5, X:10, D:50, C:100, M:1000)
 * 
 */
import {translateRomanNumber} from '.'

test('should convert I into 1',() => {
	expect(translateRomanNumber('I')).toBe(1);
})
