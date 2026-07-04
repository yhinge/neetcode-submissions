class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};
        for(let i=0;i<strs.length;i++){
            let key=strs[i].split("").sort().join("");
            console.log(key,"for ",strs[i]);
            map[key]=[...(map[key]||[]),strs[i]];
        }
        const result = [];
        for(const k in map){
            result.push(map[k]);
        }
        return result;
    }
}
