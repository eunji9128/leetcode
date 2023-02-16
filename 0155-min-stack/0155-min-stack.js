
var MinStack = function() {
    this.element = [];
    this.copy = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.element.push(val);
    
    let currentMin = this.copy[this.copy.length - 1];
    
    if (this.copy.length === 0){
        this.copy.push(val);
    } else if (currentMin >= val){
        this.copy.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let lastPop = this.element.pop();
    if (lastPop === this.copy[this.copy.length - 1]) {
        this.copy.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.element[this.element.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.copy[this.copy.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */