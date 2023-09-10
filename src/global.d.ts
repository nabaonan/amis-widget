/*
 * @Author: nbn
 * @Date: 2023-09-06 21:37:22
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-10 11:46:52
 * @FilePath: /amis-widget/src/global.d.ts
 * @Description: 
 */

interface Window {
  amisRequire: (args: string) => AmisSdk;
  MonacoEnvironment: {
    getWorker: (...args: any) => any;
  }
}
// declare module 'lodash'