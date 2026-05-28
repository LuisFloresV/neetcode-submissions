class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let left = 0
        let rigth = 1
        let maxProfit = 0

        while (rigth < prices.length){
            if(prices[left] < prices[rigth]){
                let profit = prices[rigth] - prices[left]
                maxProfit = Math.max(profit, maxProfit)
            } else {
                left = rigth
            }
            rigth++
        } 

        return maxProfit       
    }
}
