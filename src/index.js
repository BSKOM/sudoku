module.exports = function solveSudoku(matrix) {
  const maxn = 9
  for (let i = 0; i < maxn; i++) {
    for (let j = 0; j < maxn; j++) {
      if (matrix[i][j] == 0) {
        for (let n = 1; n <= maxn; n++) {
          if (isValid(matrix, i, j, n)) {
            matrix[i][j] = n
            if (solveSudoku(matrix)) {
              return matrix
            } else {
              matrix[i][j] = 0
            }
          }
        }
        return false
      }
    }
  }
  return matrix
}


function isValid(matrix, row, col, kand) {
  for (let i = 0; i < 9; i++) {
    const sqr = 3 * Math.floor(row / 3) + Math.floor(i / 3)
    const sqc = 3 * Math.floor(col / 3) + i % 3
    if (matrix[row][i] == kand || matrix[i][col] == kand || matrix[sqr][sqc] == kand) {
      return false
    }
  }
  return true
}
