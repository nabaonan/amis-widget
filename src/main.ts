/*
 * @Author: nabaonan
 * @Date: 2023-09-07 09:54:29
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-07 23:28:38
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

import App from './App.vue'
// import AmisEditor from './components/AmisEditor.vue';
createApp(App).mount('#app')
