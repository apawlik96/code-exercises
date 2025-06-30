function validSudoku(board) {
    const boardWithoutDots = [];

    for (let i = 0; i < board.length; i++) {
        const filteredRow = board[i].filter(val => val !== ".");
        boardWithoutDots.push(filteredRow);
    }

    for (let j = 0; j < board[0].length; j++) {
        const arrayColumn = [];
        for (let i = 0; i < board.length; i++) {
            if (board[i][j] !== ".") {
                arrayColumn.push(board[i][j]);
            }
        }
        boardWithoutDots.push(arrayColumn);
    }

    for (let k = 0; k < 9; k++) {
        const arraySquare = [];

        const startRow = Math.floor(k / 3) * 3;
        const startCol = (k % 3) * 3;

        for (let i = 0; i < 9; i++) {
            const row = startRow + Math.floor(i / 3);
            const col = startCol + (i % 3);
            const value = board[row][col];
            if (value !== ".") {
                arraySquare.push(value);
            }
        }

        boardWithoutDots.push(arraySquare);
    }

    for (let i = 0; i < boardWithoutDots.length; i++) {
        if (boardWithoutDots[i].length !== new Set(boardWithoutDots[i]).size) {
            return false;
        }
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