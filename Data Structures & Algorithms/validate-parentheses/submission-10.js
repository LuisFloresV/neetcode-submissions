class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        if (s.length <= 1) return false

        const stack = []
        const dict = { '(': ')', '{': '}', '[': ']' }

        for (let c of s) {
            if (dict[c]) {
                stack.push(c)
            } else {
                const top = stack.pop()
                if (!top || dict[top] !== c) return false
            }
        }

        return stack.length === 0
    }
}