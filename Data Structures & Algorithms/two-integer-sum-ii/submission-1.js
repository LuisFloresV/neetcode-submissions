class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let start = 0;
        let end = numbers.length - 1;

        while (start < end) {
            let guess = numbers[start] + numbers[end];

            console.log(guess)

            if (guess === target) {
                return [start + 1, end + 1];
            } else if (guess > target) {
                end--;
            } else {
                start++;
            }
        }
    }
}
