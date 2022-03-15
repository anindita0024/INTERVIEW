/*
 * @lc app=leetcode id=1221 lang=javascript
 *
 * [1221] Split a String in Balanced Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = (s) =>{
    let result = 0;
    let num =0;

    for( i = 0; i < s.length; i++){
        if(s[i] === 'R'){
            num++
        }

        if(s[i] === 'L'){
            num--
        }

        if(num === 0){
            result++
        }
    }

    return result
    
};
// @lc code=end

