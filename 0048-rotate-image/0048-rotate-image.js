/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // matrix = [
    //     [1,2,3],
    //     [4,5,6],
    //     [7,8,9]
    // ]
    let len = matrix.length;
    
    for ( var x = 0; x < Math.floor((len + 1)/2); x++ ) {
        for ( var y = 0; y < Math.floor(len/2); y++ ) {
            let tmp = matrix[x][y];
            matrix[x][y] = matrix[-y + len - 1][x];
            matrix[-y + len - 1][x] = matrix[-x + len - 1][-y + len - 1];
            matrix[-x + len - 1][-y + len - 1] = matrix[y][-x + len - 1];
            matrix[y][-x + len - 1] = tmp;
        }
    }
};