// 箭头函数实现排序

var arr = [1, 20, 3, 10, 10, 10];
var arr = arr.sort((x, y) => {
  return x > y ? 1 : x === y ? 0 : -1;
});
// console.log(arr);
