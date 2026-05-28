class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const dict = {};

        for (let x = 0; x < nums.length; x++) {
            dict[nums[x]] = x;
        }

        for (let x = 0; x < nums.length; x++) {
            const diff = target - nums[x];
            
            const c = dict[diff];

            if (c && c !== x) {
                return [x, c];
            }
        }
    }
}
