/*
 * @lc app=leetcode id=1702 lang=javascript
 *
 * [1702] Maximum Binary String After Change
 */

// @lc code=start
/**
 * @param {string} binary
 * @return {string}
 */
const maximumBinaryString = (binary) =>{
    let index = -1;
    let res = ""
    for ( let i = 0; i < binary.length; i++){
        if(index === -1 && binary[i] === '0') index = i
        if( index >= 0 && binary[i] === '0') index++
    }
    
    for ( let i = 0; i<binary.length; i++){
        if(i === index-1) res+= '0';
        else res+= '1'
    }
    
    return res
    
};
// @lc code=end

