class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        let left = 0
        let rigth = nums.length - 1

        while (left <= rigth) {

            let middle = Math.floor((left + rigth) / 2)

            const guess = nums[middle]

            if (guess === target) {
                return middle
            } else if (guess > target) {
                rigth = middle - 1
            } else {
                left = middle + 1
            }
        }

        return -1
    }
}
