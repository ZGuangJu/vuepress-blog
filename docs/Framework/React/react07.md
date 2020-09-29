---
title: React 受控组件与非受控组件
date: 2019-4-9
sidebar: 'auto'
tags:
 - react
 - class类
publish: true
---

## 受控组件 非受控组件 ref

受控组件：指DOM 元素是值受react的状态控制
非受控组件：指DOM 元素是值不受react的状态控制

### 受控组件

改变受控组件`input`的值 有两种方式，

1. 使用 `defaultValue`

```jsx
<input defaultValue={this.state.text} />
```

2. 使用 `onChange`事件

```jsx
 <input value={this.state.text} onChange={this.handler} />
```

解决报错三种的方式

1. 使用 `defaultValue`

```jsx
<input defaultValue={this.state.text} />
```

2. 使用 `readOnly` 只读 （只解决报错，不实现功能）

```jsx
<input value={this.state.text} readOnly />
```

3. 使用 `onChange`事件

```jsx
<input value={this.state.text} onChange={this.handler} />
```

```jsx
import React from 'react';
import { render } from 'react-dom';
/*
 Failed prop type: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
  */

class TextInput extends React.Component {
    constructor(prpos) {
        super(prpos);
        this.state = {
            text: "1"
        }
    }
    handler = (event) => {
        this.setState({ text: event.target.value })
    }
    render() {
        return <>
            <input value={this.state.text} onChange={this.handler} />
        </>
    }
}

render(<TextInput></TextInput>, window.root);
```

### 非受控组件

::: details ref老版方式
ref 老版方式一：

```jsx
import React from 'react';
import { render } from 'react-dom';
//非受控组件 ref 老版方式一：
class Sum extends React.Component {
    constructor(prpos) {
        super(prpos);
        this.state = {
            text: "1"
        }
    }
    add = () => {
        let a = this.refs.a.value
        let b = this.refs.b.value
        let sum = parseFloat(a) + parseFloat(b)
        this.refs.c.value = sum
        console.log(this.refs.a);
    }
    render() {
        return <>
            <input ref="a" />+ <input ref="b" />
            <button onClick={this.add}>等于</button>
            <input ref="c" />
        </>
    }
}

render(<Sum></Sum>, window.root);
```

ref 老版方式二：

```jsx
import React from 'react';
import { render } from 'react-dom';
//非受控组件 ref 老版方式二
class Sum extends React.Component {
    constructor(prpos) {
        super(prpos);
        this.state = {
            text: "1"
        }
    }
    add = () => {
        let a = this.a.value
        let b = this.b.value
        let sum = parseFloat(a) + parseFloat(b)
        this.c.value = sum
    }
    render() {
        return <>
            <input ref={a => this.a = a} /><input ref={b => this.b = b} />
            <button onClick={this.add}>等于</button>
            <input ref={c => this.c = c} />
        </>
    }
}

render(<Sum></Sum>, window.root);
```

:::

非受控组件 `createRef` (新版)
ref 可以是dom元素的引用也可以是组件的引用

1. 引入 `import React, { createRef } from 'react'`
2. 初始化

```jsx
 constructor() {
        super()
        //初始化 ref createRef()
        this.refA = createRef()
    }
```

3. 使用 reactDOM 中写： `ref={this.refA}`

```jsx
add = () => {
    console.log(this.refA);
        let A = this.refA.current.value
        let B = this.refB.current.value
        this.refC.current.value = parseFloat(A) + parseFloat(B)
    }
```

- 案例

```jsx
import React, { createRef } from 'react';
import { render } from 'react-dom';
//非受控组件 createRef

class Sum extends React.Component {
    constructor() {
        super()
        //初始化ref createRef
        this.refA = createRef()
        this.refB = createRef()
        this.refC = createRef()
    }
    add = () => {
        console.log(this.refA);
        let A = this.refA.current.value
        let B = this.refB.current.value
        this.refC.current.value = parseFloat(A) + parseFloat(B)
    }
    render() {
        return <>
            <input ref={this.refA} />+<input ref={this.refB} />
            <button onClick={this.add}>=</button>
            <input ref={this.refC} />
        </>
    }
}

render(<Sum a="4"></Sum>, window.root);
```

- 类组件 和 props 配合使用
:::details 子组件修改父组件 案例

```jsx
import React, { createRef } from 'react';
import { render } from 'react-dom';

class Parent extends React.Component {
    constructor() {
        super()
        this.inputRef1 = createRef()
        this.inputRef2 = createRef()
        // 父组件有张银行卡，两个儿子都可以存钱改变余额
        this.state = { money: 10000 }
    }
    getFocus1 = () => {
        this.inputRef1.current.inRef1.current.focus();
    }
    getFocus2 = () => {
        this.inputRef2.current.inRef2.current.focus();
    }
    // 父亲提供 一个改变自己余额的方法
    changeMoney = (x) => {
        this.setState({ money: this.state.money + x })
    }
    render() {
        return <div>
            父组件余额{this.state.money}
            <TextInput changeMoney={this.changeMoney} ref={this.inputRef1} />
            <button onClick={this.getFocus1}>焦点一</button>
            <TextInput2 changeMoney={this.changeMoney} ref={this.inputRef2} />
            <button onClick={this.getFocus2}>焦点二</button>
        </div>
    }
}
class TextInput extends React.Component {
    constructor() {
        super()
        this.inRef1 = createRef()
    }
    addMoney = () => {
        // 通过this.props，拿到父组件传过来的方法
        let SonMoney = parseFloat(this.inRef1.current.value)
        this.props.changeMoney(SonMoney)
    }
    render() {
        return <>
            我是input
            <input ref={this.inRef1} />
            <button onClick={this.addMoney}>大儿子存钱</button>
        </>
    }
}
class TextInput2 extends React.Component {
    constructor() {
        super()
        this.inRef2 = createRef()
    }
    addMoney2 = () => {
        // 通过this.props，拿到父组件传过来的方法
        let SonMoney = parseFloat(this.inRef2.current.value)
        this.props.changeMoney(SonMoney)
    }
    render() {
        return <>
            我是第二个input
            <input ref={this.inRef2} />
            <button onClick={this.addMoney2}>小儿子存钱</button>
        </>
    }
}
render(<Parent />, window.root);
```

:::

## 英文释义

- `ref ：reference` adj: 引用
