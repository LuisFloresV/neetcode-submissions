class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let low = 0
        let high = nums.length - 1

        while (low <= high) {

            const mid = Math.floor((high + low) / 2)
            console.log(mid)
            const guess = nums[mid]
            if (guess === target) {
                return mid
            } else if (guess < target) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        }

        return -1



    }
}
