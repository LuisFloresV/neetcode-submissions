class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let lowest = Infinity;
        let profit = 0;

        for (let price of prices) {
            lowest = Math.min(lowest, price);
            profit = Math.max(profit, price - lowest);
        }

        return profit;
    }
}