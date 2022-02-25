/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 const threeSum = (nums) => {

    nums.sort((a, b) => a - b)

    const result = []
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let k = nums.length - 1;
        const fixed = nums[i];

        while (j < k) {

            const sum = fixed + nums[j] + nums[k]
            if (sum < 0) k--
            else if (sum > 0) j++
            else {

                if (!(nums[i - 1] === fixed || (nums[j] === nums[j - 1] && nums[k] === nums[k + 1]))) {

                    result.push([fixed, nums[j], nums[k]])

                }

                j++
                k--

            }

        }
    }
    return result;

};
// @lc code=end

