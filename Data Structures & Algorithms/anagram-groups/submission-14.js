class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};
        for (let i = 0; i < strs.length; i++) {
            let word = strs[i];
            let key = word.split("").sort().join("");
            if (map[key]) {
                map[key].push(word);
            } else {
                map[key] = [word];
            }
        }
        let result = [];
        for (const k in map) {
            result.push(map[k]);
        }
        return result;
    }
}
