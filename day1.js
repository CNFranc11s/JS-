//reduce 实现fibnacci函数（没看懂）

function fib(n){
    return new Array(n).fill(1).reduce((arr, _ ,i) => {
            
        arr.push((i <= 1) ? i : arr[i-2] + arr[i-1])
        return arr
    },[]) ;
  }
  console.log(fib(10))

//不使用parseInt转换字符串为数字
var s = '12345'
arr= [];
for(var i = 0;i<s.length;i++){
    arr.push(s[i]);
    }
arr = arr.map(function(a){return a *1});
arr = arr.reduce(function (a,b){return a*10+b});
console.log(arr)

//使用map或者reduce实现格式化
var arr = ['adam', 'LISA', 'barT'];
function normalize(arr) {
function check(s){
    var start = s.substring(0,1).toUpperCase();
    var end = s.substring(1).toLowerCase();
    return start+end;
}
return arr.map(check);
}
console.log(normalize(arr));