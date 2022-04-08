function getSequence(arr) {
  const p = arr.slice();
  const result = [0];
  let i, j, u, v, c;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = (u + v) >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p[v];
  }
  return result;
}

// A  B  C  D  E  F  G     K  M      // C1
//[0  1  2  3  4  5  6     7  8]

// A  B  N  F  C  D  I  E  K  M      // C2
//[0  1  2  3  4  5  6  7  8  9]
let c1 = ["A", "B", "C", "D", "E", "F", "G", "K", "M"];
let c2 = ["A", "B", "N", "F", "C", "D", "I", "E", "K", "M"];
let i = 0; // 2
let l1 = 9;
let l2 = 10;
let e1 = 8; // 6
let e2 = 9; // 7

// 1. 正序扫描头部，找到不相同的为止
while (i <= e1 && i <= e2) {
  const n1 = c1[i];
  const n2 = c2[i];
  if (n1 === n2) {
    // patch(...)
  } else {
    //
    break;
  }
  i++;
}
console.log("i--->", i);
// 2. 倒序扫描尾部，找到不相同的为止
while (i <= e1 && i <= e2) {
  const n1 = c1[e1];
  const n2 = c2[e2];
  if (n1 === n2) {
    //更新
  } else {
    //
    break;
  }
  e1--;
  e2--;
}
console.log("e1e2--->", e1, e2);

// A B   D
// A B C D
// 3.判断是否需添加节点
if (i > e1) {
  if (i < e2) {
    // 先算锚点
    // 循环添加c2新增节点
    while (i <= e2) {
      // patch(...)
      i++;
    }
  }
}

// A B C D
// A B   D
// 4.判断是否需要删除节点
else if (i > e2) {
  while (i <= e1) {
    // unmount(c1[i], ...)
    i++;
  }
}

// 5. 处理乱序数组
// ["C", "D", "E", "F", "G"]
// ["N", "F", "C", "D", "I", "E"]
else {
  let s1 = i; // 旧数组乱序开始索引
  let s2 = i; // 新数组乱序开始索引
  const keyToNewIndexMap = new Map(); // 创建新数组乱序的 key -> index   {N: 2, F: 3, C: 4,D: 5, I: 6,E: 7}
  for (i = s2; i <= e2; i++) {
    const nextChild = c2[i];
    if (nextChild != null) {
      keyToNewIndexMap.set(nextChild, i);
    }
  }
  console.log("keyToNewIndexMap--->", keyToNewIndexMap);

  let j;
  let patched = 0; // 新数组中已经patch的节点
  const toBePatched = e2 - s2 + 1; // 所有待处理的节点 也就是新数组乱序长度 6
  let moved = false; // 是否有节点需要移动
  let maxNewIndexSoFar = 0; // 跟踪是否有节点移动
  const newIndexToOldIndexMap = new Array(toBePatched); // 这个数组本身的 index 代表新数组元素的索引，数组的值代表旧数组元素的索引 [0,0,0,0,0,0] => [0, 4, 1, 2, 0, 3];
  for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0;
  // 遍历旧数组未知序列
  for (let i = s1; i <= e1; i++) {
    const prevChild = c1[i]; // 当前的旧节点
    // 若果已经patch过的节点大于等于所有新数组中待处理的节点 说明新数组的节点都patch完了 其余旧节点需要移除
    if (patched >= toBePatched) {
      // unmount(prevChild, ...);
    }
    let newIndex; // 当前旧节点在新节点乱序中的索引
    // 假设旧节点的key存在
    if (prevChild !== null) {
      newIndex = keyToNewIndexMap.get(prevChild);
    } else {
      for (j = s2; j <= e2; j++) {
        if (newIndexToOldIndexMap[j - s2] === 0 && prevChild === c2[j]) {
          newIndex = j;
          break;
        }
      }
    }
    // 若当前旧节点在新节点乱序中不存在， 说明此旧节点序移除
    if (!newIndex) {
      // unmount(prevChild, ...)
    } else {
      newIndexToOldIndexMap[newIndex - s2] = i + 1;
      // 判断旧节点在新节点乱序中是不是递增，false的话说明当前旧节点需要移动
      if (newIndex >= maxNewIndexSoFar) {
        maxNewIndexSoFar = newIndex;
      } else {
        moved = true;
      }
      // patch新旧节点中匹配的节点
      // patch(prevChild. c2[newIndex], ...)
      patched++;
    }
  }
  console.log("newIndexToOldIndexMap--->", newIndexToOldIndexMap);

  // 如果有节点移动，得到 newIndexToOldIndexMap 的最长递增子序列的索引
  const increasingNewIndexSequence = moved
    ? getSequence(newIndexToOldIndexMap)
    : [];
  console.log("getSequence--->", getSequence(newIndexToOldIndexMap)); // [0, 2, 3, 5]

  // 用于节点移动判断
  j = increasingNewIndexSequence.length - 1;
  // 倒序新数组的未知序列，因为插入节点时使用 insertBefore 即向前插，倒序遍历可以使用上一个更新的节点作为锚点
  for (i = toBePatched - 1; i >= 0; i--) {
    // 当前在整个新数组中，未知序列的索引，s2 是头部相同节点的偏移量
    const nextIndex = s2 + i;
    // 当前在整个新数组中，未知序列的节点
    const nextChild = c2[nextIndex];
    // 当前节点的下一个节点，如果当前节点是最后一个节点，那么取整个父节点的下一个节点作为插入点
    const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1] : parentAnchor;

    //如果仍然是默认值 0 证明是一个全新的节点
    if (newIndexToOldIndexMap[i] === 0) {
      // patch(...)
    } else if (moved) {
      // 存在节点移动
      // 当前索引不是最长递增子序列里的值，需要移动
      if (j < 0 || i !== increasingNewIndexSequence[j]) {
        // move(nextChild, container, anchor);
        // 当前索引是最长递增子序列里的值，j 指向下一个
      } else {
        j--;
      }
    }
  }
}
