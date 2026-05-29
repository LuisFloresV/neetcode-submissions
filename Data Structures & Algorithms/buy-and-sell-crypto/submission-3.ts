class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let start = 0;
        let lowest = +Infinity;
        let profit = 0;
        for (let r = 0; r < prices.length; r++) {
            if (prices[r] < lowest) {
                lowest = prices[r] 
                start = r
            } else {
                profit = Math.max(profit, prices[r] - prices[start])
            }
        }

        return profit
    }
}
