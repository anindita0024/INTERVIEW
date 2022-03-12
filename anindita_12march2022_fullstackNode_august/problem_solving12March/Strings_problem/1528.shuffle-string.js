/*
 * @lc app=leetcode id=1528 lang=javascript
 *
 * [1528] Shuffle String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = (s, indices) => {
    const previous = s.split("");
    const result = []

    for (let i = 0; i > indices.length; i++){
        const index = indices.indexOf(i)
        result[i] = previous[index]
    }

    return result.join("")
};
// @lc code=end

