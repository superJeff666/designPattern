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
//-------------------分割线-------------------------
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

//------------代理模式---------
//明星经纪人案例

//明星
// let star = {
//   name: "jeff",
//   age: 18,
//   phone: "start:12345670986"
// };

// //经纪人
// let agent = new Proxy(star, {
//   get: function(target, key) {
//     if (key === "phone") {
//       //返回经纪人的电话
//       return "agent:13456789065";
//     }
//     if (key === "price") {
//       return 120000;
//     }
//     return target[key];
//   },
//   set: function(target, key, val) {
//     if (key === "customPrice") {
//       if (val < 100000) {
//         throw new Error("价格太低，暂时不接收服务");
//       } else {
//         target[key] = val;
//         return true;
//       }
//     }
//   }
// });

// //测试
// console.log(agent.name)
// console.log(agent.age);
// console.log(agent.phone);
// console.log(agent.price);

// agent.customPrice = 90000;
// console.log(agent.customPrice);

//----------------分割线-------------------//

//观察者模式
// class Subject {
//   constructor() {
//     this.state = 0;
//     this.observers = [];
//   }
//   getState() {
//     return this.state;
//   }
//   setState(state) {
//     this.state = state;
//     this.notifyAllObservers();
//   }

//   notifyAllObservers() {
//     this.observers.forEach(observer => {
//       observer.update();
//     });
//   }

//   attach(observer) {
//     this.observers.push(observer);
//   }
// }
// class Observer {
//   constructor(name, subject) {
//     this.name = name;
//     this.subject = subject;
//     this.subject.attach(this);
//   }
//   update() {
//     console.log(`${this.name} update,state:${this.subject.getState()}`)
//   }
// }

// //测试
// let s = new Subject();
// let o1 = new Observer('o1',s);
// let o2 = new Observer('o2',s);
// let o3 = new Observer('o3',s);

// s.setState(1);
// s.setState(2);
// s.setState(3);

//----------分割线---------------
//迭代器模式

// class Iterator {
//   constructor(container) {
//     this.list = container.list;
//     this.index = 0;
//   }
//   next() {
//     if (this.hasNext()) {
//       return this.list[this.index++];
//     }
//     return null;
//   }
//   hasNext() {
//     if (this.index >= this.list.length) {
//       return false;
//     }
//     return true;
//   }
// }

// class Container {
//   constructor(list) {
//     this.list = list;
//   }
//   //生成遍历器
//   getIterator() {
//     return new Iterator(this);
//   }
// }

// //测试
// let arr = [1,2,3,4,5,6];
// let container = new Container(arr);
// let iterator = container.getIterator();
// while(iterator.hasNext()) {
//   console.log(iterator.next());
// }

//迭代器模式

function each(data) {
    for(let item of data) {
        console.log(item);
    }
}
let arr = [1,2,3,4];
let nodeList = document.getElementsByTagName('p');
let m = new Map();
m.set('a',100);
m.set('b',100);

each(arr);
each(nodeList);
each(m);
