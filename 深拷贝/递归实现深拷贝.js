function deepCopy(obj) {
  if (obj.typeof !== 'object') {
    return;
  }

  let newObj = obj instanceof Array ? [] : {};
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      // const element = object[key];

    }
  }
  return newObj;
}