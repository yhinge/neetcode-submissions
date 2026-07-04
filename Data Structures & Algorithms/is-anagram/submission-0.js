class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let alphabetsFreqS = {};
        let alphabetsFreqT = {};

        if (s.length !== t.length) {
            return false;
        }
        for (let i=0;i<s.length;i++) {
            const indexFirst = s.charCodeAt(i) - "a".charCodeAt(0);
            const indexSecond = t.charCodeAt(i) - 'a'.charCodeAt(0);
            alphabetsFreqS[indexFirst] = (alphabetsFreqS[indexFirst] || 0) + 1;
            alphabetsFreqT[indexSecond] = (alphabetsFreqT[indexSecond] || 0) + 1;
        }
        for (const c in alphabetsFreqS) {
            if (alphabetsFreqS[c] !== alphabetsFreqT[c]) {
                return false;
            }
        }
        return true;
    }
}
