/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {

    const n = Math.sign(x) * parseInt(x.toString().split("").reverse().join(""))

    return n > 2**31 -1 || n < (-2)**31 ? 0 : n
    
};
// @lc code=end

