var someResource = getData();
setInterval(function () {
  var node = document.getElementById('Node');
  if (node) {
    // 处理 node 和 someResource
    node.innerHTML = JSON.stringify(someResource);
  }
}, 1000);
// 当DOM被移除，定时器依旧存在
// 回调函数朱有引用someResource，导致someResource也不能被释放
