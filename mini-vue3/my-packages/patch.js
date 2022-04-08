export function patch(n1, n2, container) {}

export function patchUnkeyedChildren(c1, c2) {
  c1 = c1;
  c2 = c2;
  // 获取新旧子节点的长度
  const oldLength = c1.length;
  const newLength = c2.length;
  // 1. 取得公共长度。最小长度
  const commonLength = Math.min(oldLength, newLength);
  let i;
  // 2. patch公共部分
  for (i = 0; i < commonLength; i++) {
    // patch(...)
  }
  // 3. 卸载旧节点
  if (oldLength > newLength) {
    // remove old
    // unmountChildren(...)
  } else {
    // mount new
    // 4. 否则挂载新的子节点
    // mountChildren(...)
  }
}

function isSameVNodeType(n1, n1) {
  //
}

export function patchkeyedChildren(c1, c2) {
  let i = 0;
  const l2 = c2.length;
  let e1 = c1.length - 1; // prev ending index
  let e2 = l2 - 1; // next ending index

  //  i <= 2 && i <= 3
  // 从左向右diff
  while (i <= e1 && i <= e2) {
    const n1 = c1[i];
    const n2 = c2[i];
    if (isSameVNodeType(n1, n2)) {
      // 如果是相同的节点类型，则进行递归patch
      // patch(...)
    } else {
      // 否则退出
      break;
    }
    i++;
  }

  //  i <= 2 && i <= 3
  // 从又向左diff
  // 结束后： e1 = 0 e2 =  1
  while (i <= e1 && i <= e2) {
    const n1 = c1[e1];
    const n2 = c2[e2];
    if (isSameVNodeType(n1, n2)) {
      // 相同的节点类型
      // patch(...)
    } else {
      // 否则退出
      break;
    }
    e1--;
    e2--;
  }

  // 3. common sequence + mount
  // (a b)
  // (a b) c
  // i = 2, e1 = 1, e2 = 2
  // (a b)
  // c (a b)
  // i = 0, e1 = -1, e2 = 0
  if (i > e1) {
    if (i <= e2) {
      const nextPos = e2 + 1;
      // nextPos < l2，说明有已经patch过尾部节点，
      // 否则会获取父节点作为锚点
      const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
      while (i <= e2) {
        patch(null, c2[i], anchor, ...others);
        i++;
      }
    }
  }

  // 4. common sequence + unmount
  // (a b) c
  // (a b)
  // i = 2, e1 = 2, e2 = 1
  // a (b c)
  // (b c)
  // i = 0, e1 = 0, e2 = -1
  // 公共序列 卸载旧的
  else if (i > e2) {
    while (i <= e1) {
      unmount(c1[i], parentComponent, parentSuspense, true);
      i++;
    }
  }

  // 5. 乱序的情况
  // [i ... e1 + 1]: a b [c d e] f g
  // [i ... e2 + 1]: a b [e d c h] f g
  // i = 2, e1 = 4, e2 = 5
  const s1 = i; // s1 = 2
  const s2 = i; // s2 = 2
  // 5.1 build key:index map for newChildren
  // 首先为新的子节点构建在新的子序列中 key：index 的映射
  // 通过map 创建的新的子节点
  const keyToNewIndexMap = new Map();
  // 遍历新的节点，为新节点设置key
  // i = 2; i <= 5
  for (i = s2; i <= e2; i++) {
    // 获取的是新序列中的子节点
    const nextChild = c2[i];
    if (nextChild.key != null) {
      // nextChild.key 已存在
      // a b [e d c h] f g
      // e:2 d:3 c:4 h:5
      keyToNewIndexMap.set(nextChild.key, i);
    }
  }

  // 5.2 loop through old children left to be patched and try to patch
  // matching nodes & remove nodes that are no longer present
  // 从旧的子节点的左侧开始循环遍历进行patch。
  // 并且patch匹配的节点 并移除不存在的节点

  // 已经patch的节点个数
  let patched = 0;
  // 需要patch的节点数量
  // 以上图为例：e2 = 5; s2 = 2; 知道需要patch的节点个数
  // toBePatched = 4
  const toBePatched = e2 - s2 + 1;
  // 用于判断节点是否需要移动
  // 当新旧队列中出现可复用节点交叉时，moved = true
  let moved = false;
  // used to track whether any node has moved
  // 用于记录节点是否已经移动
  let maxNewIndexSoFar = 0;

  // works as Map<newIndex, oldIndex>
  // 作新旧节点的下标映射
  // Note that oldIndex is offset by +1
  // 注意 旧节点的 index 要向右偏移一个下标

  // and oldIndex = 0 is a special value indicating the new node has
  // no corresponding old node.
  // 并且旧节点Index = 0 是一个特殊的值，用于表示新的节点中没有对应的旧节点

  // used for determining longest stable subsequence
  // newIndexToOldIndexMap 用于确定最长递增子序列
  // 新下标与旧下标的map
  const newIndexToOldIndexMap = new Array(toBePatched);
  // 将所有的值初始化为0
  // [0, 0, 0, 0]
  for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0;

  // 遍历未处理旧序列中子节点
  for (i = s1; i <= e1; i++) {
    // 获取旧节点
    // 会逐个获取 c d e
    const prevChild = c1[i];
    // 如果已经patch 的数量 >= 需要进行patch的节点个数

    // patched刚开始为 0
    // patched >= 4
    if (patched >= toBePatched) {
      // all new children have been patched so this can only be a removal
      // 这说明所有的新节点已经被patch 因此可以移除旧的
      unmount(prevChild, parentComponent, parentSuspense, true);
      continue;
    }
  }

  // 新节点下标
  let newIndex;
  if (prevChild.key != null) {
    // 旧的节点肯定有key,
    // 根据旧节点key  获取相同类型的新的子节点  在 新的队列中对应节点位置
    // 这个时候 因为c d e 是原来的节点 并且有key
    // h 是新增节点 旧节点中没有 获取不到 对应的index 会走else
    // 所以newIndex在开始时会有如下情况
    /**
     * node  newIndex
     *  c       4
     *  d       3
     *  e       2
     * */
    // 这里是可以获取到newIndex的
    newIndex = keyToNewIndexMap.get(prevChild.key);
  }

  // key-less node, try to locate a key-less node of the same type
  // 如果旧的节点没有key
  // 则会查找没有key的 且为相同类型的新节点在 新节点队列中 的位置
  // j = 2: j <= 5
  for (j = s2; j <= e2; j++) {
    if (
      newIndexToOldIndexMap[j - s2] === 0 &&
      // 判断是否是新旧节点是否相同
      isSameVNodeType(prevChild, c2[j])
    ) {
      // 获取到相同类型节点的下标
      newIndex = j;
      break;
    }
  }

  if (newIndex === undefined) {
    // 没有对应的新节点 卸载旧的
    unmount(prevChild, parentComponent, parentSuspense, true);
  }

  // 这里处理获取到newIndex的情况
  // 开始整理新节点下标 Index 对于 相同类型旧节点在 旧队列中的映射
  // 新节点下标从 s2=2 开始，对应的旧节点下标需要偏移一个下标
  // 0 表示当前节点没有对应的旧节点
  // 偏移 1个位置 i从 s1 = 2 开始，s2 = 2
  // 4 - 2 获取下标 2，新的 c 节点对应旧 c 节点的位置下标 3
  // 3 - 2 获取下标 1，新的 d 节点对应旧 d 节点的位置下标 4
  // 2 - 2 获取下标 0，新的 e 节点对应旧 e 节点的位置下标 5
  // [0, 0, 0, 0] => [5, 4, 3, 0]
  // [2,3,4,5] = [5, 4, 3, 0]
  newIndexToOldIndexMap[newIndex - s2] = i + 1;
  // newIndex 会取 4 3 2
  /**
   *   newIndex  maxNewIndexSoFar   moved
   *       4            0          false
   *       3            4           true
   *       2
   *
   * */
  if (newIndex >= maxNewIndexSoFar) {
    maxNewIndexSoFar = newIndex;
  } else {
    moved = true;
  }

  // 进行递归patch
  /**
   * old   new
   *  c     c
   *  d     d
   *  e     e
   */
  patch(
    prevChild,
    c2[newIndex],
    container,
    null,
    parentComponent,
    parentSuspense,
    isSVG,
    slotScopeIds,
    optimized,
  );
  // 已经patch的
  patched++;

  // 5.3 move and mount
  // generate longest stable subsequence only when nodes have moved
  // 移动节点 挂载节点
  // 仅当节点被移动后 生成最长递增子序列
  // 经过上面操作后，newIndexToOldIndexMap = [5, 4, 3, 0]
  // 得到 increasingNewIndexSequence = [2]
  const increasingNewIndexSequence = moved
    ? getSequence(newIndexToOldIndexMap)
    : EMPTY_ARR;
  // j = 0
  j = increasingNewIndexSequence.length - 1;
  // looping backwards so that we can use last patched node as anchor
  // 从后向前遍历 以便于可以用最新的被patch的节点作为锚点
  // i = 3
  for (i = toBePatched - 1; i >= 0; i--) {
    // 5 4 3 2
    const nextIndex = s2 + i;
    // 节点 h  c  d  e
    const nextChild = c2[nextIndex];
    // 获取锚点
    const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
    // [5, 4, 3, 0] 节点h会被patch，其实是mount
    //  c  d  e 会被移动
    if (newIndexToOldIndexMap[i] === 0) {
      // mount new
      // 挂载新的
      patch(
        null,
        nextChild,
        container,
        anchor,
        // ...
      );
    } else if (moved) {
      // move if:
      // There is no stable subsequence (e.g. a reverse)
      // OR current node is not among the stable sequence
      // 如果没有最长递增子序列或者 当前节点不在递增子序列中间
      // 则移动节点
      //
      if (j < 0 || i !== increasingNewIndexSequence[j]) {
        move(nextChild, container, anchor, MoveType.REORDER);
      } else {
        j--;
      }
    }
  }
}
