// date

// var now = new Date();
// console.log(
// now,//2019-08-28T03:23:40.560Z
// now.getFullYear(),//2019
// now.getMonth(),//7  月份用0-11表示，7也就是8月
// now.getDate(),//28
// now.getDay(),//3
// now.getHours(),//11
// now.getMinutes(),//26
// now.getSeconds(),//2
// now.getMilliseconds(),//983
// now.getTime()//1566962762983 时间戳
// );

//时区

//RegExp 正则表达式？
// 第一种方式是直接通过/正则表达式/写出来，第二种方式是通过new RegExp('正则表达式')创建一个RegExp对象。
// 方法：
// var re1 = /ABC\-001/;
// var re2 = new RegExp('ABC\\-001');
// console.log(re1.test(''));
// console.log(re2);

// 判断正则表达式是否匹配：
// var re = /^\d{3}\-\d{3,8}$/;
// console.log(re.test('010-12345'),// true
// re.test('010-1234x'),// false
// re.test('010 12345') // false
// );

// 切分字符串
// a = 'a b    c'.split(' ');
// a = 'a b    c'.split(/\s+/)//    \s 匹配一个空格
// a = 'a,b,,, c  d'.split(/[\s\,]+/);
// a = 'a,b;; c  d'.split(/[\s\,\;]+/); // ['a', 'b', 'c', 'd']
// console.log(a);

//分组
//用()表示的就是要提取的分组（Group）
// var re = /^(\d{3})-(\d{3,8})$/;
// console.log(re.exec('010-12345')); // ['010-12345', '010', '12345']
// console.log(re.exec('010 12345')); // null