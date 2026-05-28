class Solution {
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const dict: Record<string, number> = {};

        for (const c of s) {
            dict[c] = (dict[c] || 0) + 1;
        }

        for (const c of t) {
            if (!dict[c]) return false;
            dict[c]--;
        }

        return true;
    }
}