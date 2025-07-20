function validSudoku(board) {
    const hasDuplicates = (array) => {
        return array.length !== new Set(array).size;
    };

    for (let row = 0; row < 9; row++) {
        const filteredRow = board[row].filter(val => val !== ".");
        if (hasDuplicates(filteredRow)) return false;
    }

    for (let col = 0; col < 9; col++) {
        const column = [];
        for (let row = 0; row < 9; row++) {
            const value = board[row][col];
            if (value !== ".") column.push(value);
        }
        if (hasDuplicates(column)) return false;
    }

    for (let box = 0; box < 9; box++) {
        const square = [];

        const startRow = Math.floor(box / 3) * 3;
        const startCol = (box % 3) * 3;

        for (let i = 0; i < 9; i++) {
            const row = startRow + Math.floor(i / 3);
            const col = startCol + (i % 3);
            const value = board[row][col];
            if (value !== ".") square.push(value);
        }

        if (hasDuplicates(square)) return false;
    }

    return true;
}

console.log(validSudoku(
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
))

console.log(validSudoku(
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
))