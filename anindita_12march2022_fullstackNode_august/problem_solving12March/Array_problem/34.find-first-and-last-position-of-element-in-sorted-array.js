/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {

    if(nums.length == 0){
        return [-1,-1]
    }
    if(nums.indexOf(target) == -1){
        return [-1,-1]
    }
    let arr =[]

    for(let i = 0; i < nums.length ; i++){

        if(nums[i] === target){
            arr.push(i)
        }
    }
    return arr.length == 1 ? [arr[0], arr[0]] : arr.length > 2 ? [arr[0], arr[0]] : arr
    
};
// @lc code=end

