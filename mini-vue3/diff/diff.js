/**
 *  指向新旧序列的开始位置
 */
let i = 0;
/**
 * 指向就序列的结束位置
 */
let e1 = oldLength - 1;
/**
 * 指向新序列的结束位置
 */
let e2 = oldLength - 2;
/**
 * 左右对比完，新增节点时作为锚点
 */
const nextPos = e2 + 1;
const s1 = i; //
const s2 = i; //
/**
 * 乱序
 * 新vnode集合中节点 key：index 的映射
 * 目的是后面通过遍历就vnode子序列，确定可复用节点在新子序列的位置
 */
const keyToNewIndexMap = new Map();
