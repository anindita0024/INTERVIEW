/*
 * @lc app=leetcode id=2114 lang=javascript
 *
 * [2114] Maximum Number of Words Found in Sentences
 */

// @lc code=start
/**
 * @param {string[]} sentences
 * @return {number}
 */
const mostWordsFound = (sentences) => {

    let result = 0;

    sentences.forEach(n =>{
        result = n.split(" ").length > result ? n.split(" ").length : result
    })

    return result
    
};
// @lc code=end

