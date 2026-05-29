class Solution {
    search(nums: number[], target: number): number {
        let start = 0;
        let end = nums.length - 1;

        while (start <= end) {
            let middle = Math.floor((end + start) / 2);

            let guess = nums[middle];

            if (guess === target) return middle;

            if (guess > target) {
                end = middle - 1;
            }

            if (guess < target) {
                start = middle + 1;
            }
        }

        return -1;
    }
}
