class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        if (s.length !== t.length) return false
        let dict = {};

        for (let c of s) {
            if (dict[c]) {
                dict[c]++;
            } else {
                dict[c] = 1;
            }
        }

        for (let c of t) {
            if (!dict[c]) {
                return false;
            }
            dict[c]--;

            if (dict[c] < 0) {
                return false;
            }
        }

        return true;
    }
}
