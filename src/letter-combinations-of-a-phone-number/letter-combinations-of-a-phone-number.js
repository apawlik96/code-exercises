function letterCombinationsOfAPhoneNumber (digits) {
    const digitToLetters = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    }

    const letterGroups = [];

    for (let i=0; i<digits.length; i++) {
        letterGroups.push(digitToLetters[digits[i]]);
    }

    if (letterGroups.length === 0) return letterGroups;
    if (letterGroups.length === 1) return letterGroups[0];

    const combinations = [];

    function buildCombination(path, index) {
        if (index === letterGroups.length) {
            combinations.push(path);
            return;
        }

        for (let i = 0; i < letterGroups[index].length; i++) {
            buildCombination(path + letterGroups[index][i], index + 1);
        }
    }

    buildCombination("", 0);
    return combinations;
}

console.log(letterCombinationsOfAPhoneNumber([2,3]))
console.log(letterCombinationsOfAPhoneNumber([2]))
console.log(letterCombinationsOfAPhoneNumber([]))