// 创建虚拟节点vnode
export function h(tag, props, children) {
  return {
    tag,
    props,
    children,
  };
}
