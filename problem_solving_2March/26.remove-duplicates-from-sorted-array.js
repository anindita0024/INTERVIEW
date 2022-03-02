/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 const removeDuplicates = (nums) =>{
    let start = 0;
    let i = 0;
    const size = nums.length -1;
    while(i != size){
        if(nums[start + 1] - nums[start] == 0){
            nums.splice(start, 1)
        }else{
            start++
        }
        i++
    }

    
};
// @lc code=end

