/*
 * @Author: nabaonan
 * @Date: 2023-09-07 09:54:29
 * @LastEditors: nabaonan
 * @LastEditTime: 2023-09-07 14:36:24
 * @FilePath: /amis-widget/src/main.ts
 * @Description: 
 */
import { createApp } from 'vue'
import './style.css'
import "amis/sdk/sdk.js";
import "amis/sdk/sdk.css";
import "amis/sdk/iconfont.css";
import "amis/sdk/helper.css";
import './filters/index.ts'

import App from './App.vue'
createApp(App).mount('#app')
