class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        if(s.length <=1) return false
        let stack = []
        let opening = ['[', '{', '(']
        let dict = {'(': ')', '{': '}', '[': ']' }
        for (let c of s) {
            if (opening.includes(c)) {
                stack.push(c)
            } else {
                const s = stack.pop()
                if(dict[s] !== c) return false
            }
        }

        if(stack.length > 0) return false
        return true
    }
}
