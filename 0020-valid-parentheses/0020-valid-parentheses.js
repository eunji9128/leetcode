/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    
    for (char of s) {
        if (char === "[" || char === "{" || char === "(") {
            stack.push(char);
        } else {
            let lastChar = stack.pop();
            
            if ((char === "]" && lastChar !== "[") ||
               (char === "}" && lastChar !== "{") ||
               (char === ")" && lastChar !== "(")){
                    return false;
            };
        }
    }
    
    return stack.length === 0;
};