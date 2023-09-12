/*
 * @Author: nbn
 * @Date: 2023-09-09 09:07:38
 * @LastEditors: nabaonan
 * @LastEditTime: 2023-09-12 19:06:23
 * @FilePath: /amis-widget/src/amis-components/renderer/index.ts
 * @Description: 
 */


import registeRenderer from '../../utils/registeRenderer'
import Stomp from './react_app/Stomp'

registeRenderer(Stomp, {
  type: "stomp",
  autoVar: true,
  storeType: "StompStore",
  storeExtendsData: true,
  isolateScope: true,
  framework: 'vue3'
}, 'react')


// amisLib.Renderer({
//   type: "stomp",
//   autoVar: true,
//   storeType: "StompStore",
//   storeExtendsData: true,
//   isolateScope: true,
//   framework: 'vue3'
// })(Stomp);

// registeRenderer(Stomp, {
//   type: "stomp",
//   autoVar: true,
//   storeType: "StompStore",
//   storeExtendsData: true,
//   isolateScope: true,
//   framework: 'vue3'
// }, 'sdk')
