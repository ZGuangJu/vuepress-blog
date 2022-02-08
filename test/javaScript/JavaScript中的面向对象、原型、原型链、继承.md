文章同步到[github](https://github.com/sunzhaoye/blog/issues/10)
#本文主要内容
**(本文较长,请耐心阅读,必有收获):**

* 什么是对象
* 创建对象的几种方式
    * 使用构造函数创建
    * 字面量创建
    * 工厂模式
    * 构造模式
    * 原型模式
        * 原型
    * 组合使用构造函数模式和原型模式
* 继承
    * 原型链
    * 属性查找机制
    * 经典继承
* 个人扩展补充
    * hasOwnProperty()
    * 重写原型对象
    * 显式prototype和隐式[[Prototype]]属性

# 什么是对象

直接上《JavaScript高级教程》的截图

![对象](http://ovqwwz784.bkt.clouddn.com/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202017-09-23%20%E4%B8%8A%E5%8D%8810.03.29.png)

**补充:**
js中说一切都是对象,是不完全的,在js中6种数据类型(Undefined,Null,Number,Boolean,String,Object)中,前五种是基本数据类型,是原始值类型,这些值是在底层实现的,他们不是object，所以没有原型，没有构造函数,所以并不是像创建对象那样通过构造函数创建的实例。关于对象属性类型的介绍就不介绍了,可以看我上一篇文章[Object.defineProperty()和defineProperties()](https://segmentfault.com/a/1190000011294519)

# 创建对象

## 1.使用构造函数创建
```
var obj = new Object();
```
## 2.字面量创建
```
var obj = {};
```
## 3.工厂模式

如果使用构造函数和字面量创建很多对象,每个对象本身又有很多相同的属性和方法的话,就会产生大量重复代码,每个对象添加属性都需要重新写一次。如两个对象都需要添加name、age属性及showName方法:
```
var p1 = new Object();
p1.name = '张三'
p1.age = '16',
p1.showName = function() {
    return this.name
}

var p2 = new Object();
p2.name = '李四'
p2.age = '18',
p2.showName = function() {
    return this.name
}
```
为了解决这个问题,人们采用了工厂模式,抽象了创建对象的过程,采用函数封装以特定接口(相同的属性和方法)创建对象的过程。

```
function createPerson(name, age) {
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.showName = function () {
        return  this.name;
    };
    return obj;
}

var p1 = createPerson('张三', 16);
var p2 = createPerson('李四', 18);
```
## 4.构造模式
虽然工厂模式解决了创建多个对象的多个相同属性问题,却无法判定对象的具体类型,因为都是Object,无法识别是Array、或是Function等类型,这个时候构造函数模式出现了。

js中提供了像Object,Array,Function等这样的原生的构造函数,同时也可以创建自定义的构造函数,构造函数是一个函数，用来创建并初始化新创建的对象。将工厂模式的例子用构造函数可以重写为: 

```
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.showName = function() {
        console.log(this.name);
    }
}

var p1 = new Person('张三', '16');
var p2 = new Person('李四', '18');
```
用Person代替了工厂模式的createPerson函数,而且函数名首字母P大写,这是因为按照惯例,构造函数首字母应该大写,而作为非构造函数的函数首字母小写。另外可以注意到构造函数内部的特点: 
1. 没有显示创建对象
2. 直接在this上添加属性和方法
3. 没有return 

另外,还使用了new操作, 要创建一个实例,必须使用new操作符,使用new操作符调用构造函数,在调用构造函数的时候经历了如下几个阶段:

1. 创建一个对象
2. 把创建的对象赋值给this
3. 执行函数中的代码, 即把属性和方法添加到赋值之后的this
4. 返回新对象

用***伪代码***来说明上述new Person()的过程如下: 

```
// 使用new操作符时,会激活函数本身的内部属性[[Construct]],负责分配内存
Person.[[Construct]](initialParameters):

// 使用原生构造函数创建实例
var Obj = new NativeObject() //NativeObject为原生构造函数,如Object、Array、Function等

// 给创建的实例添加[[Class]]内部属性,字符串对象的一种表示, 如[Object Array]
// Object.prototype.toString.call(obj)返回值指向的就是[[Class]]这个内部属性
Obj.[[Class]] = Object/Array/Function;

// 给创建的实例添加[[Prototype]]内部属性,指向构造函数的prototype
O.[[Prototype]] = Person.prototype;

// 调用构造函数内部属性[Call],将Person执行上下文中this设置为内部创建的对象Obj,
this = Obj;
result = Person.[[Call]](initialParameters);  
// result是如果构造函数内部如果存在返回值的话,调用[[call]]时作为返回值,一般为Object类型

// 调用Person.[[call]]时,执行Person中的代码,给this对象添加属性和方法
this.name = name;
this.age = age;
this.showName = function() {
    console.log(this.name);
};

//如果Person.[[call]]的返回值result为Object类型
return result
// 否则
return Obj;
```
补充,贴出ECMAScript 5.1版本标准中[[Construct]]的规范,我本人对[[Call]]的返回值问题理解的也不好,希望哪位大神可以指点指点。

![construct](http://ovqwwz784.bkt.clouddn.com/Construct.png)


构造函数虽然解决了实例多个同名属性重复添加的问题,但是也存在每个实例的方法都需要重新创建一遍,因为每个方法都是Function的不同实例,看下面这段代码就明白了:
```
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.showName = new Function("console.log(this.name);");
}

var p1 = new Person('张三', '16');
var p2 = new Person('李四', '18');
console.log(p1.showName === p2.showName); //false 
```
这个问题可以用以下办法来解决,把showName变成全局函数
```
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.showName = showName;
}
function showName() {
    console.log(this.name)
}
```
但是这样如果对象需要添加很多方法就会产生很多全局函数,这些问题可以通过原型模式来解决

## 5.原型模式

### 什么是原型

当每一个函数创建时,都会给函数设置一个prototype(原型)属性,这个属性是一个指针,指向一个对象,这个对象包含所有实例共享的属性和方法,在默认情况下,都会为prototype对象添加一个constructor属性,指向该函数。

```
Person.prototype.constructor = Person;
```

原型模式就是不必在构造函数中定义实例的属性和方法,而是将属性和方法都添加到原型对象中。创建自定义构造函数,其原型对象只会默认取得constructor属性,其他的属性和方法都是从Object继承来的。当使用构造函数创建一个实例之后,会给实例添加内部属性**[[prototype]]**,这个属性是一个指针,指向构造函数的prototype(原型)对象,由于是内部属性,无法通过脚本获取,但是在一些Chrome、Firefox、Safari等浏览器中在每个对象身上支持一个__proto__属性,指向的就是构造函数的原型对象。另外可以通过**isProtoTypeOf()**来判断创建的实例是否有指向某构造函数的指针,如果存在,返回true,如果不存在,返回false。

```
function Person() {

}
Person.prototype.name = '张三';
Person.prototype.friends = ['张三', '李四'];
Person.prototype.showName = function() {
    console.log(this.name);
}
var p1 = new Person();
var p2 = new Person()
console.log(p1.__proto__ === Person.prototype)  // true
console.log(Person.prototype.isPrototypeOf(p1))  // true
```

在ECMA5中增加了一个方法**Object.getPrototypeOf(params)**,返回值就是创建对象的原型对象

```
console.log(Object.getPrototypeOf(p1) === Person.prototype); // true
console.log(Object.getPrototypeOf(p1).name);  //张三
```

原型模式虽然解决了方法共享的问题,但是对于实例共享来说是个比较大的问题,因为每个实例都需要有描述自己本身特性的专有属性,还是上面的代码:

```
    console.log(p1.name)  // '张三'
    console.log(p2.name)  // '张三'
```

另外对于属性是引用类型的值来说缺点就更明显了,如果执行下面这段代码:

```
p1.friends.push('王五');
console.log(p1.priends);  //['张三', '李四', '王五']
console.log(p2.priends);  //['张三', '李四', '王五']
```
为了解决原型模式的问题,人们采用了原型和构造组合模式,使用构造函数定义实例,使用原型模式共享方法。

## 6组合使用构造函数模式和原型模式
直接上代码:

```
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.friends = ['张三', '李四']; // this.friends = new Array('张三', '李四')
}

Person.prototype.showName = function() {
    console.log(this.name);
};

var p1 = new Person('John');
var p2 = new Person('Alice');
p1.friends.push('王五');
console.log(p1.friends); // ['张三', '李四', '王五'];
console.log(p2.friends); // ['张三', '李四'];
// 因为这时候每个实例创建的时候的friends属性的指针地址不同,所以操作p1的friends属性并不会对p2的friends属性有影响

console.log(p1.showName === p2.showName)  // true  都指向了Person.prototype中的showName

```

这种构造函数模式和原型模式组合使用,基本上可以说是js中面向对象开发的一种默认模式,介绍了以上这几种常用创建对象的方式, 还有其他不常用的模式就不介绍了,接下来想说的是js中比较重要的继承。

# 继承

## 什么是原型链
ECMA中继承的主要方法就是通过原型链,主要是一个原型对象等于另一个类型的实例,由于实例内部含有一个指向构造函数的指针,这时候相当于重写了该原型对象,此时该原型对象就包含了一个指向另一个原型的指针,假如另一个原型又是另一个类型的实例,这样就形成了原型链的概念,原型链最底层为Object.prototype.__proto__,为null。

## 属性查找机制

js中实例属性的查找,是按照原型链进行查找,先找实例本身有没有这个属性,如果没有就去查找查找实例的原型对象,也就是[[prototype]]属性指向的原型对象,一直查到Object.prototype,如果还是没有该属性,返回undefined。所有函数的默认原型都是Object实例。

```
function Parent() {
    this.surname = '张';
    this.name = '张三';
    this.like = ['apple', 'banana'];
}
var par = new Parent()
function Child() {
    this.name = '张小三';
}
Parent.prototype.showSurname = function() {
    return this.surname
}
// 继承实现

Child.prototype = new Parent();

var chi = new Child();
console.log(chi.showSurname())  // 张

```

以上代码证明,此时Child实例已经可以访问到showSurname方法,这就是通过原型链继承Parent原型方法,剖析一下其过程:
```
Child.prototype = new Parent();
```
相当于重写了Child.prototype,指向了父实例par,同时也包含了父实例的[[prototype]]属性,此时

```
console.log(Child.prototype.__proto__ === par.__proto__); // true
console.log(Child.prototype.__proto__ === Parent.prototype); // true
```
执行chi.showSurname()时,根据属性查找机制:

1. 先从实例chi本身查找,有没有showSurname,没有
2. 继续查找chi的原型对象Child.prototype有没有showSurname,没有
3. 继续查找Child.prototype的原型指针__proto__有没有showSurname,此时Child.prototype.__proto__的指针地址指向Parent.prototype,找到了,所以
```
console.log(chi.showSurname())  // 张
```

**补充:**
所有函数默认继承Object:

```
function Person() {

}
console.log(Person.prototype.__proto__ === Object.prototype); // true
```

## 构造函数模式和原型模式组合继承
只通过原型来实现继承,还存在一定问题,所以js中一般通过借用构造函数和原型组合的方式来实现继承,也称**经典继承**,还是继承那段代码,再贴过来把,方便阅读

```
function Parent() {
    this.surname = '张';
    this.name = '张三';
    this.like = ['apple', 'banana'];
}
var par = new Parent()
function Child() {
    this.name = '张小三';
}
Parent.prototype.showSurname = function() {
    return this.surname
}
// 继承实现

Child.prototype = new Parent();

var chi1 = new Child();
var chi2 = new Child();
console.log(chi.showSurname())  // 张

// 主要看继承的属性

console.log(chi.like)  //  ['apple', 'banana']
这是因为Child.prototype指向父实例,当查找实例chi本身没有like属性,就去查找chi的原型对象Child.prototype,所以找到了

```
那么还存在什么问题呢,主要就是涉及到引用类型的属性时,引用类型数据的原始属性会被实例所共享,而实例本身的属性应该有实例自己的特性,还是以上代码
```
chi.like.push('orange');
console.log(chi1.like);    // ['apple', 'banana', 'orange']
console.log(chi2.like);    // ['apple', 'banana', 'orange']
```
所以构造函数和原型组合的经典继承出现了,也是本篇最重要的内容:

**1.属性继承**

在子构造函数内,使用apply()或call()方法调用父构造函数,并传递子构造函数的this

**2.方法继承**

使用上文提到的原型链继承,继承父构造器的方法

上代码:
```
function Parent(name) {
    this.name = name;
    this.like = ['apple', 'banana'];
}
Parent.prototype.showName = function() {

    console.log(this.name);
};

function Child(name, age) {
    // 继承属性
    Parent.call(this, name);
    // 添加自己的属性
    this.age = age;
}
Child.prototype = new Parent();
// 子构造函数添加自己的方法
Child.prototype.showAge = function() {
    console.log(this.age);
};

var chi1 = new Child('张三', 16);
var chi2 = new Child('李四', 18);

chi1.showName(); //张三
chi1.showAge(); //16
chi1.like.push('orange');
console.log(chi1.like);  // ['apple', 'banana', 'orange']
console.log(chi2.like);  // ['apple', 'banana']
```
在子构造函数Child中是用call()调用Parent(),在new Child()创建实例的时候,执行Parent中的代码,而此时的this已经被call()指向Child中的this,所以新建的子实例,就拥有了父实例的全部属性,这就是继承属性的原理。对chi1和chi2的like属性,是每个实例自己的属性,二者间不存在引用依赖关系,所以操作chi.like并不会对chi.like造成影响。方法继承,就是上文讲的到的原型链机制继承,另外可以给子构造函数添加自己的属性和方法。
这就是经典继承,避免了但是使用构造函数或者单独使用原型链的缺陷,成为js中最常用的继承方式。

# 个人扩展补充

## hasOwnProperty()

**用法: obj.hasOwnProperty(prop)**

使用hasOwnProperty()方法可以判断访问的属性是原型属性还是实例属性,如果是实例属性返回true,否则返回false

```
function Person() {

}
Person.prototype.name = '张三'
var p1 = new Person();
var p2 = new Person();
p1.name = '张三';
console.log(p1.hasOwnProperty('name'))  //true
console.log(p2.hasOwnProperty('name'))  //false
```
## 重写原型对象

在实际开发中,如果原型对象有很多方法,往往我们可以使用字面量的形式,重写原型,但是需要手工指定constructor属性

```
function Person(name, age) {
    this.name = name;
    this.age = age;
}
var p1 = new Person('张三', 16);
Person.prototype.showName = function() {
    return this.name;
}
Person.prototype.showAge = function() {
    return this.age;
}
```
如果构造函数的prototype方法很多,可以采用字面量方式定义

```
Person.prototype = {
    constructor: Person,
    showName: function() {
        return this.name;
    },
    showAge: function() {
        return this.age;
    }
}
```
注意这里面手动加了一个constructor属性指向Person构造函数,这是因为使用字面量重写原型对象,这个原型对象变成了一个Object的实例,原型对象本身已经不存在最初函数创建时初始化的constructor属性,这是原型对象的[[prototype]]指针指向了Object.prototype

## 显式prototype和隐式[[Prototype]]属性

```
function Person() {
    
}

Person.prototype.a = 10;
var p = new Person();

console.log(p.a)  //10

Person.prototype = {
    constructor: Person,
    a: 20,
    b: 30
}

console.log(p.a)  // 10
console.log(p.b)  // undefined


var p2 = new Person();
console.log(p2.a)  // 20
console.log(p2.b)  // 30
```

因此，有的文章说“动态修改原型将影响所有的对象都会拥有新的原型”是错误的，新原型仅仅在原型修改以后的新创建对象上生效。

这里的主要规则是：对象的原型是对象的创建的时候创建的，并且在此之后不能修改为新的对象，如果依然引用到同一个对象，可以通过构造函数的显式prototype引用，对象创建以后，只能对原型的属性进行添加或修改。

以上就是我梳理出来的js中面向对象部分的相关概念和理解,依旧主要参考《JavaScript高教程》和[《深入理解JavaScript系列》](http://www.lai18.com/content/425668.html)文章,另外翻看了[ECMAScript5.1中文版](http://lzw.me/pages/ecmascript/#240)。本人对引用书中的概念和相关知识,为保证文章不误导大家,并不是拿来主义,希望本文能对大家有帮助,也希望大家多多指教。


