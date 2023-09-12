// import { registerFilter } from 'amis';
/*
 * @Author: nabaonan
 * @Date: 2023-09-07 14:32:47
 * @LastEditors: nabaonan
 * @LastEditTime: 2023-09-12 15:52:46
 * @FilePath: /amis-widget/src/filters/index.ts
 * @Description: 
 */
const amisLib = window.amisRequire('amis');
import registeFilter from '../utils/registeFilter'

const customFilter: Record<string, (...args: string[]) => any> = {
  'highlight': (input: string, search: string) => {
    return typeof input === 'string' ? input.replace(search, `<span   style="background-color:yellow">${search}</span>`) : input
  },
  'urlParams': (url: string) => {

    const urlObj = new URL(url);
    const params = new URLSearchParams(urlObj.search);
    const paramObj: Record<string, any> = {};

    // 遍历参数并将其添加到对象中
    params.forEach((value, key) => {
      paramObj[key] = value;
    });

    return paramObj

  }
}


for (const key in customFilter) {
  registeFilter(key, customFilter[key])//react模式
  registeFilter(key, customFilter[key], 'sdk')//sdk模式
}