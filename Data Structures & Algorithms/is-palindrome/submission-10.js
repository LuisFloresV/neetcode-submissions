class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        const c = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        let left = 0
        let rigth = c.length - 1
        while(left <= rigth){

            if(c[left] !== c[rigth]) return false
            left++
            rigth--
        }

        return true
    }
}
