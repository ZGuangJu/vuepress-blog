---
title: React createContext 上下文
date: 2019-4-9
sidebar: 'auto'
tags:
 - react
 - createContext
publish: true
---
## createContext 上下文传值

组件间跨层级传值（`class`和函数组件都可以）
使用`createContext`中的两个模块 `Provide`（提供者） `Consumer`（消费者）

1. 创建上下文对象 `createContext()`

在组件外面初始化

```jsx
const ThemContext = React.createContext() //初始化上下文对象
//ThemContext 是自定义名称
```

2. 使用

- 2.1 发送
祖先级组件用`<ThemContext.Rrovide></ThemContext.Rrovide>`(`XXX.Provider`)包裹，通过`value`属性进行数据传递。要传递的数据和方法都用`value={}`中的`{}`包起来。

```jsx
// 在A组件里向外传递数据和方法
class App extends React.Component {
    render() {
        return <ThemContext.Provider value={{ money: this.state.money, consumMoney: this.consumMoney }} >
            上下文
        </ThemContext.Provider>
    }
}
```

- 2.2 接收(并使用)
`static contextType = ThemContext`
接收数据的组件 通过定义 `static contextType` = 定义的上下文对象 传递的属性会挂载到`this.context`上面

```jsx
class Crondson extends React.Component {
    // 接收上下文对象
    static contextType = ThemContext
    render() {
        console.log(this.context);
        console.log(ThemContext);
        return <div >
            {this.context.money}
            孙子组件
            <button onClick={() => this.context.consumMoney(10)}>花钱</button>
        </div>
    }
}
```

```jsx
import React from 'react'
import { render } from 'react-dom'
const ThemContext = React.createContext() //初始化上下文对象
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            money: 100
        }
    }
    consumMoney = (money) => {
        this.setState({
            money: this.state.money - money
        })
    }
    render() {
        // 把传递数据的组件用Rrovide包裹，通过value 属性进行数据传递。
        return <ThemContext.Provider value={{ money: this.state.money, consumMoney: this.consumMoney }} >
            上下文
            <Children />
        </ThemContext.Provider>
    }
}
class Children extends React.Component {

    render() {
        return <div >
            子组件
            <Crondson />
        </div>
    }
}
class Crondson extends React.Component {
    // 接收上下文对象
    static contextType = ThemContext
    render() {
        console.log(this.context);
        console.log(ThemContext);
        return <div >
            {this.context.money}
            孙子组件
            <button onClick={() => this.context.consumMoney(10)}>花钱</button>
        </div>
    }
}
render(<App />, document.getElementById('root'))
```

## 案例

:::details 案例 上下文传递数据

```jsx
import React from 'react'

import { render } from 'react-dom'
//  跨层级通信
// 定义上下文对象
let theme = React.createContext()
//这个方法里有两个参数 { Provider ,Consumer }
// 一个父组件 三个孙组件
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            money: 100
        }
    }
    Sum = (item) => {
        if (this.state.money !== 0) {
            this.setState({
                money: this.state.money - item
            })
        }
    }
    render() {
        // 上层组件通过Provider 组件的value 给下级提供数据和方法
        return <>
            <theme.Provider value={{ money: this.state.money, Sum: this.Sum }}  >
                爷爷
                <br />
                <Children />
            </theme.Provider>
        </>
    }
}
class Children extends React.Component {
    render() {
        return <>儿子
            <br />
            <Grandson1 />
            <br />
            <Grandson2 />
            <br />
            <Grandson3 />
        </>
    }
}
// 下级组件通过 static contextType = [上下文对象] ，这样就能让this.context 拿到 上下文对象传递过来的值
class Grandson1 extends React.Component {
    static contextType = theme
    render() {
        return <>大孙子{this.context.money}<button onClick={() => this.context.Sum(10)}>花钱</button></>
    }
}
class Grandson2 extends React.Component {
    render() {
        return (<theme.Consumer>
            {(value) => {
                return <>二孙子{value.money}<button onClick={() => value.Sum(10)}>花钱</button></>
            }}
        </theme.Consumer>)
    }
}
function Grandson3() {
    return (<theme.Consumer>
        {(value) => {
            return <>小孙子{value.money}<button onClick={() => value.Sum(10)}>花钱</button></>
        }}
    </theme.Consumer>)
}
render(<App />, document.getElementById('root'))
```

:::
