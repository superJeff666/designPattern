//单例模式
// class SingleObject {
//     login() {
//         console.log('login...')
//     }
// }
// SingleObject.getInstance = (function() {
//     let instance;
//     return function() {
//         if(!instance) {
//             instance = new SingleObject();
//         }
//         return instance;
//     }
// })()
// let obj1 = SingleObject.getInstance();
// obj1.login();
// let obj2 = SingleObject.getInstance();
// obj2.login();

// console.log('obj1===obj2', obj1=== obj2);

//适配器模式
// class Adapte {
//   specificRequest() {
//     return "美国插头";
//   }
// }
// class Target {
//   constructor() {
//     this.adapte = new Adapte();
//   }
//   request() {
//     let info = this.adapte.specificRequest();
//     return `${info}-转换器-中国标准插头`;
//   }
// }

// let target = new Target();
// let res = target.request();
// console.log(res);

//装饰器模式
// class Circle {
//   draw() {
//     console.log("画一个圆形");
//   }
// }

// class Decorator {
//   constructor(circle) {
//     this.circle = circle;
//   }
//   draw() {
//       this.circle.draw();
//       this.setRedBorder(circle);
//   }
//   setRedBorder(circle) {
//     console.log('设置红色边框')
//   }
// }

// let circle = new Circle();
// circle.draw();

// let dec = new Decorator(circle);
// dec.draw();

//-----------分割线--------
// function mixin(...list) {
//   return function(target) {
//     Object.assign(target.prototype, ...list);
//   };
// }
// const Foo = {
//   foo() {
//     alert("foo");
//   }
// };

// @mixin(Foo)
// class MyClass {}
// let obj = new MyClass();
// obj.foo();

//@readonly
// function readonly(target,name, descriptor) {
//     descriptor.writable = false;
//     return descriptor;
// }

// class Person {
//     constructor() {
//         this.first = 'a';
//         this.last = 'b';
//     }
//     @readonly
//     name() {
//         return `${this.first} ${this.last}`
//     }
// }
// let p = new Person();
// console.log(p.name())
// p.name = function() {
//     alert('1212')
// }

//@log
// function log(target, name, descriptor) {
//   let oldValue = descriptor.value;
//   descriptor.value = function() {
//     console.log(`calling ${name} width`,arguments);
//     return oldValue.apply(this, arguments);
//   };
//   return descriptor;
// }
// class Math {
//   @log
//   add(a, b) {
//     return a + b;
//   }
// }
// let math = new Math();
// const result = math.add(2,3);
// console.log('result',result);
