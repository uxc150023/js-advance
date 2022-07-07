/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let arr = [...nums1, ...nums2].sort((a, b) => {
    return a - b;
  });
  let length = arr.length;
  if (length % 2 === 0) {
    return arr[length / 2] + arr[length / 2 - 1] / 2;
  } else {
    return arr[Math.ceil(length / 2) - 1];
  }
};
// @lc code=end
