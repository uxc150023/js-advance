interface IArrayList {
  id: number;
  pid: number;
}
interface ITreeList {
  id: number;
  pid: number;
  children: ITreeList[];
}

function arrayToTree(list: Array<IArrayList>) {
  let result: Array<ITreeList> = [];
  let mapObj = new Map();
  list.forEach((item) => {
    mapObj.set(item.id, { ...item, children: [] });
  });

  list.forEach((item) => {
    if (item.pid === 0) {
      result.push(mapObj.get(item.id));
    } else {
      if (!mapObj.get(item.pid)) {
        mapObj.set(item.pid, { children: [] });
      }
      mapObj.get(item.pid).children.push(mapObj.get(item.id));
    }
  });
  return result;
}
