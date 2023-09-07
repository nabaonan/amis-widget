/*
 * @Author: nabaonan
 * @Date: 2023-09-07 11:45:50
 * @LastEditors: nabaonan
 * @LastEditTime: 2023-09-07 15:05:37
 * @FilePath: /amis-widget/src/amis/表格嵌套高亮显示.js
 * @Description:
 */
export default {
  type: "page",
  body: {
    type: "service",
    data: {
      search: "搜索",
      rows: [
        {
          title: "一级标题",
          grade: "X",
          id: 1,
          children: [
            {
              title: "这是个啥",
              grade: "X",
              id: 1001,
            },
            {
              title: " 搜索一下这个",
              grade: "C",
              id: 1002,
            },
          ],
        },
      ],
    },
    body: [
      {
        type: "tpl",
        tpl: "搜索的关键字=${search}",
      },
      {
        type: "table",
        expandConfig: {
          expand: "all",
        },
        source: "$rows",
        className: "m-b-none",
        columnsTogglable: false,
        columns: [
          {
            name: "title",
            label: "title",
            type: "html",
            html: '${name|highlight:${search}}',
          },
          {
            name: "grade",
            type: "html",
            html: '<p>${grade}</p>',
            label: "Grade",
          },
        ],
      },
    ],
  },
};
