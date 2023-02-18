/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = [];
    let answer = new Array(temperatures.length).fill(0);
    let len = temperatures.length;
    
    for (let i = len - 1; i >= 0; i--){
        while(stack.length && temperatures[i] >= temperatures[stack[stack.length - 1]]){
            stack.pop();
        }
        answer[i] = stack[stack.length - 1] - i || 0;
        stack.push(i);
    }
    
    return answer;
};