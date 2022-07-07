function bubbleSort(params) {
  let length = params.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (params[i] > params[j]) {
        let a = params[i];
        params[i] = params[j];
        params[j] = a;
      }
    }
  }
  return params;
}

console.log(bubbleSort([3, 6, 2, 4, 1]));
