const ROMAN_NUMERALS: { [key: string]: number } = { "I": 1, "V": 5, "X": 10, "D": 50, "C": 100, "M": 1000 };

export function translateRomanNumber(romanNumber: string): number {
        let standardizedRomanNumber = [...romanNumber.toUpperCase()];

        let checkMoreThan2RepetitionPattern = new RegExp(`(.)\\1{${3},}`);
        if (checkMoreThan2RepetitionPattern.test(romanNumber.toUpperCase())) {
                throw new Error('Numeral is repeated more than three time.');
        }

        let result = 0;
        standardizedRomanNumber.map((numeral: string) => {
                result += ROMAN_NUMERALS[numeral]
        });

        return result;
}
