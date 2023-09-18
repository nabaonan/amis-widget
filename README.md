<!--
 * @Author: nbn
 * @Date: 2023-09-08 21:48:49
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-18 22:07:30
 * @FilePath: /amis-widget/README.md
 * @Description: 
-->

# 这是一个用来收集amis常用小组件的项目

## 技术栈:    vue3   ts  amis3   vite4  veauty



## 项目初衷：

- 保留常用组件，方便复用
- 探索amis和vue3的结合能力
- 受不了页面编辑器无法热更新的痛点，我要vite极速热更新



## 要做的

- [ ] amisRender封装对外暴漏的sdk方法，可以通过ref进行实例调用

- [x] 实现实时预览，左侧json编辑框，右侧预览页面（playground）

- [x] 增加json比对，左右查看不同的配置

- [ ] 实现一键js转json，可以直接保存到页面编辑器中

- [x] 本地模拟mock数据(已经集成mockServer)

- [x] 增加amis-editor

- [x] 增加react版本渲染器  (弹框渲染有问题)

- [ ] mock server替换成nitro

- [x] 集成vue-router路由，模块做分离，拦截异常页面跳转

- [x] 使用tsx自定义组件，编辑器自定义组件的配置，自定义store注册 




## 存在的问题

- [ ] 使用sdk方式，当引入tinymce组件或者json组件的时候会报错，找不到依赖
sdk.js:9     GET http://127.0.0.1:5173/node_modules/.vite/deps/tinymce.js net::ERR_ABORTED 504 (Outdated Optimize Dep)
- [x] 使用react的方式，点击按钮无法弹出dialog，报错如下
Uncaught (in promise) Error: dialog 动作执行失败，原因：'get' on proxy: property 'style' is a read-only and non-configurable data property on the proxy target but the proxy did not return its actual value (expected '#<Object>' but got '#<Object>')
解决：使用toRaw将传入的响应式对象转换为普通json就行了
- [ ] react模式，table渲染报错：
  ```
  mobxreact.esm.js:319 Uncaught TypeError: Cannot read properties of undefined (reading 'length')
      at Table3.render (index.js:1567:152)
      at allowStateChanges (mobx.module.js:1015:15)
      at mobxreact.esm.js:312:21
      at trackDerivedFunction (mobx.module.js:801:24)
      at Reaction2.track (mobx.module.js:1833:22)
      at TableRenderer.reactiveRender [as render] (mobxreact.esm.js:310:14)
      at TableRenderer.makeComponentReactive (mobxreact.esm.js:325:25)
      at target.render (mobxreact.esm.js:238:34)
      at finishClassComponent (react-dom.development.js:17485:31)
      at updateClassComponent (react-dom.development.js:17435:24)
      
  ```
- [ ] sdk模式无法使用自定义的纯函数组件，报错如下
  ```
  Test.tsx:15 Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
  1. You might have mismatching versions of React and the renderer (such as React DOM)
  2. You might be breaking the Rules of Hooks
  3. You might have more than one copy of React in the same app
  See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
  
  sdk.js:770 TypeError: Cannot read properties of null (reading 'useState')
      at useState (react.development.js:1622:21)
      at Test (Test.tsx:15:29)
      at Xh (sdk.js:748:139)
      at Wk (sdk.js:871:339)
      at Vk (sdk.js:861:391)
      at Uk (sdk.js:861:322)
      at Jk (sdk.js:861:182)
      at Ok (sdk.js:852:90)
      at Hk (sdk.js:849:431)
      at J (sdk.js:554:205)
  ```











