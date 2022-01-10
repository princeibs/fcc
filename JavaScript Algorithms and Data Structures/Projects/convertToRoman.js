// Convert to Roman

/*
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
 */ 

function convertToRoman(num) {
    let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let converted = '';
    for (let i = 0; i < decimal.length; i++) {
        while (decimal[i] <= num) {
            converted += roman[i];
            num -= decimal[i];
        }
    }
    return converted;
}

convertToRoman(36);