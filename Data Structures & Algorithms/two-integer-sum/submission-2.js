class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()

        for (let x = 0; x < nums.length; x++) {
            let minus = target - nums[x]

            if (map.has(minus)) {
                return [map.get(minus), x]
            } else {
                map.set(nums[x], x)
            }

        }

    }

}
