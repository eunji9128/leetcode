/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let bottom = matrix.length - 1;
    let left = 0;
    
    while(left < matrix[0].length && bottom >= 0) {
        let pivot = matrix[bottom][left];
        if (pivot === target) {
            return true;
        } else if (pivot > target) {
            bottom -= 1;
        } else {
            left += 1;
        }
    }
    
    return false;
};