
var RandomizedSet = function() {
    this.map = new Map();
    this.arr = new Array();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (!this.map.has(val)) {
        this.map.set(val, this.arr.length);
        this.arr.push(val);
        return true;
    }
    return false;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) { 
    if (this.map.has(val)){
        let idx = this.map.get(val);
        this._swap(idx, this.arr.length - 1);
        this.arr.pop();
        this.map.set(this.arr[idx], idx);
        this.map.delete(val);
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.arr[this._random(0, this.arr.length)];
};

RandomizedSet.prototype._swap = function(a, b) {
    let tmp = this.arr[a];
    this.arr[a] = this.arr[b];
    this.arr[b] = tmp;
}

RandomizedSet.prototype._random = function(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min)) + min;
}

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */