/*
 * @Author: nbn
 * @Date: 2023-09-06 21:03:35
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-06 21:18:51
 * @FilePath: /amis-widget/mock/test.mock.ts
 * @Description: 
 */
import { defineMock } from 'vite-plugin-mock-dev-server'

export default defineMock({
  url: '/api/test',
  body: { a: 1, b: 7777 }
})