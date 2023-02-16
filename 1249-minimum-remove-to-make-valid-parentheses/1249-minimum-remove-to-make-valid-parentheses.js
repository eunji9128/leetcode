/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let result = "";
    let stack = [];
    s = s.split("");
    
    for (let i = 0; i < s.length; i++){
        if (s[i] === "("){
            stack.push(i);
        } else if (s[i] === ")"){
            if (stack.length === 0) {
                s[i] = "";
            }
            stack.pop();
        }
    }
    
    if(stack.length !== 0){
        for(let idx of stack){
            s[idx] = "";
        }
    }
    
    return s.join("");
    
};
