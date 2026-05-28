class Solution {
    twoSum(nums: number[], target: number): number[] {
        const dict: Record<number, number> = {};

        for (let x = 0; x < nums.length; x++) {
            dict[nums[x]] = x;
        }

        for (let x = 0; x < nums.length; x++) {
            const diff = target - nums[x];
            const c = dict[diff];

            if (c !== undefined && c !== x) {
                return [x, c];
            }
        }

        return [];
    }
}