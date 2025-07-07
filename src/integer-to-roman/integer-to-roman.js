function integerToRoman (num) {
    const romanMap = [
        ["", "M", "MM", "MMM"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
    ];

    const array = num.toString().split("").map(Number);

    const zerosToAdd = 4 - array.length;
    const padding = Array(zerosToAdd).fill(0);

    const concatArray = [...padding, ...array];

    const result = concatArray.map((digit, index) => romanMap[index][digit]).join('');

    return result;
}


console.log(integerToRoman(1994))
console.log(integerToRoman(3749))
console.log(integerToRoman(58))