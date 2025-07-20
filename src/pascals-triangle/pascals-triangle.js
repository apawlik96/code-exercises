function pascalsTriangle(numb) {
    const triangleValues = [];

    for (let i = 0; i < numb; i++) {
        if (i > 1) {
            const previousRowValues = triangleValues[i - 1];
            triangleValues.push(generateCurrentRowFromPreviousRow(previousRowValues));
        } else if (i === 1) {
            triangleValues.push([1, 1]);
        } else {
            triangleValues.push([1]);
        }
    }

    return triangleValues;
}

function generateCurrentRowFromPreviousRow(previousRowValues) {
    const currentRow = [1];
    for (let valueIndex = 1; valueIndex < previousRowValues.length; valueIndex++) {
        const sumOfAdjacentValues = previousRowValues[valueIndex - 1] + previousRowValues[valueIndex];
        currentRow.push(sumOfAdjacentValues);
    }
    currentRow.push(1);
    return currentRow;
}

console.log(pascalsTriangle(6))
console.log(pascalsTriangle(5))
console.log(pascalsTriangle(1))