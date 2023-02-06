/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let start_row = 0;
    let end_row = matrix.length - 1;
    let pivot_row;
    
    while(start_row <= end_row) {
        pivot_row = Math.floor((start_row + end_row)/2);
        if ( matrix[pivot_row][0] === target ) {
            return true;
        } else if ( matrix[pivot_row][0] < target ) {
            start_row = pivot_row + 1;
        } else if ( matrix[pivot_row][0] > target ) {
            end_row = pivot_row - 1;
        }
    }
    
    if ( pivot_row > 0 && matrix[pivot_row][0] > target ) {pivot_row--};
    
    let start_col = 0;
    let end_col = matrix[0].length - 1;
    let pivot_col;
    
    while(start_col <= end_col) {
        pivot_col = Math.floor((start_col + end_col)/2);
        if ( matrix[pivot_row][pivot_col] === target ) {
            return true;
        } else if ( matrix[pivot_row][pivot_col] < target ) {
            start_col = pivot_col + 1;
        } else if ( matrix[pivot_row][pivot_col] > target ) {
            end_col = pivot_col - 1;
        }
    }
    
    return false;
};