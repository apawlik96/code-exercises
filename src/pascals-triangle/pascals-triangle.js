function pascalsTriangle(numb) {
    const triangle = [];

    for (let i = 0; i < numb; i++) {
        if (i === 0) {
            triangle.push([1]);
        } else if (i === 1) {
            triangle.push([1, 1]);
        } else {
            const previousRow = triangle[i - 1];
            triangle.push(getNextPascalRow(previousRow));
        }
    }

    return triangle;
}

function getNextPascalRow(previousRow) {
    const nextRow = [1];
    for (let i = 1; i < previousRow.length; i++) {
        const pairSum = previousRow[i - 1] + previousRow[i];
        nextRow.push(pairSum);
    }
    nextRow.push(1);
    return nextRow;
}

console.log(pascalsTriangle(6))
console.log(pascalsTriangle(5))
console.log(pascalsTriangle(1))