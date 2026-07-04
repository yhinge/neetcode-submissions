class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        for (let i = 0; i < nums.length; i++) {
            const t = target - nums[i];
            if(map.has(t)){
                return [i, map.get(t)];
            }
            map.set(nums[i], i);
        }
    }
}
