/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    let stack = [];
    let countStack = [];
    
    for (let char of s){
        if (stack.length === 0 || stack[stack.length - 1] !== char){
            stack.push(char);
            countStack.push(1);
        } else {
            if (countStack[countStack.length - 1] === k - 1){
                for (let i = 0; i < k - 1; i++){
                    stack.pop();
                    countStack.pop();
                }
            } else {
                stack.push(char);
                countStack.push(countStack[countStack.length - 1] += 1);
            }
        }
    }
    
    return stack.join("")
};