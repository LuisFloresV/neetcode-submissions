class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let left = 0
        let right = 1

        while (left < nums.length) {
            const sum = nums[left] + nums[right]
            if (sum === target) {
                return [left, right]
            }

            right++
            if(nums.length === right){
                left++
                right= left + 1
            }
        }
    }
}
