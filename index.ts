const ROMAN_NUMERALS: { [key: string]: number } = { "I": 1, "V": 5, "X": 10, "D": 50, "C": 100, "M": 1000 };

export function translateRomanNumber(romanNumber: string): number {
        let standardizedRomanNumber = romanNumber.toUpperCase();

        if (hasNumeralRepeatedMoreThan3Time(romanNumber)) {
                throw new Error('Numeral is repeated more than three time.');
        }

        let result = 0;
        [...standardizedRomanNumber].map((numeral: string) => {
                result += ROMAN_NUMERALS[numeral]
        });

        return result;
}


function hasNumeralRepeatedMoreThan3Time(romanNumber: string): boolean {
        const checkIfMoreThan2ConsecutiveChar = `(.)\\1{${3},}`;

        return new RegExp(checkIfMoreThan2ConsecutiveChar).test(romanNumber);
}
