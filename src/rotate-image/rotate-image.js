function rotateImage(matrix) {
    const n = matrix.length;
    if( n === 1 ) return [[1]];
    const result = [];

    for (let col = 0; col < n; col++) {
        const newRow = [];
        for (let row = n - 1; row >= 0; row--) {
            newRow.push(matrix[row][col]);
        }
        result.push(newRow);
    }

    return result;
}

console.log(rotateImage([[1]]))
console.log(rotateImage([[1,2,3],[4,5,6],[7,8,9]]))
console.log(rotateImage([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]))
console.log(rotateImage([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]))