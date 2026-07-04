class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        for(let i=0;i<strs.length;i++){
            let key=strs[i].split("").sort().join("");
            console.log(key,"for ",strs[i]);
            map.set(key, [...(map.get(key)||[]),strs[i]])
        }
        const result = [];
        for(const [k, v] of map){
            result.push(v);
        }
        return result;
    }
}
