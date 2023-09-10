/*
 * @Author: nbn
 * @Date: 2023-09-07 20:40:08
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-11 00:59:54
 * @FilePath: /amis-widget/src/main.ts
 * @Description: 
 */
/*
 * @Author: nabaonan
 * @Date: 2023-09-07 09:54:29
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-11 00:46:57
 * @FilePath: /amis-widget/src/main.ts
 * @Description: 
 */
import { createApp } from 'vue'
import './style.css'

//react专用
import 'amis/lib/themes/cxd.css';
import 'amis/lib/helper.css';
import 'amis/sdk/iconfont.css';
////////////////////


//sdk专用
import "amis/sdk/sdk.js";
import "amis/sdk/sdk.css";
import "amis/sdk/iconfont.css";
import "amis/sdk/helper.css";
//


import './filters/index.ts'
import './amis-components/renderer/index.ts'
import './amis-components/editor-plugin/index.ts'

import { loader } from '@guolao/vue-monaco-editor'
// import * as monaco from "monaco-editor";







import App from './App.vue'
import router from './router.ts'

const app = createApp(App)
loader.config({
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.38.0/min/vs',
  },
})
app.use(router)
app.mount('#app')
