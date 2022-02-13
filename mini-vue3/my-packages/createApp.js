// import { createVNode } from "./vnode.js";
import { effectWatch } from "../reactivity/reactive.js";
import { mountElement, diff } from "./renderer.js";
export function createApp(rootComponent) {
  // const app = {
  //   mount: (rootComponent) => {
  //     const vnode = createVNode(rootComponent, rootProps);
  //   },
  // };
  // const { mount } = app;
  // app.mount = () => {};
  // return app;
  return {
    mount(rootContainer) {
      const context = rootComponent.setup();
      let isMounted = false;
      let prevSubTree;

      effectWatch(() => {
        if (!isMounted) {
          // init
          isMounted = true;
          rootContainer.innerHTML = "";
          const subTree = rootComponent.render(context);
          console.log("--->", subTree);
          mountElement(subTree, rootContainer);
          prevSubTree = subTree;
        } else {
          // update
          const subTree = rootComponent.render(context);
          diff(prevSubTree, subTree);
          prevSubTree = subTree;
        }

        // rootContainer.append(element);
      });
    },
  };
}
