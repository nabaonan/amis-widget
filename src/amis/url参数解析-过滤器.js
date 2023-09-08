/*
 * @Author: nabaonan
 * @Date: 2023-09-08 15:57:52
 * @LastEditors: nabaonan
 * @LastEditTime: 2023-09-08 16:15:59
 * @FilePath: /amis-widget/src/amis/url参数解析.js
 * @Description:
 */
export default {
  type: "page",
  data: {
    url: "http://www.baidu.com?name=123&age=456",
  },
  body: [
    {
      type: "tpl",
      tpl: "带解析的url完整路径是：${url}",
    },

    {
      type: "text",
      value: "\n解析好的数据是\n",
    },
    {
      type: "tpl",
      tpl: "${url|urlParams|json}",
    },
  ],
};
