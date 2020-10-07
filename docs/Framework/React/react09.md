---
title: React Hook
date: 2019-4-9
sidebar: 'auto'
tags:
 - react
 - class类
publish: true
---
:::tip

- `React Hook`是在`v16.8.0`以后支持的
- 暂时只针对函数组件
:::
- 只在顶层调⽤`Hooks`

1. `Hooks`的调⽤尽量只在顶层作⽤域进⾏调⽤ 不要在循环，条件或者是嵌套函数中调⽤`Hook`，否则可能会⽆ 法确保每次组件渲染时都以相同的顺序调⽤`Hook`
2. 只在函数组件调⽤`Hooks`

`React Hooks`⽬前只⽀持函数组件，所以别在`class`组件或 者普通的函数⾥⾯调⽤`Hook`钩⼦函数 `React Hooks`的应⽤场景如下

1. 函数组件
2. ⾃定义`hooks`
函数组件 ⾃定义`hooks` 在未来的版本`React Hooks`会扩展到`class`组件，但是现阶段不能 再`class`⾥使⽤

## 基础Hook

`Hooks`里重要的基础的是`useState`、 `useEffect`、 `useEffect` 这三个

### 1. useState() 组件状态管理钩⼦

通过`useState`能让函数组件使⽤`state`

- 语法

```js
const [state, setState] = useState(initialState);
// 返回一个 state，以及更新 state 的函数
```

在初始渲染时，返回的状态 `state` 与传入的第一个参数 (`initialState`) 值相同
`state`:表示初始的状态或更新后的状态 / 要设置的状态
`setState`:用来修改状态的方法,只是⼀个⽅法名，可以随意更改（用于更新 `state`，接收一个新的 `state` 值并将组件的一次重新渲染加入队列）
`initialState`:在初始渲染时，与初始的状态相同,可以是任何数据类型，数字、字符、回调函数（有返回值即可）等

- 使用步骤

1. 引入

```js
import { useState } from 'react';
```

2. 初始化

```js
let [state, setState] = useState(() => {
        console.log('初始化');
        return 0
    })
```

3. 使用

```js
<button onClick={() => setState(state => state + 1)}>点击修改</button>
// 或者
 <button onClick={add}>点击</button> //调用一个函数，在函数里使用setState修改状态
```

- 完整案例

```js
import React, { useState } from 'react';
import { render } from 'react-dom';

function App() {
    let [state, setState] = useState(() => {
        console.log('初始化');
        return 0
    })
    function add() {
        setTimeout(() => {
            setState(state => state + 1)
        }, 1000);
    }
    // useState的参数是初始化的状态，参数名可以任意更改
    return <div>
        {state}
        <button onClick={() => setState(state => state + 1)}>点击修改</button>
        <button onClick={add}>点击</button>
    </div>
}
render(<App />, window.root)
```

### 2. useEffect() 副作⽤处理钩⼦

看[精讲useEffect](https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/)

数据获取、订阅、定时执⾏任务、⼿动修改`ReactDOM`这些⾏为都可以称为副作⽤。
`useEffect`就是为了处理这些副作⽤⽽⽣的 `useEffect`也相当于`componentDidMount`、 `componentDidUpdate`和`componentWillUnmount`这几个类组件⽣命周期⽅法的统⼀

- 语法

```js
 useEffect(callback,array);
//  下例
 useEffect(() =>{
  xxxxxx
 //副作⽤逻辑
 return ()=>{
 //类似在 componentWillUnmount 里做的事
 //清理副作⽤需要清理的内容
 //组件渲染和组件 卸载前执⾏的代码
 }
 },[])
```

接收一个包含命令式、且可能有副作用代码的函数

`callback`:
`array / []`:可选的，不是必须的；数组，⽤于控制`useEffect`的执⾏ 分三种情况：

1. 空数组，则只会执⾏⼀次（即初次渲染render）
2. ⾮空数组，`useEffect`会在数组发⽣改变后执⾏
3. 不填array这个数组，`useEffect`每次渲染都会执⾏

- 使用步骤

1. 引入

```js
import {useEffect} from 'react'
```

2. 使用

```js
function App() {
    let [count, setcount] = useState(0)
    useEffect(() => {
        document.title = `你点击${count}次`
    })

    return <div>
        <button onClick={() => setcount(count + 1)}>点击{count}</button></div>
}
```

```js
// 清除定时器案例
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
function App() {
    let [count, setcount] = useState(0)

    useEffect(() => {
        let timer = setInterval(() => {
            console.log(timer);
            setcount(count => count + 1)
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    },[]) //不写第二个参数 [],会在内部继续运行定时器，造成定时器积累
    return <div>useEffect</div>
}
render(<App />, window.root)
```

### 3. useContext() 使用上下文

```js

 const value = useContext(上下文对象);
```

相当于类组件的 `static contextType` = 上下问对象

### 4. useReducer()

`useState`的替代方案

- 语法

```js
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

`[state, dispatch]`:  `state` 状态  `dispatch` 派发
`reducer`:  是一个函数 接受派发过来的动作并返回新的`state`
`initialArg`: 是一个初始化的状态
`init`: 如果传递了第三个参数`init` 这样初始 `state` 将被设置为 `init(initialArg)`。

- reducer 函数

```js
function reducer(state, action) {
    if (action.type === 'add') {
        return { ...state, num: state.num + action.payload }
    } else if (action.type === 'sub') {
        return { ...state, num: state.num - 1 }
    } else {
        return state
    }
    // switch (action.type) {
    //     case 'add':
    //         return { ...state, num: state.num + action.payload }
    //     case 'sub':
    //         return { ...state, num: state.num - 1 }
    //     default:
    //         return state
    // }
}
```

- init

```js
// 定义init
function init(initialState) {
    return initialState
}
// 触发
<button onClick={() => dispatch({ type: 'add' })}
// dispatch({ type: 'add',payload:5 })
// type 是动作类型，相当于函数名 add
// payload 是传给add的参数
```

- 为啥用`init`?
这么做可以将用于计算 `state` 的逻辑提取到 `reducer` 外部，这也为将来对重置 `state` 的 `action` 做处理提供了便利

- 使用步骤

1. 引入

```js
import { useReducer } from 'react'
```

2. 使用

```js
 let [state, dispatch] = useReducer(reducer, initialState, init)
```

- 完整案例

```js
import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'

let initialState = {
    num: 0
}
// 参数 state action => dispatch 传过来的对象/动作(事件，称为动作，在本例种就是add、sub事件) ,可以根据type属性判断传过来的动作是什么，如果传递参数使用payload进行传递
function init(initialState) {
    return initialState
}
function reducer(state, action) {
    console.log(action);
    if (action.type === 'add') {
        return { ...state, num: state.num + action.payload }
    } else if (action.type === 'sub') {
        return { ...state, num: state.num - 1 }
    } else {
        return state
    }
}

function App() {
    console.log('render');
    let [state, dispatch] = useReducer(reducer, initialState, init)
    return <div>{state.num}
        <button onClick={() => dispatch({ type: 'add', payload: 5 })}>+</button>
        <button onClick={() => dispatch({ type: 'sub' })}>-</button>
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'))
```

### 5. useMemo()

- `React.memo`

:::details React.memo
`React`组件如果还是上一次的渲染结果，`React` 将跳过渲染组件的操作并直接复用最近一次渲染的结果。

1. 类组件 可以使用 PureComponent
2. 函数组件 可以用 React.memo(组件名)
React.memo 是一个高阶组件

```js
import React, { useState, PureComponent } from 'react'
import ReactDOM from 'react-dom'

function App() {
    const [name, setname] = useState('guangju')
    const [user, setuser] = useState('a')
    return <>
        <input value={name} onChange={(e) => setname(e.target.value)}></input>
        {name}
        <Memochild user={user} />
        <Memochild2 />
    </>
}
function Child() {
    console.log('child render');
    return <div>
        <button>点击</button>
    </div>
}
let Memochild = React.memo(Child)
class Child2 extends PureComponent {
    constructor() {
        super()
        console.log('二儿子');
    }

    render() {
        return <div>二儿子</div>
    }
}
let Memochild2 = React.memo(Child2)
ReactDOM.render(<App />, document.getElementById('root'))
```

:::

- 语法

```js
useMemo(callback,[deps])
```

`callback`: 回调函数，用来返回定义的状态
`[deps]`:一个数组，表示依赖项，用法和`useEffect`一样。
函数组件，如果子组件依赖父组件的数据，可以使用`useMemo`

```js
 let data = useMemo(() => { return { count } }, [count])
```

### 6. useCallback

```js
useCallback(callback,[deps])
//相当于 useMemo(()=>fn,[deps])
```

`callback`: 回调函数，放置子组件依赖的函数，减少更新
`[deps]`:
