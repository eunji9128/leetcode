/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = [];
    
    for (let char of s){
        if (stack[stack.length - 1] === char && stack.length !== 0){
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    
    return stack.join("")
};