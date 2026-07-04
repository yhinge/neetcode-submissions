class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let inverseMapping = {};
        for (let i = 0; i < nums.length; i++) {
            inverseMapping[nums[i]] = i;
        }
        for (let i = 0; i < nums.length; i++) {
            const lookingFor =  target - nums[i];
            if (
                (inverseMapping[lookingFor]??false!==false) &&
                inverseMapping[lookingFor] !== i
            ) {
                return i < inverseMapping[lookingFor]
                    ? [i, inverseMapping[lookingFor]]
                    : [inverseMapping[lookingFor], i];
            }
        }
    }
}
