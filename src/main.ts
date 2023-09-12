/*
 * @Author: nbn
 * @Date: 2023-09-07 20:40:08
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-12 22:07:58
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

import * as monaco from "monaco-editor"
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker"
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker"
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker"
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker"
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker"

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === "json") {
      return new jsonWorker()
    }
    if (label === "css" || label === "scss" || label === "less") {
      return new cssWorker()
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return new htmlWorker()
    }
    if (label === "typescript" || label === "javascript") {
      return new tsWorker()
    }
    return new editorWorker()
  }
}

loader.config({
  monaco,

  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.38.0/min/vs',
  },
})




import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(router)
app.mount('#app')
