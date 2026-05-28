class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let dict = {};

        for (let num of nums) {
            if (dict[num]) {
                return true;
            } else {
                dict[num] = 1;
            }
        }
        return false;
    }
}
