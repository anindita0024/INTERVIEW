/*
 * @lc app=leetcode id=1832 lang=javascript
 *
 * [1832] Check if the Sentence Is Pangram
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {boolean}
 */
const  checkIfPangram = (sentence) =>{

    let res = true;
    let arr ='abcdefghijklmnopqrstuvwxyz'

    for(let i = 0; i < arr.length; i++){
        if(!sentence.includes(arr[i])){
            res = false
        }
    }

    return res
    
};
// @lc code=end

