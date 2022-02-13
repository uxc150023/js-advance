// vdom -> dom
export function mountElement(vnode, container) {
  // tag
  const { tag, props, children } = vnode;
  const el = (vnode.el = document.createElement(tag));

  // props
  if (props) {
    for (const key in props) {
      const val = props[key];
      el.setAttribute(key, val);
    }
  }

  // children
  // 1.可接受一个string
  if (typeof children === "string") {
    const textNode = document.createTextNode(children);
    el.append(textNode);
  }
  // 2.可接受一个数组
  else if (Array.isArray(children)) {
    children.forEach((v) => {
      mountElement(v, el);
    });
  }

  //插入
  container.append(el);
}

// n1 oldVnode
// n2 newVnode
export function diff(n1, n2) {
  // 1.tag
  if (n1.tag !== n2.tag) {
    n1.el.replaceWith(document.createElement(n2.tag));
  } else {
    const el = (n2.el = n1.el);
    // 2.props
    // new: {id: '1', class: '2'}
    // old: {id: '3', class: '4'}
    const { props: newProps } = n2;
    const { props: oldProps } = n1;
    if (newProps && oldProps) {
      Object.keys(newProps).forEach((key) => {
        const newVal = newProps[key];
        const oldVal = oldProps[key];
        console.log("--->", key);
        if (newVal !== oldVal) {
          el.setAttribute(key, newVal);
        }
      });
    }

    if (oldProps) {
      Object.keys(oldProps).forEach((key) => {
        if (!newProps[key]) {
          el.removeAttribute(key);
        }
      });
    }
    // 3.children
    // 1.newChildren -> string (oldChildren -> string oldChildren->array)
    // 2.newChildren -> array (oldChildren -> string oldChildren->array)
    const { children: newChildren } = n2;
    const { children: oldChildren } = n1;
    if (typeof newChildren === "string") {
      if (typeof oldChildren === "string") {
        if (newChildren !== oldChildren) {
          el.textContent = newChildren;
        }
      } else if (Array.isArray(oldChildren)) {
        el.textContent = newChildren;
      }
    } else if (Array.isArray(newChildren)) {
      if (typeof oldChildren === "string") {
        el.el.innerText = "";
        mountElement(n2, el);
      } else if (Array.isArray(oldChildren)) {
        // new [a,b,c]
        // old [a,b,c,d]
        const length = Math.min(newChildren.length);
        for (let index = 0; index < length; index++) {
          const newVnode = newChildren[index];
          const oldVnode = oldChildren[index];
          diff(oldVnode, newVnode);
        }

        if (newChildren.length > length) {
          // 创建节点
          for (let index = length; index < newChildren.length; index++) {
            const newVnode = newChildren[index];
            mountElement(newVnode);
          }
        }

        if (oldChildren.length > length) {
          // 删除节点
          for (let index = length; index < oldChildren.length; index++) {
            const oldVnode = oldChildren[index];
            oldVnode.parent.removeChild(oldVnode.el);
          }
        }
      }
    }
  }
}
