class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length <= 1) return false
        const stack = []
        const dict = { '[': ']', '{': '}', '(': ')' }

        for (let c of s) {
            if (c in dict) {
                stack.push(c)
            } else{
                const p = stack.pop()
                console.log(p)
                if (c !== dict[p]) return false
            }
        }

        if(stack.length > 0) return false

        return true
    }
}