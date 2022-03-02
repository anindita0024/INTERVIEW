/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target)  =>{
    
    if(target < nums[0])
      return 0
    if(target > nums[nums.length - 1])  
       return nums.length

   
   for ( let i in nums){
       if (nums[i] >= target)
         return i
   }
};
// @lc code=end

