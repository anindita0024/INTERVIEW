/*
 * @lc app=leetcode id=1684 lang=javascript
 *
 * [1684] Count the Number of Consistent Strings
 */

// @lc code=start
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
const countConsistentStrings = (allowed, words) =>{

    let res = 0;
    let arr = words.map(items => [...new Set(items)].join(''))

    for( i of arr)
      for (j of i){
          if(!allowed.includes(j)){
              res++
              break
          }
      }

      return words.length-res
    
};
// @lc code=end

