class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = Array.from({ length: 9 }, () => new Set());
        let cols = Array.from({ length: 9 }, () => new Set());
        let square = Array.from({ length: 9 }, () => new Set());

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === ".") {
                    continue;
                }
                let squareIndex = (Math.floor(i / 3) * 3) + Math.floor(j / 3);
                //console.log(i, j, squareIndex, square[squareIndex], rows[i], cols[j], board[i][j]);
                if (
                    rows[i].has(board[i][j]) ||
                    cols[j].has(board[i][j]) ||
                    square[squareIndex].has(board[i][j])
                ) {
                    //console.log(i, j, squareIndex);
                    return false;
                }
                rows[i].add(board[i][j]);
                cols[j].add(board[i][j]);
                square[squareIndex].add(board[i][j]);
            }
        }
        return true;
    }
}
