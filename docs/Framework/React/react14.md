---
title: React Redux
date: 2020-10-26
sidebar: 'auto'
categories:
 - 前端框架
tags:
 - react
 - Redux
publish: true
---
Redux 状态管理

安装

```js
yarn add redux
```

```js
yarn add react-redux
```

初始化

```js
let store = createStore(reducer, state)
```

```js
// store/index.js
import React from 'react'
import { createStore } from 'redux'
// 参数里的初始化状态
let state = {
    name: "王子豪",
    name1: "王杰",
}
// 管理数据，修改状态
// state 初始状态 action  通过 action 的type判断动作类型。
function reducer(state, action) {
    switch (action.type) {
        case 'daH':
            return { ...state, name: `被打死的王子豪` }
        case 'daJ':
            return { ...state, name1: `被打${action.payload}的王杰` }
        default:
            return state
    }

}
// 初始化仓库 store （创建仓库的时候要告诉管理员（reducer）是谁、仓库里有什么（初始化状态state）
let store = createStore(reducer, state)
export default store
```

```js
// index.js
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// 引入通过 redux 创建的仓库
import store from '../store/index'

class App extends React.Component {
    constructor() {
        super()
        // 接收到的 state 状态
        this.state = {
            w: store.getState().name,
            j: store.getState().name1
        }
    }
    // 挂载完成
    componentDidMount() {
        // 订阅 subscribe 事件
        this.unsubscribe = store.subscribe(() => {
            // 修改状态
            this.setState({
                w: store.getState().name,
                j: store.getState().name1,
            })
        })
    }
    // 清除副作用
    componentWillUnmount() {
         this.unsubscribe()
    }
    render() {
        return <>
            {this.state.w}{this.state.j}
            <button onClick={() => store.dispatch({ type: 'daH' })}>打王子豪</button>
            <button onClick={() => store.dispatch({ type: 'daJ', payload: '哭' })}>打王杰</button>
        </>
    }
}
// dispatch()里的参数是传给 Action的
ReactDOM.render(<App></App>, document.getElementById('root')
);
```

将以上（index.js）文件拆分

```js
//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
// 通过react-redux的 Provider 传递仓库状态给子组件


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App ></App>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

```

```js
// App组件
import React from 'react';
import { connect } from 'react-redux';
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.name}
        {this.props.Wj}
        <button onClick={this.props.DW}>打王子豪</button>
        <button onClick={this.props.DJ}>打王杰</button>
      </div>
    );
  }
}

// mapStateToProps 是一个函数  映射状态到props上
// mapDispatchToProps 是一个函数 映射方法到props上
// const mapStateToProps = state=>({
//    name:state.name,
//    Wj:state.name1
// })

const mapDispatchToProps = (dispatch) => {
  return {
    DW: () => dispatch({ type: 'daH' }),
    DJ: () => dispatch({ type: 'daJ', payload: '哭了' }),
  };
};

export default connect(
  (state) => ({
    name: state.name,
    Wj: state.name1,
  }),
  (dispatch) => ({
    DW: () => dispatch({ type: 'daH' }),
    DJ: () => dispatch({ type: 'daJ', payload: '哭了' }),
  })
)(App);
// export default connect(mapStateToProps,mapDispatchToProps)(App)

```
