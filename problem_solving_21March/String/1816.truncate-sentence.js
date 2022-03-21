/*
 * @lc app=leetcode id=1816 lang=javascript
 *
 * [1816] Truncate Sentence
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const truncateSentence = (s, k) =>{

    return s.split(' ').slice(0 , k).join(' ')
    
};
// @lc code=end

