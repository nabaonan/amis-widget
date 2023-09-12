/*
 * @Author: nbn
 * @Date: 2023-09-09 09:07:38
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-12 21:14:45
 * @FilePath: /amis-widget/src/amis-components/renderer/index.ts
 * @Description: 
 */



//引入所有的组件，注册事件在组件内部
const modules = import.meta.glob('./react_app/*.tsx')

for (const path in modules) {
  modules[path]()
}