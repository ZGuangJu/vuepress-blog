---
title: React 类组件的state生命周期
date: 2019-4-9
sidebar: 'auto'
tags:
 - react
 - class类
publish: true
---
[类组件的state生命周期图](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## 英文释义

## 挂载

```js
import React from 'react'
import { render } from 'react-dom'


/*
class（类）组件的生命周期

挂载
1. 构造函数  constructor() 初始化状态
2. render() 把虚拟dom变成真实dom并插入到文档树中。
3.componentDidMount() DOM挂载完成
- 组件的渲染顺序，父组件先渲染（父组件render之后）=> 子组件开始渲染 =>子组件挂载完成之后父组件才最后挂载完成

*/
class App extends React.Component {
    constructor() {
        super()
        this.state = { num: 1 }
        console.log('1 初始化挂载');

    }
    add = () => {
        this.setState({ num: this.state.num + 1 })
    }
    UNSAFE_componentWillMount() { //即将废弃
        console.log('2.5 组件即将挂载--即将废弃');
    }
    componentDidMount() {
        console.log('3 挂载完成');
    }
    render() {
        console.log('2 render 渲染');
        return (
            <div>
                <Child num={this.state.num} />
                <button onClick={this.add}>点击父组件加一</button>
            </div>
        );
    }
}
class Child extends React.Component {
    constructor() {
        super();
        this.state = {
            n: 1
        }
        console.log('1.1 子组件 初始化constructor');
    }
    //根据新的属性生成新的状态
    // 返回null 不更新任何状态
    static getDerivedStateFromProps(nextprops, prevstate) {
        //参数是新的props属性
        console.log('1.2 getDerivedStateFromProps');
        let { num } = nextprops;
        if (num === 2) {
            return {
                n: prevstate.n + 2
            }
        }
        return null

    }
    componentDidMount() {
        console.log('1.4 子组件 挂载完成');
    }
    render() {
        console.log('1.3 子组件 渲染');
        return <div>
            我是子组件
            {this.state.n}
            <br />
            父组件传过来的props是{this.props.num}
        </div>

    }
}
render(<App />, document.getElementById('root'))
```

## 更新

```js
import React from 'react'
import { render } from 'react-dom'
/*
class（类）组件的生命周期
更新
1. static getDerivedStateFromProps()

2. shouldComponentUpdate()是否继续 如果shouldComponentUpdate返回的是false，则不继续渲染，

3. render() 渲染

4. getSnapshotBeforeUpdate() 获取DOM更新前快照

5. componentDidUpdate() 更新完成
*/
class App extends React.Component {
    constructor() {
        super()
        this.state = { num: 1 }
        console.log('1 初始化挂载');
    }
    add = () => {
        this.setState({ num: this.state.num + 1 })
    }
    UNSAFE_componentWillMount() { //即将废弃
        console.log('2.5 组件即将挂载--即将废弃');
    }
    shouldComponentUpdate(nextProps, nextState) {
        // 询问组件是否需要更新，如果返回true 就返回更新，返回false不更新
        //参数 是新的属性和新的状态
        console.log(nextProps);
        console.log(nextState);
        console.log('更新1.0 询问组件是否需要更新 shouldComponentUpdate');
        return true
        // return false
    }
    componentDidMount() {
        console.log('3 挂载完成');
    }
    componentDidUpdate() {
        console.log('更新2.0 更新完成');
    }

    render() {
        console.log('2 render 渲染');
        return (
            <div>
                {/* <Child num={this.state.num} /> */}
                {this.state.num}
                <button onClick={this.add}>点击父组件加一</button>
            </div>
        );
    }
}
class Child extends React.Component {
    constructor() {
        super();
        this.state = {
            n: 1
        }
        console.log('1.1 子组件 初始化constructor');
    }
    //根据新的属性生成新的状态
    // 返回null 不更新任何状态
    static getDerivedStateFromProps(nextprops, prevstate) {
        //参数是新的props属性
        console.log('1.2 getDerivedStateFromProps');
        let { num } = nextprops;
        if (num === 2) {
            return {
                n: prevstate.n + 2
            }
        }
        return null
    }
    componentDidMount() {
        console.log('1.4 子组件 挂载完成');
    }
    render() {
        console.log('1.3 子组件 渲染');
        return <div>
            我是子组件
            {this.state.n}
            <br />
            父组件传过来的props是{this.props.num}
        </div>

    }
}
render(<App />, document.getElementById('root'))
```
