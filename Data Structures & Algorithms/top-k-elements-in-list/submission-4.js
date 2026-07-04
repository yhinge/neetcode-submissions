class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = {};
        for (let i = 0; i < nums.length; i++) {
            freqMap[nums[i]] = (freqMap[nums[i]] || 0) + 1;
        }

        return Object.entries(freqMap)
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map((entry) => Number(entry[0]));
    }
}
