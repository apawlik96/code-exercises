function editDistance (word1, word2) {
    const maxLength = Math.max(word1.length, word2.length);
    const comparisonResult = [];

    for (let i = 0; i < maxLength; i++) {
        if (word1[i] === word2[i]) {
            comparisonResult.push(word1[i]);
        } else {
            comparisonResult.push("-");
        }
    }

    const lengthDifference = word1.length - word2.length;

    const mismatchCount = comparisonResult.filter(char => char === "-").length;

    const totalOperationsEstimate = mismatchCount + lengthDifference;

    if (word1.length === word2.length) {
        return totalOperationsEstimate;
    } else {
        return Math.floor(totalOperationsEstimate / 2);
    }
}

console.log(editDistance("horse", "ros"))
console.log(editDistance("intention", "execution"))