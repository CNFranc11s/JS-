//面向对象
// 构造函数
//创建一个Cat对象，封装一个say方法
// function Cat(args) {
//   this.name = args.name || '流浪猫';
//   this.age = args.age || 1;
//   Cat.prototype.say = function () {
//     return `Hello, ${this.name}!`
//   }
// }
// //创建一个函数，封装new方法，通过传参的方式构造对象。
// function createCat(args) {
//   return new Cat(args || {});
// }
// //新建凯蒂对象
// var kitty = createCat({
//   name: "凯蒂"
// });
// console.log(kitty.say());

// //原型继承：

// function inherits(Child, Parent) {
//   var F = function () {};
//   F.prototype = Parent.prototype;
//   Child.prototype = new F();
//   Child.prototype.constructor = Child;
// }

// function Student(props) {
//   this.name = props.name || 'Unnamed';
// }
// Student.prototype.hello = function () {
//   console.log(`Hello,${this.name}`);
// }

// function PrimaryStudent(props) {
//   Student.call(this.props);
//   this.grade = props.grade || 1;
// }
// inherits(PrimaryStudent, Student);
// PrimaryStudent.prototype.getGrade = function () {
//   return this.grade;
// };

//class继承 ES6中新增的语法，定义class变简单！
class Student {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(`Hello,${this.name}!`);
  }
}
class PrimaryStudent extends Student {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }
  myGrade() {
    console.log(`I am at grade ${this.grade}`);
  }
}
var a = new PrimaryStudent("hxx", 1);
a.myGrade();
a.hello();
