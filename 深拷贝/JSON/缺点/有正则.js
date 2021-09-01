
// 如果obj里有RegExp(正则表达式的缩写)、Error对象，则序列化的结果将只得到空对象；
const test = {
  name: 'a',
  date: new RegExp('\\w+'),
};
const copyed = JSON.parse(JSON.stringify(test));
test.name = 'test'
console.log(copyed);
// { name: 'a', date: {} }