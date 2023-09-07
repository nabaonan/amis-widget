/*
 * @Author: nabaonan
 * @Date: 2023-09-07 14:32:47
 * @LastEditors: nabaonan
 * @LastEditTime: 2023-09-07 15:06:31
 * @FilePath: /amis-widget/src/filters/index.ts
 * @Description: 
 */
import { registerFilter } from 'amis';


// console.log(amis)


const customFilter: Record<string, (...args: string[]) => any> = {
  'highlight': (input: string, search: string) => {
    console.log('走过滤器', input, search);
    return typeof input === 'string' ? input.replace(search, `<span   style="background-color:yellow">${search}</span>`) : input
  }
}


for (const key in customFilter) {
  registerFilter(key, customFilter[key])
}