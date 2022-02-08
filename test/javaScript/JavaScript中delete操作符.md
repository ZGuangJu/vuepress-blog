>在JavaScript中，delete操作符用的比较少，但是还是比较重要的，我本人面试的时候就遇到过关于delete的问题，下面总结一下delete的具体用法。

# 作用:

delete 操作符用于删除对象的某个属性。

# 语法:
直接使用delete操作符

    delete object.property 或 delete object['property']

例如:
```
var person = {
    name: 'abc'
    age: 18
}

delete person.name

console.log(person) // {age: 18}
```
# 返回值:

delete操作符具有返回值，返回值为布尔值，对于所有情况都是true，即使是删除不存在的属性也会返回true，还是如上代码，不防打印一下返回值看看

    console.log(delete person.name) //true
    console.log(delete person.job) //即使删除对象不存在的属性依然返回true
    
    
但是也有例外的情况(返回false)，如果属性是**不可配置属性**(对于不可配置属性的概念，可以参考[Object. defineProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)，我第一次听说这个概念的时候也有点蒙圈), 在非严格模式下，返回false，在严格模式下则会抛出语法错误的异常。

# 具体使用
## 1. 对象属性不存在
如上所述，如果删除对象不存在的属性，delete无效，但是返回值仍然为true

## 2. 原型链上存在该同名属性
如果delete操作符删除属性成功，则该属性将永远不存在，但是该对象原型链上存在该同名属性，则该对象会从原型链上继承该同名属性。**但和内存并无关联，内存管理并不是delete操作符可以操作的，而且一点关系也没有。[内存管理](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management)推荐MDN这篇文章**
```
// 构造函数
function Person() {
    this.name = "张三",
    this.job = "工程师"
}

Person.prototype.name = "李四"
// 创建实例对象
var p = new Person();
// 只删除p实例的name属性
delete p.name;
console.log(p) => // 通过打印如下图，name属性成功删除
```
![打印字段图片](https://github.com/sunzhaoye/blog/blob/master/assets/delete.png)

```
接下来看: 
console.log(p.name) => // '张三' 依然可以访问到
```
所以可以看出delete操作只会在自身的属性上起作用，这里能console出来'张三'，是作用域链的原因，当实例本身无该属性的时候，就会去找它的protype身上有无该同名属性。
## 3. 使用var声明

使用var声明的属性(包括函数)，不能从全局作用域或函数作用域中删除

在全局作用域中声明属性:
```
// 声明属性
var a = 1; // 等同于window.a
delete a  // 严格模式下抛出语法异常 SyntaxError
console.log(a); // 1 非严格模式下
console.log(delete a); // 非严格模式下false
```
```
// 声明函数
var fn = function () {
    console.log(1);
}
delete fn // 严格模式下抛出语法异常  SyntaxError
fn() // 1 非严格模式下delete失效, 函数依然存在

// 另外， 除字面量定义外，匿名函数定义函数效果也是一样
```
在函数作用域中声明属性(效果和在全局作用域中一样):

```
// 局部作用域声明属性
funtion fn() {
    var a = 1;
    delete a; // 严格模式下抛出语法异常 SyntaxError
    console.log(a); // 1
    console.log(delete a); // 非严格模式下false
}

fn();
```
```
// 局部作用域声明函数
var fn = function() {
    var fn2 = function() {
        console.log(1);
    };
    delete fn2 // 严格模式下抛出语法异常 SyntaxError 
    console.log(delete fn2); // false 非严格模式下
    fn2(); // 1
}
fn();
```
另外， 需要注意的是，在对象中定义的函数是可以删除的，和属性一样，比如

```
var person = {
    name: '张三',
    showName: function () {
        console.log(this.name);
    }
}
delete person.showName
console.log(person.showName) // undefined
```
## 4. let和const声明的属性

任何用let或const声明的属性不能够从它被声明的作用域中删除，我试了下，和var的效果是一样的，目前只能理解到这，如果知道的大神请指点下
## 5. 不可设置的属性
### Math, Array, Object等内置对象的属性不可删除 
```
console.log(Array.length); // 1
delete Array.length
console.log(Array.from); 0
```
```
delete Array.prototype //严格模式下抛出异常
console.log(Array.prototype) // 非严格模式下，prototype依然存在, 可以自己试试了，自己动手，丰衣足食
console.log(Array.prototype.join); // 非严格模式下，join方法依然存在
```
需要注意的是，只是这些内置对象的属性不可删除，内置对象的方法是可以删除的，比如:

```
console.log(Array.forEach); // 内置函数
delete Array.forEach // 不用区分严格模式与否
console.log(Array.forEach); // undefined
```
### Object.defineProperty()设置为不可设置的属性,不可删除

```
var person = {};
Object.defineProperty(person, 'name', {
    value: '张三',
    configurable: false
})
delete person.name // 严格模式下，抛出异常
console.log(person.name); // 张三
console.log(delete person.name); // 非严格模式false
```

**var, let以及const创建的不可设置的属性不能被delete操作删除**
```
var a = 'abc'; // 属于window 等同于window.a
var aVal = Object.getOwnPropertyDescriptor(window, 'a'); 
console.log(aVal);
//  aVal输入如下   
//    {
//       value: 2,
//         writable: true, 
//         enumerable: true, 
//         configurable: false // 由于是var声明的属性，所以为false
//     }
```
```
var a = 'abc'; // 属于window 等同于window.a
delete a // 严格模式下抛出异常
var aVal = Object.getOwnPropertyDescriptor(window, 'a'); 
console.log(aVal);
console.log(delete a); //false
//  非严格模式下，aVal输入如下   
//    {
//       value: 2,
//         writable: true, 
//         enumerable: true, 
//         configurable: false // 由于是var声明的属性，所以为false
//     }
```
如果开始没有阅读，再去看看吧[Object. defineProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)。如果了解，可以直接略过。
## 6. 删除数组
使用delete操作符删除数组总某项元素时，被删除的元素会从该数组中删除，但是数组的length并不会改变

```
var arr = [1, 2, 3];
delete arr[1]
console.log(arr); // [1, undefined × 1, 2]
console.log(delete arr[1]) // true
console.log(arr[1]); // undefined
```
但是这里存在一个问题
    console.log(1 in arr) // false

所以如果想把数组中某一项赋值成undefined时，不应该使用delete操作符,而是直接使用下边赋值
    arr[1] = undefined;
    // 这样就可以解决上面的问题 
    console.log(1 in arr) // true
 
今天花了点时间，把关于delete的问题总结了一下, 方便自己查阅, 也希望能帮助需要的人, 欢迎大神指点与补充,如果你阅读完，感觉也还有收藏价值，那还等什么，赶快收藏吧！

