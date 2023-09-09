/*
 * @Author: nbn
 * @Date: 2023-09-09 14:41:00
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-09 15:15:26
 * @FilePath: /amis-widget/src/amis-components/store/StompStore.ts
 * @Description: 
 */
import {Instance} from 'mobx-state-tree';
import { RegisterStore, iRendererStore } from 'amis';
let amisLib = window.amisRequire('amis');



//react方式注册store
export const StompStore = iRendererStore
  .named('StompStore')
export type IStompStore = Instance<typeof StompStore>;
RegisterStore(StompStore)



//sdk方式注册store
const store = amisLib.iRendererStore.named('StompStore')

amisLib.RegisterStore(store)