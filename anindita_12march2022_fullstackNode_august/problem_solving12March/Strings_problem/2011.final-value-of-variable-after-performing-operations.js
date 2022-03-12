/*
 * @lc app=leetcode id=2011 lang=javascript
 *
 * [2011] Final Value of Variable After Performing Operations
 */

// @lc code=start
/**
 * @param {string[]} operations
 * @return {number}
 */
const finalValueAfterOperations = (operations) => {
    let  result = 0;

    operations.forEach((operation) => operation === "X++" || operation === "++X" ? result++ : result--)

    return result
    
};
// @lc code=end

