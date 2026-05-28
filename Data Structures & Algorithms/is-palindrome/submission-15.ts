class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

        console.log(cleaned)

        let start = 0;
        let end = cleaned.length - 1;

        while (start <= end) {
            console.log(cleaned[start], cleaned[end]);
            if (cleaned[start] !== cleaned[end]) return false;
            start++;
            end--;
        }
        return true;
    }
}
