// 如果obj里有函数，undefined，则序列化的结果会把函数或 undefined丢失
const test = {
  name: 'a',
  date: function hehe() {
    console.log('fff')
  },
};
// debugger
const copyed = JSON.parse(JSON.stringify(test));
test.name = 'test'
console.error('ddd', test, copyed);
// ddd { name: 'test', date: [Function: hehe] } { name: 'a' }