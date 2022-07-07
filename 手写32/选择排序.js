function quickSort(params) {
  params.sort((a, b) => {
    return a - b;
  });
  return params;
}

console.log(quickSort([3, 6, 2, 4, 1]));
