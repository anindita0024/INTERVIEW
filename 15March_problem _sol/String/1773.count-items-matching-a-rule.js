/*
 * @lc app=leetcode id=1773 lang=javascript
 *
 * [1773] Count Items Matching a Rule
 */

// @lc code=start
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const countMatches = (items, ruleKey, ruleValue) =>{

    let result = 0;

    const map = {
        type:0,
        color:1,
        name:2
    }

    for( let i of items){
        const index = map[ruleKey]

        if( i[index] === ruleValue){
            result++
        }
    }

    return result
    
};
// @lc code=end

