/*
 * @Author: nabaonan
 * @Date: 2023-09-12 15:44:29
 * @LastEditors: nabaonan
 * @LastEditTime: 2023-09-12 15:44:32
 * @FilePath: /amis-widget/src/utils/registeFilter.ts
 * @Description: 
 */
const amisLib = window.amisRequire('amis');

import { registerFilter } from 'amis';
export default (filterKey: string, filter: (...args: any[]) => any, type: 'sdk' | 'react' = 'react') => {


  if (type === 'react') {
    registerFilter(filterKey, filter)
  } else {
    amisLib.registerFilter(filterKey, filter)
  }
}