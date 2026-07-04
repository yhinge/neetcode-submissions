class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};
        for (let i = 0; i < strs.length; i++) {
            let word = strs[i]
            let key = word.split("").sort().join("");
            map[key] = [...(map[key] || []), word];
        }
        const result = [];
        for (const k in map) {
            result.push(map[k]);
        }
        return result;
    }
}
