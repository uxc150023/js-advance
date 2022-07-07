/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let tmp = target - nums[i];
    if (nums.indexOf(tmp) > -1 && nums.indexOf(tmp) !== i) {
      return [i, nums.indexOf(tmp)];
    }
  }
};
// @lc code=end
