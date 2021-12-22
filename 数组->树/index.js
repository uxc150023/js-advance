function arrayToTree(list) {
  let result = [];
  let mapNode = {};
  // list.forEach((item) => {
  //   mapNode[item.id] = { ...item, children: [] };
  // });
  list.forEach((item) => {
    if (mapNode[item.id]) {
      mapNode[item.id] = { children: [] };
    }
    mapNode[item.id] = {
      ...item,
      children: [],
    };

    if (item.pid === 0) {
      result.push(mapNode[item.id]);
    } else {
      mapNode[item.pid].children.push(mapNode[item.id]);
    }
  });
  return result;
}
console.log(
  arrayToTree([
    { id: 1, pid: 0 },
    { id: 2, pid: 1 },
  ]),
);
