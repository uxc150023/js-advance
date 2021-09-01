// JSON.stringify()只能序列化对象的可枚举的自有属性
// 如果obj中的对象是有构造函数生成的， 则使用JSON.parse(JSON.stringify(obj))深拷贝后，会丢弃对象的constructor；
function Person(name) {
  this.name = name;
  console.log(name)
}

const liai = new Person('liai');

const test = {
  name: 'a',
  date: liai,
};
const copyed = JSON.parse(JSON.stringify(test));
test.name = 'test'
console.error('ddd', test, copyed)