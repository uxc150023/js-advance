function getMax() {
  var args = Array.prototype.slice.call(arguments, 0);
  return Math.max.apply(
    null,
    args.map((item) => {
      var arr = item.toString().split(".");
      return arr.length > 1 ? arr[1].length : 0;
    }),
  );
}

function add() {
  var args = Array.prototype.slice.call(arguments, 0);
  var max = getMax.apply(null, args);

  return (args.reduce((sum, cur) => sum + cur * max * 10, 0) / 10) * max;
}

add(0.1, 0.2);
