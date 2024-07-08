const ROMAN_NUMERALS: { [key: string]: number } = { "I": 1, "V": 5, "X": 10, "D": 50, "C": 100, "M": 1000 };

export function translateRomanNumber(romanNumber: string): number {

        return ROMAN_NUMERALS[romanNumber];
}
