/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 const removeElement = (nums, val) => {
    let back = 0;
    for ( let i =0 ; i <= nums.length -1; i++){
        if(nums[i] === val){
            back++
        }else{
            if(back){
                nums[i - back] = nums[i];
                nums[i] = val;
            }
        }
    }
    return nums.length - back
    
};
// @lc code=end

