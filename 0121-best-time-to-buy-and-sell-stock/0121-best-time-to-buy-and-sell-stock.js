/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];
    
    for (let price of prices) {
        if (minPrice < price) {
            maxProfit = Math.max(maxProfit, price - minPrice);
        } else {
            minPrice = price;
        }
    }
    
    return maxProfit;
};