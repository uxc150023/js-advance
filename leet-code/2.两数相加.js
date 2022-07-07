/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let tmp1 = +l1.reverse().join("");
  let tmp2 = +l2.reverse().join("");
  let tmp3 = tmp1 + tmp2;
  return tmp3
    .toString()
    .split("")
    .reverse()
    .map((v) => {
      return +v;
    });
};
// @lc code=end
