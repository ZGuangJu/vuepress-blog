---
title: React 组件 组件State
date: 2019-4-3
sidebar: 'auto'
tags:
 - react
publish: true
---
## 组件状态 state

组件自己的数据 类组件里的`State`

```jsx
// 定义类组件
class my extends Component{
constructor(){
    // constructor构造函数可以不写，但是写了constructor函数，构造函数里必须用super
super()
this.state={feeling:'不好'} // 定义初始化状态
}
// render负责渲染 想渲染什么通过render里面的 return 写jsx
render(){
    return <>
    <div>我今天心情{{this.state.feeling}}</div>
    </>
}
}
render(<my></my>,document.getElementById('rood'))
// <my></my> 可以但标签也可以双标签
```

## 事件的写法

### 第一种写法（bind是最老的写法）

```jsx
class My extends Component {
    constructor() {

        super()
        this.state = { feeling: '不好' }
    }
    handleClick() { //定义的事件
        alert(1)
    }
    render() {
        return <>
            <div>我今天心情{this.state.feeling}</div>
            <button onClick={this.handleClick.bind(this)}>点击改变心情</button>
        // 用bind防止丢失this
        </>
    }
}
render(<My></My>, document.getElementById('rood'))
```

### 第二种写法（通过es7解决this问题）

最方便，最优雅的写法（推荐使用）

```jsx
class my extends Component {
    constructor() {
        super()
        this.state = { feeling: '不好' }
    }
    handleClick = () => { //定义的事件(箭头函数将this指向上一级)
        alert(1)
    }
    render() {
        return <>
            <div>我今天心情{this.state.feeling}</div>
            <button onClick={this.handleClick}>点击改变心情</button>
        </>
    }
}
render(<my></my>, document.getElementById('rood'))
```

或者

```js
import React from 'react';
import { render } from 'react-dom';
class Counter extends React.Component {
    constructor() {
        super()
        this.state = { number: 1 }
    }
    add() {
        // 事件
        alert(1)
    }
    render() {
        return <>
            <div>{this.state.number}</div>
            <button onClick={() => this.add()}>点击加1</button>
        </>

    }
}
render(<Counter></Counter>, window.root)
```

### 第三种写法(事件定义在构造函数里)

性能最好的写法

```jsx
class My extends Component {
    constructor() {
        super()
        this.state = { feeling: '不好' }
        this.handleClick = function () { //定义的事件(在构造函数里赋值一次，构造函数this指向当前实例不会丢失)
            alert(1)
        }
    }

    render() {
        return <>
            <div>我今天心情{this.state.feeling}</div>
            <button onClick={this.handleClick}>点击改变心情</button>
        </>
    }
}
render(<My></My>, document.getElementById('rood'))
```

- 改变`state`状态（`setState({})`方法）

```jsx
class My extends Component {
    constructor() {
        super()
        this.state = { feeling: '不好' }
    }
    handleClick = () => { //箭头函数的方法
        // react 类组件的 state 状态修改必须通过this.setState({})方法
        this.setState({ feeling: '非常好' })
    }
    render() {
        return <>
            <div>我今天心情{this.state.feeling}</div>
            <button onClick={this.handleClick}>做了XX事心情变{this.state.feeling}了</button>
        </>
    }
}
render(<My></My>, document.getElementById('rood'))
```

## State 异步语法

当执行以下代码时，并不能从`1`增加到`3`也就是两个函数，只执行了一个。

```jsx
import React from 'react';
import { render } from 'react-dom';
class Counter extends React.Component {
    constructor() {
        super()
        this.state = { number: 1 }
    }
    add() {
        // 事件
        // this.setState是异步的，
        this.setState({ number: this.state.number + 1 })
        this.setState({ number: this.state.number + 1 })
        // this.forceUpdate()   //不管数据有没有改变，都强制更新
        console.log(this.state);
    }
    render() {
        return <>
            <div>{this.state.number}</div>
            <button onClick={() => this.add()}>点击加1</button>
        </>
    }
}
render(<Counter></Counter>, window.root)
```

用上面的方法，因为`setState()`方法时异步执行的，so 当第二个`setState()`执行时，原值还是`1`，并没有增加到`2`。所以增加的值是2.
但是通过`prevState`参数，加`1`后，就可以从`1`加到`3` 两个方法都执行了，所以是加到了`3`.

```jsx
import React from 'react';
import { render } from 'react-dom';
class Counter extends React.Component {
    constructor() {
        super()
        this.state = { number: 1 }
    }
    add() {
        // 事件
        this.setState((prevState) => ({
            number: prevState.number + 1
        }), () => {
            // 第二个回调函数能拿到state最新的值
            console.log(this.state);
        })
        this.setState((prevState) => ({
            number: prevState.number + 1
        }))
        // prevState表示的是上一次的状态
    }
    render() {
        return <>
            <div>{this.state.number}</div>
            <button onClick={() => this.add()}>点击加1</button>
        </>
    }
}
render(<Counter></Counter>, window.root)
```

## 组件的传值 props

组件传值 props 只能从上到下传递 继承的关系（父传子）

- 类组件

```jsx
// 类组件
import React from 'react';
import { render } from 'react-dom';

class Student extends React.Component {
    constructor(props) {
        super(props); //this.props=props
    }
    render() {
        return (
            <>
                姓名 - {this.props.name},
                年龄 - {this.props.age}岁,
                性别 - {this.props.sex},
            </>
        )
    }
}
let li = {
    name: '李雷',
    age: '8',
    sex: '男'
}
class Students extends React.Component {
    render() {
        return (
            <>
                <Student {...li} ></Student>
                <Student name='张广聚' age='9' sex='男'></Student>
                <Student></Student>
            </>// {...li} 常用在，传递到属性值多的时候
        )
    }
}
render(<><Students></Students></>, window.root) //渲染函数组件和类组件
```

- 函数组件

```jsx
// 函数组件
import React from 'react';
import { render } from 'react-dom';
// 方式一
function Student1(props) { //函数组件里用参数传值
    return <>
        <div>我是函数组件
                姓名 - {props.name} ,
                年龄 - {props.age}岁,
                性别 - {props.sex},
        </div>
    </>
}
// 方式二
function Student2({ name, age, sex }) { //函数组件里用参数传值(将参数解构出来)
    return <>
        <div>我是函数组件
                姓名 - {name} ,
                年龄 - {age}岁,
                性别 - {sex},
        </div>
    </>
}

render(<><Student1></Student1><Student2 name='王子豪' age={3} sex='未知' ></Student2></>, window.root) //渲染函数组件或类组件
```

## 条件渲染 和 循环渲染

- 条件渲染 通过判断来决定事件渲染(写三元表达式和if-else)

```jsx
import React from 'react';
import { render } from 'react-dom';
// 三元 &&
const A = 1
function My() {
    // return A ? (<div>这是div</div>) : '否'
    return A && <div>这是div</div>
}
// if else
function My1() {
    if (A) {
        return <div>这是div</div>
    }
}
render(<><My1></My1></>, window.root) //渲染函数组件和类组件
```

- 循环渲染

```jsx
import React from 'react';
import { render } from 'react-dom';

let carlist = [
    { name: '苹果', price: '300', },
    { name: '橘子', price: '300', },
    { name: '芒果', price: '300', },
    { name: '月饼', price: '300', },
    { name: '西瓜', price: '300', },
]
// 一般不要使用索引作为 key ，一般用 id 作为 key，为了 domdiff
function Car() {
    return carlist.map((item, index) => {
        return <div key={index}>
            <p>名称:{item.name}</p>
            <p>价格:{item.price}</p>
        </div>
    })
}
render(<><Car></Car></>, window.root) //渲染函数组件或类组件
```

### 组件的文件命名

给组件起名字的时候，一定不要和原生的标签名一样，不然会报错
如果写的是一个组件，文件的后缀用 `.jsx`
如果写的是一个 `js` 文件，文件后缀用 `.js`

## App.js文件内容

```js
// 在组件中，react 核心库是用来解析生成虚拟DOM的，所以必须引入
import React from 'react'
// import 引入组件必须写在文件的最顶端（使用组件第二步共三步）
import Headers from './components/Header-box'
import Main from "./components/Main-box";
import Footer from './components/Footer'
/*
 1. 函数组件的基础
 function App() {
    // 函数里的返回值怎么写---用return
    return <div>你好</div>
}
 2. 基本布局
    <></> 这是一个占位符，它不会再页面上生成任何的标签，只起到一个包裹其他标签的作用
    在写组件的时候，如果有多个同级的标签，必须在同一个更标签里
 */
function App() {
    return (
        <>
            {/* 使用（使用组件第三步共三步） */}
            <Headers />
            <Main />
            <Footer />
        </>
    )
}
// 要用es6的模块
// import 是导入，被导入的组件一定要有导出
// export ： ex = exit  ； port = 端口/出口
export default App
```

## 组件本体

Header组件（其他两个同下） components/Header-box.jsx

```jsx
// 编写组件内容 （使用组件第一步共三步）
// 1，写组件，第一步 引入react
import React from 'react'
import './Head-box.css' // 引入css文件要写全名 加上.css
// 2. 写函数组件，-- es6 箭头函数
// export default 告诉引入的组件，这个组件里默认导出的就是这个函数
export default () => {
    return (
        <header className="header-box">
            <nav>
                <ul>
                    <li>首页</li>
                    <li>新闻</li>
                    <li>关于</li>
                </ul>
            </nav>
        </header>
    )
}
```
