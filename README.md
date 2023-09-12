<!--
 * @Author: nbn
 * @Date: 2023-09-08 21:48:49
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-12 22:47:15
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
- [ ] 使用react的方式，点击按钮无法弹出dialog，报错如下
Uncaught (in promise) Error: dialog 动作执行失败，原因：'get' on proxy: property 'style' is a read-only and non-configurable data property on the proxy target but the proxy did not return its actual value (expected '#<Object>' but got '#<Object>')



