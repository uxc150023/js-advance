var elements = {
  button: document.getElementById('button'),
}

function doSome() {
  image.src = 'http://www.baidu.com';
  elements.button.click();
}

function removeButton() {
  document.body.removeChild(document.getElementById('buttton'));
}

removeButton();
// 将body中的btn移除, 也就是移除 DOM树中的btn
// 但是此时全局变量elements还是保留了对button的引用, button还是存在于内存中,不能被回收

// 解决方案
// 手动清除
elements.button = null