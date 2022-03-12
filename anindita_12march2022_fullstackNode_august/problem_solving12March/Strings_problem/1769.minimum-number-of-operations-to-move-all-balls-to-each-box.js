/*
 * @lc app=leetcode id=1769 lang=javascript
 *
 * [1769] Minimum Number of Operations to Move All Balls to Each Box
 */

// @lc code=start
/**
 * @param {string} boxes
 * @return {number[]}
 */
const minOperations = (boxes) => {

    let result = new Array(boxes.length).fill(0)
    for(let i = 0; i < boxes.length ; i++){
        for ( let j = 0; j< boxes.length; j++){
            if(boxes[j] == "1"){
                result[i] = Math.abs( j - i )
            }
        }
    }
    return result
    
};
// @lc code=end

