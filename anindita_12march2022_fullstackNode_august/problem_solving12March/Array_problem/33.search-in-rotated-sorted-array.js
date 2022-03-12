/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) =>{

    if(nums.includes(target)){
        return nums.indexOf(target)
    }else{
        return -1
    }
    
};
// @lc code=end

