class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = [];
        let suffix = [];

        prefix[0]=1;
        suffix[nums.length-1]=1;
        for(let i=1;i<nums.length;i++){
            prefix[i]=nums[i-1]*prefix[i-1];
            suffix[nums.length-i-1]=suffix[nums.length-i]*nums[nums.length-i];
        }
        
        let result=[];
        for(let i =0;i<nums.length; i++){
            result[i]=suffix[i]*prefix[i];
        }
        return result;
    }
}
