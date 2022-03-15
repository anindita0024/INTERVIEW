/*
 * @lc app=leetcode id=1859 lang=javascript
 *
 * [1859] Sorting the Sentence
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const sortSentence = (s) => {
    let string = s.split(" ");
    let arr = []
    
    for(let i =0; i < string.length; i++){
        let index = string[i].charAt(string[i].length-1);
        arr[index] = string[i].slice(0, -1)
    }
    
    return arr.filter((e) => e).join(" ")
};
// @lc code=end

