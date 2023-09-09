/*
 * @Author: nbn
 * @Date: 2023-09-09 09:07:38
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-09 10:59:49
 * @FilePath: /amis-widget/src/amis-components/renderer/index.ts
 * @Description: 
 */
let amisLib = window.amisRequire('amis');
import Stomp from './react_app/Stomp'
// import { StompStore } from './react_app/StompStore'
console.log('amisLib', amisLib)


// const amisLib = window.amisRequire('amis');

amisLib.iRendererStore.named('StompStore')

amisLib.Renderer({
  test: /(^|\/)stomp/,
  type: "stomp",
  autoVar: true,
  // storeType: "StompStore",
  // storeExtendsData: true,
  // isolateScope: true,
})(
  Stomp
);