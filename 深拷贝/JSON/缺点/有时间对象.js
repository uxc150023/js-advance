// 如果obj里面有时间对象，则JSON.stringify后再JSON.parse的结果，时间将只是字符串的形式，而不是对象的形式
var test = {
  name: 'a',
  date: [new Date(1536627600000), new Date(1540047600000)],
};

let b = JSON.parse(JSON.stringify(test))
console.log(b);
// {
//   name: 'a',
//   date: [ '2018-09-11T01:00:00.000Z', '2018-10-20T15:00:00.000Z' ]
// }
