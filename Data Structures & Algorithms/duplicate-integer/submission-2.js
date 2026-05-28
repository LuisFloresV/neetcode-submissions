class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const dict = {}

        for (let num of nums){
            if(dict[num]){
                dict[num]++
            } else {
                dict[num] = 1
            }
        }

        for(let key in dict){
            if(dict[key] > 1){
                return true
            }
        }

        return false
    }
}
