>ECMAS-262第5版在定义只有内部采用的特性时，提供了描述了属性特征的几种属性。ECMAScript对象中目前存在的属性描述符主要有两种，数据描述符(数据属性)和存取描述符(访问器属性)，数据描述符是一个拥有可写或不可写值的属性。存取描述符是由一对 getter-setter 函数功能来描述的属性。

Object的**defineProperty**和**defineProperties**这两个方法在js中的重要性十分重要，主要功能就是用来**定义或修改这些内部属性**,与之相对应的**getOwnPropertyDescriptor**和**getOwnPropertyDescriptors**就是获取这行内部属性的描述。

下面文章我先介绍数据描述符和存取描述符的属性代表的含义，然后简单介绍以上四个方法的基本功能，这些如果了解可直接跳过，最后我会举例扩展及说明各内部属性在各种场景下产生的实际效果，那才是这篇文章的核心内容。本文章关于概念性的描述还是会尽量使用《javaScript高级教程》、MDN网站等概念，保证准确和易于大家理解，讲解部分则结合个人理解和举例说明。

# 数据(数据描述符)属性

数据属性有4个描述内部属性的特性

## [[Configurable]]
表示能否通过[delete](https://segmentfault.com/a/1190000010574280)删除此属性，能否修改属性的特性，或能否修改把属性修改为访问器属性，如果直接使用字面量定义对象，默认值为true

## [[Enumerable]] 
表示该属性是否可枚举，即是否通过for-in循环或Object.keys()返回属性，如果直接使用字面量定义对象，默认值为true
## [[Writable]]
能否修改属性的值，如果直接使用字面量定义对象，默认值为true
## [[Value]]

该属性对应的值，默认为undefined

#访问器(存取描述符)属性
访问器属性也有4个描述内部属性的特性
## [[Configurable]]
和数据属性的[[Configurable]]一样，表示能否通过delete删除此属性，能否修改属性的特性，或能否修改把属性修改为访问器属性，如果直接使用字面量定义对象，默认值为true

## [[Enumerable]] 
和数据属性的[[Configurable]]一样，表示该属性是否可枚举，即是否通过for-in循环或Object.keys()返回属性，如果直接使用字面量定义对象，默认值为true

## [[Get]]
一个给属性提供 getter 的方法(访问对象属性时调用的函数,返回值就是当前属性的值)，如果没有 getter 则为 undefined。该方法返回值被用作属性值。默认为 undefined

## [[Set]]

一个给属性提供 setter 的方法(给对象属性设置值时调用的函数)，如果没有 setter 则为 undefined。该方法将接受唯一参数，并将该参数的新值分配给该属性。默认为 undefined

# 创建/修改/获取属性的方法
## Object.defineProperty()
**功能:**
方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。如果不指定configurable, writable, enumerable ，则这些属性默认值为false，如果不指定value, get, set，则这些属性默认值为undefined
```
语法: Object.defineProperty(obj, prop, descriptor)
```
**obj:** 需要被操作的目标对象
**prop:** 目标对象需要定义或修改的属性的名称
**descriptor:** 将被定义或修改的属性的描述符
```
var obj = new Object();

Object.defineProperty(obj, 'name', {
    configurable: false,
    writable: true,
    enumerable: true,
    value: '张三'
})

console.log(obj.name)  //张三
```
## Object.defineProperties()
**功能:**
方法直接在一个对象上定义一个或多个新的属性或修改现有属性，并返回该对象。
```
语法: Object.defineProperties(obj, props)
```
**obj:** 将要被添加属性或修改属性的对象
**props:** 该对象的一个或多个键值对定义了将要为对象添加或修改的属性的具体配置

```
var obj = new Object();
Object.defineProperties(obj, {
    name: {
        value: '张三',
        configurable: false,
        writable: true,
        enumerable: true
    },
    age: {
        value: 18,
        configurable: true
    }
})

console.log(obj.name, obj.age) // 张三, 18
```

## Object.getOwnPropertyDescriptor()
**功能:**
该方法返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）
```
语法: Object.getOwnPropertyDescriptor(obj, prop)
```

**obj:** 需要查找的目标对象
**prop:** 目标对象内属性名称

```
var person = {
    name: '张三',
    age: 18
}

var desc = Object.getOwnPropertyDescriptor(person, 'name'); 
console.log(desc)  结果如下
// {
//     configurable: true,
//     enumerable: true,
//     writable: true,
//     value: "张三"
// }

```

## Object. getOwnPropertyDescriptors()
**功能:**
所指定对象的所有自身属性的描述符，如果没有任何自身属性，则返回空对象。
```
语法: Object.getOwnPropertyDescriptors(obj)
```
**obj:** 需要查找的目标对象

```
var person = {
    name: '张三',
    age: 18
}
var desc = Object.getOwnPropertyDescriptors(person, 'name');
console.log(desc) // 结果如下图

```

![console结果](http://ovqwwz784.bkt.clouddn.com/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202017-09-21%20%E4%B8%8A%E5%8D%8810.40.34.png)

#各种场景下描述符属性的的扩展示例讲解

## configrubale

如果设置configrubale属性为false，则不可使用delete操作符(在严格模式下抛出错误), 修改所有内部属性值会抛出错误,在《javaScript高级教程中》说只可以改变writable的值，现在改变writable的值也会抛出错误
### 在对象中添加一个数据描述符属性
```
var person = {};

Object.defineProperty(person, 'name', {
    configurable: false,
    value: 'John'
}) ;

delete person.name   // 严格模式下抛出错误

console.log(person.name)  // 'John'  没有删除

Object.defineProperty(person, 'name', {
    configurable: true  //报错
});

Object.defineProperty(person, 'name', {
    enumerable: 2  //报错
});

Object.defineProperty(person, 'name', {
    writable: true  //报错
});

Object.defineProperty(person, 'name', {
    value: 2  //报错
});
```
**注意:**
以上是最开始定义属性描述符时,writabl默认为false,才会出现上述效果,如果writable定义为true, 则可以修改[[writable]]和[[value]]属性值,修改另外两个属性值报错

```
var obj = {};

Object.defineProperty(obj, 'a', {
    configurable: false,
    writable: true,
    value: 1
});

Object.defineProperty(obj, 'a', {
    // configurable: true, //报错
    // enumerable: true,  //报错
    writable: false,
    value: 2
});
var d = Object.getOwnPropertyDescriptor(obj, 'a')
console.log(d);
// {
//     value: 2, 
//     writable: false, 
// }
```

### 在对象中添加存取描述符属性

```
var obj = {};
var aValue; //如果不初始化变量, 不给下面的a属性设置值,直接读取会报错aValue is not defined
var b;
Object.defineProperty(obj, 'a', {
    configurable : true,
    enumerable : true,
    get: function() {
        return aValue
    },
    set: function(newValue) {
        aValue = newValue;
        b = newValue + 1
    }
})
console.log(b) // undefined
console.log(obj.a)  // undefined, 当读取属性值时，调用get方法,返回undefined
obj.a = 2;  // 当设置属性值时,调用set方法,aValue为2

console.log(obj.a) // 2  读取属性值,调用get方法,此时aValue为2
console.log(b) // 3  再给obj.a赋值时,执行set方法,b的值被修改为2,额外说一句,vue中的计算属性就是利用setter来实现的
```
**注意:**
***1.getter和setter可以不同时使用,但在严格模式下只其中一个,会抛出错误***
***2.数据描述符与存取描述符不可混用,会抛出错误***
```
var obj = {};
Object.defineProperty(obj, 'a', {
    value: 'a1',
    get: function() {
       return 'a2'
    }    
});
```

***3.全局环境下:***
```
var a = 1;  // a属于window, 相当于window.a
```
让我们来看看a的描述符属性
```
var d = Object.getOwnPropertyDescriptor(window, 'a');
console.log(d)
// {
//     configurable: false,
//     value: 1,
//     writable: true,
//     enumerable: true
// }
```
在来看一下另一种不适用var声明的方式初始化a变量

```
a = 1; //a相当于window的一个属性, window.a
```
再来看看此时a的描述符属性
```
var d = Object.getOwnPropertyDescriptor(window, 'a');
console.log(d)
// {
//     configurable: true,   // 此时configurable属性值为true
//     value: 1,
//     writable: true,
//     enumerable: true
// }
```
**注意:**

只有使用var, let等操作符才是定义变量，而不使用var，直接a=1;,这样a的含义为window的一个属性，并不是我们所说的变量的概念。使用 var定义的任何变量，其configurable属性值都为false,定义对象也是一样

```
var b = {
    name: 'bbb'
}
var d = Object.getOwnPropertyDescriptor(window, 'b');
console.log(d)
// {
//     configurable: false
//     value: 1,
//     writable: true,
//     enumerable: true
// }
```
但是这里需要说明的一点是,使用字面量定义的对象,该对象内部的属性的数据描述符属性都为true
```
var b = {
    name: 'bbb'
}
var d = Object.getOwnPropertyDescriptor(b, 'name');
console.log(d)
// {
//     configurable: true
//     writable: true,
//     enumerable: true
//     value: 'bbb'
// }
```
## Writable

当writable为false(并且configrubale为true),[[value]]可以通过defineeProperty修改, 但不能直接赋值修改
```
var obj = {};

Object.defineProperty(obj, 'a', {
    configurable: true,
    enumerable: false,
    writable: false,
    value: 1
});

Object.defineProperty(obj, 'a', {
    configurable: false,
    enumerable: true,
    writable: false ,
    value: 2
});
var d = Object.getOwnPropertyDescriptor(obj, 'a')

console.log(d); // 结果如下
// {
//     value: 2, 
//     writable: false, 
//     enumerable: true, 
//     configurable: false
// }


但是如果直接复制修改
var obj = {}

Object.defineProperty(obj, 'a', {
    configurable: true,
    enumerable: false,
    writable: false,
    value: 1
});
o.a=2;
var d = Object.getOwnPropertyDescriptor(obj, 'a')

console.log(d); // 结果如下

// {
//     value: 1,  // 没有做出修改
//     writable: false, 
//     enumerable: true, 
//     configurable: false
// }
```

## Enumerable

直接上例子

```
var obj = {};
Object.defineProperties(obj, {
    a: {
        value: 1,
        enumerable: false
    }, 
    b: {
        value: 2,
        enumerable: true
    },
    c: {
        value: 3,
        enumerable: false
    }
})

obj.d = 4;

//等同于

//Object.defineProperty(obj, 'd', {
//    configurable: true,
//    enumerable: true,
//    writable: true,
//    value: 4
//})

for(var key in obj) {
    console.log(key);  
    // 打印一次b, 一次d, a和c属性enumerable为false，不可被枚举
} 

var arr = Object.keys(obj);
console.log(arr);  // ['b', 'd']

```
## get和set

### 简易的数据双向绑定

在线demo地址: http://www.sunzhaoye.com/demo/index.html

html代码:
```
<body>
    <p>
        input1=><input type="text" id="input1">
    </p>
    <p>
        input2=>
        <input type="text" id="input2">
    </p>
    <div>
        我每次比input1的值加1=>
        <span id="span"></span>
    </div>
</body>
```
js代码:
```
var oInput1 = document.getElementById('input1');
var oInput2 = document.getElementById('input2');
var oSpan = document.getElementById('span');
var obj = {};
Object.defineProperties(obj, {
    val1: {
        configurable: true,
        get: function() {
            oInput1.value = 0;
            oInput2.value = 0;
            oSpan.innerHTML = 0;
            return 0
        },
        set: function(newValue) {
            oInput2.value = newValue;
            oSpan.innerHTML = Number(newValue) ? Number(newValue) : 0
        }
    },
    val2: {
        configurable: true,
        get: function() {
            oInput1.value = 0;
            oInput2.value = 0;
            oSpan.innerHTML = 0;
            return 0
        },
        set: function(newValue) {
            oInput1.value = newValue;
            oSpan.innerHTML = Number(newValue)+1;
        }
    }
})
oInput1.value = obj.val1;
oInput1.addEventListener('keyup', function() {
    obj.val1 = oInput1.value;
}, false)
oInput2.addEventListener('keyup', function() {
    obj.val2 = oInput2.value;
}, false)
```
# 总结
终于到了最后了,就不具体梳理总结了。虽然我们在开过过程中不怎么使用几种方法，但理解之后对于我们理解js中对象有很大帮助,对后续进步也很有帮助,比如vue的实现原理等。个人能力有限,还希望大家发现问题后能多多指点,共同进步。