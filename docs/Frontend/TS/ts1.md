---
title: TS 基础
date: 2020-12-31
sidebar: 'auto'
categories:
 - 前端基础
tags:
 - TypeScript
publish: true
sticky: 6
# 打赏
showSponsor: true
---

## TS 介绍

`TypeScript`是已`Javascript`为基础架构的语言，可以在任何`javaScript`平台中执行。是`js`的超集，它扩展了`javascript`并添加了类型；但是`ts`不能被`js`解析器(浏览器)直接执行，必须编译中`js`代码，再执行。

<!-- more -->

### 特点

1. `ts`中添加了对变量了类型；
2. 支持`ES`的新特性及`ES`不具备的特性；
3. 丰富的配置选项，可以设置遵守`ts`特性或者`js`原特性，甚至是符合某个`ES`版本；
4. 配置了强大的开发工具。

## TS 环境搭建

1. 下载`Node.js`
2. 安装`Node.js`
3. 使用`npm`全局安装`typescript`
   - 进入`cmd`命令行

```s
npm i -g typescript
```

基础使用：

1. 创建一个`ts`文件
2. 使用`tsc`对`ts`文件进行编译
   - 进入命令行
   - 进入`ts`文件所在目录
   - 执行命令 `tsc xxx.ts`

## ts在vscode中编译

1. 在项目地址的命令行中输入,生成`tsconfig.json`

```js
  tsc --init
```

2. 在`tsconfig.json`中配置相应设置。比如：指定`js`编译的输出文件夹

```js
"target": "ES2015" //编译的js版本 如果不指定默认 ES3
"outDir": "./js" //输出的目录
···
```

3. 在`vscode`中使用<kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>B</kbd>，打开脚本命令
输入或选择 `tsc build(构建) XX项目名`，就会输出编译后的文件

## TS 类型

- 类型声明
  - 类型声明是`TS`非常重要的一个特点
  - 通过类型声明可以指定`TS`中变量（参数、形参）的类型
  - 指定类型后，当为变赋值时，`TS`编译器会自动检查值是否符合类型声明，符合则赋值，否则报错
  - 简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值o
  - 语法：

```js
// 指定变量的类型声明
// 给变量 a 指定类型
let a:number
// 1et 变量 : 类型
a = 1

// 1et 变量 : 类型 = 值
// 同样会将 b 指定为某一类型了
// 如果变量的声明和赋值是同时进行的，TS可以自定将自动对变量进行类型检测
let b = true
or
let b: boolean
b = true
or
let b: boolean = true

// js中的函数是不考虑参数的类型和个数的,指定参数类型和函数返回值类型
function fn(参数：类型，参数：类型)：类型{
 ···
}

function sum(a:number,b:number):number{
    return a + b
}
console.log(sum(123,456));
// console.log(sum(123,"456")); 报错
// console.log(sum(123,456,789)); 报错
// console.log(sum(123)); 报错

// 函数返回值类型可以多个
function fn():number | boolean{
    return 1
}
```

- 自动类型判断
  - `TS`拥有自动的类型判断机制
  - 当对变量的声明和赋值是同时进行的，`TS`编译器会自动判断变量的类型
  - 所以如果你的变量的声明稍赋值时同时进行的，可以省略掉类型声明

### TS 基本类型

- TS 中的类型

| 类型    | 例子            | 描述                           |
| :------ | :-------------- | :----------------------------- |
| number  | 1,-33,2.5       | 任意数字                       |
| string  | "hello",'hi'    | 任意字符串                     |
| boolean | true ,false     | 布尔值 true false              |
| 字面量  | 其本身          | 限制变量的值就是该字面量的值   |
| any     | *               | 任意类型                       |
| unknown | *               | 类型安全的any                  |
| void    | 空值(undefined) | 没有值(或undefined)            |
| never   | 没有值          | 不能是任何值                   |
| object  | {name:"zhang"}  | 任意的js对象                   |
| array   | [1,2,3]         | 任意js数组                     |
| tuple   | [4,5]           | 元素，TS新增类型，固定长度数组 |
| enum    | enum{A,B}       | 枚举，TS中新增类型             |

- 联合类型

给变量名指定某一个类型或值用`let j: "male"`，也可以指定多个不同类型；用`|`来连接多个类型。

```ts

// j 可以是布尔值或者是数组类型，就是联合类型
let j: "male" | "famale"
j = "male"
j = "famale"

let h: string | number | boolean
h = "abc"
h = 456
h = true

```

1. number

```ts
let d:number = 50 //数字
let c:number = oxfood
let big:bigint = 100n
```

2. string

```ts
let color:string = "blue"
let fullName:string = "bob"
```

3. 字面量

用字面量的方式进行类型声明(类似声明一个常量 如用`const c = 10`)

```ts
let colr = "red" | "blue" | "black"
let num = 1|2|3|4|5
let c = 10 // 可以指定为具体的值，但是c不能重新赋值其他数字值，只能是10了。基本不会这么用！！
c = 11 //报错
```

2. `any` 尽量避免使用

表示是任意类型，可以任意赋值。一个类型设置类型为`any`后，相对于对该变量关闭了`TS`类型检测。使用`TS`时不建议使用any类型。

```ts
// 显式 any
let d = any
d = 123
d = "123"
d = true
···
// 隐式 any
//声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any
let d
d = 123
d = "123"
d = true
```

3. `unknown`
`unknown` 是一个类型安全的`any`，`unknown`类型的变量，不能直接赋值给其他变量。
类似`any`,但是`any`可以影响别人，`unknown`不会影响

```ts
// any 时
let f:any
f = 1
f = "123"
let s:string
s = f

// unknown 时
let f:unknown
f = 1
f = "123"
let s:string
s = f // 报错

// 解决方式
let f:unknown
f = 1
f = "123"
let s:string
if(typeof s ==="string"){
    s = f
}
// or
// 类型断言 : 可以用来告诉解析器变量的实际类型。
let f:unknown
f = 1
f = "123"
let s:string

s = f as string
// 或者
s = <string>f
```

断言语法：

```ts
变量 as 类型
s = f as string
// 或者
变量 = <类型>变量
s = <string>f
```

4. `void` 设置函数返回值

```ts
// 返回值类型是 number
function fn():number{
    return 1
}
// 返回值类型是 boolean
function fn1():boolean{
    return true
}
// 返回值类型是 boolean
function fn1(){
    return true
}
···

// 函数有多个返回值 这个时候返回值类型是 123 | true
function fn2(num) {
    if(num >0){
        return 123
    }else{
        return true
    }
}

// 不指定时，函数返回值类型默认 void，就是 undefined
function fn3(){ } 等价于 function fn3():void { }

// 以下都表示void(空)的意思
function fn4():void { }
function fn5():void{ return undefined }
function fn7():void{ return }
```

5. `never`
没有值，用的少，抛出错误是用(函数执行不完，一定报错时)

```ts
function fn10():never{
throw new Error("报错了");
}
```

6. `object`
`a:object` 只是指定变量是一个对象，而`a:{}`用来指定对象中可以包含哪些具体属性。
语法：{属性名:属性值,属性名:属性值}

```ts
// 指定为 a:object 时，变量可以赋值任何对此的值
let a:object
a = {}
a = function(){}

// 指定为 b:{} 用来指定对象的属性，多或者少都不行
let b :{name:string}
b ={} // 报错
b = {name:"zhang",age:110}; //报错
b = {name:"zhang"};
// 次要属性可选
let b :{name:string,age:number}
b = {name:"zhang",age:110};  // 属性固定
// 在非必须的属性后加 ?,表示可有可无
let b :{name:string,age?:number}
b = {name:"zhang"};
b = {name:"zhang",age:110};

// 可以添加 name以外的其他任意属性
// [propName:string]:any 表示任意类型的属性
let c:{name:string,[propName:string]:any}
c = {name:"zhang",age:18,gender:"男"}

// 设置函数结构的类型声明
// 语法：(形参1:类型1,形参2:类型2,···)=>number
d = function(a1:number,b1:number):number{
    return a1+b1
} //两个参数且都为 number类型，函数返回值为 number
d = function(a1:string,b1:number):number{
    return a1+b1
} //报错
d = function(a1:number,b1:number,c1:number):number{
    return a1+b1
} //报错
```

7. `array`

对应类型的数组
语法：变量 :类型[]

```ts
//字符串数组
let e :string[]
e = [1,2,3,4] //报错
e = ['1','2','3'] // 必须是字符串类型的元素的数组
// 数字类型的数组
let f :number[]
f = ['1','2','3']//报错
f = [1,2,3,4]  //数字类型的数组
···
let g = Array<number> //等价于  g :number[]
g = [1,2,3,4,]
```

8. `tuple` 元组

元组:固定长度的数组。数组内容时固定的时候，适合用元组。

```ts
// 创建元组
let h :[string,string]

h = ["hello","123"] //正确
h = ["hello"] // 报错
h = ["hello","123","abc"] //报错
h = [123,"123"] // 报错
```

9. `enum` 枚举

```ts
// 常用作区分性别
let i :{name:string,gender:string}
i = {
    name:"zhang",
    gender:"男"
}
console.log(i.gender === "男");

// 区分是可以用 男 0 和 女 1 表示
let i :{name:string,gender:0|1}
i = {
    name:"zhang",
    gender:0
}
console.log(i.gender === 0);

// 性别 0或 1 没有约定的情况下，容易引起混乱
// 在多个值之间选择的时候，适用枚举，只是为了区分不同的选项，选项的具体值不重要，，当然也可以自自定义，比如Male=1,Famale=0
enum Gender{ // 枚举
    Male, // 默认0
    Famale // 默认1
}

let i :{name:string,gender:Gender}
i = {
    name:"zhang",
    gender:Gender.Male
}
console.log(i.gender === Gender.Male);
// Gender.Male 代码编译时会自动用 0 和 1替代
```

## 其他

- `|` 和 `&`

```ts
let q : number | string //表示 q可以是数字也可以是字符串

let w : number &  string  // 可以用但，没有意义 ，通常在以下情况使用

let w : {name:string} & {age:number} //表示 name是字符串，年龄是数字，且同时成立
w= {name :"zhang",age :45}
// 等价
let  r :{name:string,age:number}
r= {name :"zhang",age :45}
```

- 类型别名

多个变量用一个类型结构

```ts
// 语法
type myType = string
let x :myType  // string
let k :myType  // string
let l :myType  // string
type asType = 1|2|3|4|5
// 以下变量类型都是string时：
let x :asType  // 1|2|3|4|5
let k :asType  // 1|2|3|4|5
let l :asType  // 1|2|3|4|5
```

- 断言语法：

```ts
变量 as 类型
s = f as string
// 或者
变量 = <类型>变量
s = <string>f
```

## 英文解释

`tuple`: n.  元组，重数

`enum` : n. 枚举，枚举类型，枚举类
