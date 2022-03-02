/*
 * @lc app=leetcode id=1920 lang=javascript
 *
 * [1920] Build Array from Permutation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const buildArray = (nums) =>{

    let result = [];

    for(let i = 0; i < nums.length ; i++){
        result.push(nums[nums[i]])
    }

    return result
    
};
// @lc code=end

