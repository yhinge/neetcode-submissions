class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let freqency= {};
        for(let num of nums){
            if(freqency[num]){
                return true;
            }
            freqency[num]=1;
        }
        return false;
    }
}
 