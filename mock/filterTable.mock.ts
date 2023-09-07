/*
 * @Author: nabaonan
 * @Date: 2023-09-07 10:08:18
 * @LastEditors: nabaonan
 * @LastEditTime: 2023-09-07 10:23:38
 * @FilePath: /amis-widget/mock/chooseApi.mock.ts
 * @Description: 
 */
import { defineMock } from 'vite-plugin-mock-dev-server'

export default defineMock({
  method: 'GET',
  url: '/mid-platform-devplatform/api/modeling/sql-dev/v1/ylDpModelingSqlDevParamTree/subapp/:id',
  body:[{
    "type": "DOMAIN",
    "name": "entity",
    "showName": "实体",
    "id": "domain_id3f7b_1",
    "children": [
      {
        "id": "interface_idef86_2",
        "type": "INTERFACE",
        "name": "用户",
        "showName": "用户",
        "children": [
          {
            "id": "fun_ide607_3",
            "type": "FUN",
            "name": "查询",
            "showName": "查询",
            "parentId": "interface_idef86_2",
            "sortOrder": 0,
            "inputParam": {
              "id": ""
            },
            "outputParam": "<pre>{\n  \"id\": \"string\",\n  \"get_ext\": {},\n  \"createTime\": \"2023-09-07T10:09:56\",\n  \"updateTime\": \"2023-09-07T10:09:57\",\n  \"creator\": \"string\",\n  \"modifier\": \"string\",\n  \"version\": 0,\n  \"name\": \"string\",\n  \"testRoleId\": \"string\"\n}</pre>",
            "url": "/api/v1/user",
            "method": "get"
          },
          {
            "id": "fun_id0cf1_4",
            "type": "FUN",
            "name": "修改",
            "showName": "修改",
            "parentId": "interface_idef86_2",
            "sortOrder": 0,
            "inputParam": {},
            "outputParam": "<pre>{\n  \"id\": \"string\",\n  \"get_ext\": {},\n  \"createTime\": \"2023-09-07T10:09:57\",\n  \"updateTime\": \"2023-09-07T10:09:57\",\n  \"creator\": \"string\",\n  \"modifier\": \"string\",\n  \"version\": 0,\n  \"name\": \"string\",\n  \"testRoleId\": \"string\"\n}</pre>",
            "url": "/api/v1/user",
            "method": "put"
          },
          {
            "id": "fun_id80d5_5",
            "type": "FUN",
            "name": "新增",
            "showName": "新增",
            "parentId": "interface_idef86_2",
            "sortOrder": 0,
            "inputParam": {},
            "outputParam": "<pre>{\n  \"id\": \"string\",\n  \"get_ext\": {},\n  \"createTime\": \"2023-09-07T10:09:57\",\n  \"updateTime\": \"2023-09-07T10:09:57\",\n  \"creator\": \"string\",\n  \"modifier\": \"string\",\n  \"version\": 0,\n  \"name\": \"string\",\n  \"testRoleId\": \"string\"\n}</pre>",
            "url": "/api/v1/user",
            "method": "post"
          },
          {
            "id": "fun_idaee6_6",
            "type": "FUN",
            "name": "删除",
            "showName": "删除",
            "parentId": "interface_idef86_2",
            "sortOrder": 0,
            "inputParam": {
              "id": ""
            },
            "outputParam": "<pre>{}</pre>",
            "url": "/api/v1/user",
            "method": "delete"
          },
          {
            "id": "fun_iddfe3_7",
            "type": "FUN",
            "name": "批量修改",
            "showName": "批量修改",
            "parentId": "interface_idef86_2",
            "sortOrder": 0,
            "inputParam": {},
            "outputParam": "<pre>{\n  \"id\": \"string\",\n  \"get_ext\": {},\n  \"createTime\": \"2023-09-07T10:09:57\",\n  \"updateTime\": \"2023-09-07T10:09:57\",\n  \"creator\": \"string\",\n  \"modifier\": \"string\",\n  \"version\": 0,\n  \"name\": \"string\",\n  \"testRoleId\": \"string\"\n}</pre>",
            "url": "/api/v1/user/batch",
            "method": "put"
          },
          {
            "id": "fun_idb392_8",
            "type": "FUN",
            "name": "批量新增",
            "showName": "批量新增",
            "parentId": "interface_idef86_2",
            "sortOrder": 0,
            "inputParam": {},
            "outputParam": "<pre>{\n  \"id\": \"string\",\n  \"get_ext\": {},\n  \"createTime\": \"2023-09-07T10:09:57\",\n  \"updateTime\": \"2023-09-07T10:09:57\",\n  \"creator\": \"string\",\n  \"modifier\": \"string\",\n  \"version\": 0,\n  \"name\": \"string\",\n  \"testRoleId\": \"string\"\n}</pre>",
            "url": "/api/v1/user/batch",
            "method": "post"
          },
          {
            "id": "fun_id763d_9",
            "type": "FUN",
            "name": "删除",
            "showName": "删除",
            "parentId": "interface_idef86_2",
            "sortOrder": 0,
            "inputParam": {},
            "outputParam": "<pre>undefined</pre>",
            "url": "/api/v1/user/batch",
            "method": "delete"
          },
          {
            "id": "fun_id8fde_10",
            "type": "FUN",
            "name": "分页无条件查询",
            "showName": "分页无条件查询",
            "parentId": "interface_idef86_2",
            "sortOrder": 0,
            "inputParam": {
              "current": "",
              "size": "",
              "page": "",
              "perPage": "",
              "searchCount": ""
            },
            "outputParam": "<pre>{\n  \"records\": [\n    {\n      \"id\": \"string\",\n      \"get_ext\": {},\n      \"createTime\": \"2023-09-07T10:09:57\",\n      \"updateTime\": \"2023-09-07T10:09:57\",\n      \"creator\": \"string\",\n      \"modifier\": \"string\",\n      \"version\": 0,\n      \"name\": \"string\",\n      \"testRoleId\": \"string\"\n    }\n  ],\n  \"total\": 0,\n  \"size\": 0,\n  \"current\": 0,\n  \"orders\": [\n    {\n      \"column\": \"string\",\n      \"asc\": true\n    }\n  ],\n  \"optimizeCountSql\": true,\n  \"searchCount\": true,\n  \"optimizeJoinOfCountSql\": true,\n  \"countId\": \"string\",\n  \"maxLimit\": 0,\n  \"pages\": 0\n}</pre>",
            "url": "/api/v1/user/page",
            "method": "get"
          },
          {
            "id": "fun_id7a94_11",
            "type": "FUN",
            "name": "分页有条件查询",
            "showName": "分页有条件查询",
            "parentId": "interface_idef86_2",
            "sortOrder": 0,
            "inputParam": {
              "current": "",
              "size": "",
              "page": "",
              "perPage": "",
              "searchCount": "",
              "varToNull": ""
            },
            "outputParam": "<pre>{\n  \"records\": [\n    {\n      \"id\": \"string\",\n      \"get_ext\": {},\n      \"createTime\": \"2023-09-07T10:09:57\",\n      \"updateTime\": \"2023-09-07T10:09:57\",\n      \"creator\": \"string\",\n      \"modifier\": \"string\",\n      \"version\": 0,\n      \"name\": \"string\",\n      \"testRoleId\": \"string\"\n    }\n  ],\n  \"total\": 0,\n  \"size\": 0,\n  \"current\": 0,\n  \"orders\": [\n    {\n      \"column\": \"string\",\n      \"asc\": true\n    }\n  ],\n  \"optimizeCountSql\": true,\n  \"searchCount\": true,\n  \"optimizeJoinOfCountSql\": true,\n  \"countId\": \"string\",\n  \"maxLimit\": 0,\n  \"pages\": 0\n}</pre>",
            "url": "/api/v1/user/page",
            "method": "post"
          },
          {
            "id": "fun_id28a0_12",
            "type": "FUN",
            "name": "查询全部数据",
            "showName": "查询全部数据",
            "parentId": "interface_idef86_2",
            "sortOrder": 0,
            "inputParam": {},
            "outputParam": "<pre>{\n  \"id\": \"string\",\n  \"get_ext\": {},\n  \"createTime\": \"2023-09-07T10:09:57\",\n  \"updateTime\": \"2023-09-07T10:09:57\",\n  \"creator\": \"string\",\n  \"modifier\": \"string\",\n  \"version\": 0,\n  \"name\": \"string\",\n  \"testRoleId\": \"string\"\n}</pre>",
            "url": "/api/v1/user/list",
            "method": "get"
          },
          {
            "id": "fun_id0278_13",
            "type": "FUN",
            "name": "查询符合条件数据",
            "showName": "查询符合条件数据",
            "parentId": "interface_idef86_2",
            "sortOrder": 0,
            "inputParam": {
              "varToNull": ""
            },
            "outputParam": "<pre>{\n  \"id\": \"string\",\n  \"get_ext\": {},\n  \"createTime\": \"2023-09-07T10:09:57\",\n  \"updateTime\": \"2023-09-07T10:09:57\",\n  \"creator\": \"string\",\n  \"modifier\": \"string\",\n  \"version\": 0,\n  \"name\": \"string\",\n  \"testRoleId\": \"string\"\n}</pre>",
            "url": "/api/v1/user/list",
            "method": "post"
          },
          {
            "id": "fun_id6f46_14",
            "type": "FUN",
            "name": "excel导入",
            "showName": "excel导入",
            "parentId": "interface_idef86_2",
            "sortOrder": 0,
            "inputParam": {},
            "outputParam": "<pre>{}</pre>",
            "url": "/api/v1/user/import",
            "method": "post"
          },
          {
            "id": "fun_ida992_15",
            "type": "FUN",
            "name": "excel导出",
            "showName": "excel导出",
            "parentId": "interface_idef86_2",
            "sortOrder": 0,
            "inputParam": {
              "condition": ""
            },
            "outputParam": "<pre>undefined</pre>",
            "url": "/api/v1/user/export",
            "method": "post"
          },
          {
            "id": "fun_id3ce8_16",
            "type": "FUN",
            "name": "excel导出",
            "showName": "excel导出",
            "parentId": "interface_idef86_2",
            "sortOrder": 0,
            "inputParam": {
              "qo": ""
            },
            "outputParam": "<pre>undefined</pre>",
            "url": "/api/v1/user/export/customized",
            "method": "post"
          },
          {
            "id": "fun_id0443_17",
            "type": "FUN",
            "name": "删除",
            "showName": "删除",
            "parentId": "interface_idef86_2",
            "sortOrder": 0,
            "inputParam": {},
            "outputParam": "<pre>undefined</pre>",
            "url": "/api/v1/user/batch/delete",
            "method": "post"
          },
          {
            "id": "fun_id3bbe_18",
            "type": "FUN",
            "name": "excel导入模板",
            "showName": "excel导入模板",
            "parentId": "interface_idef86_2",
            "sortOrder": 0,
            "inputParam": {},
            "outputParam": "<pre>undefined</pre>",
            "url": "/api/v1/user/import/template",
            "method": "get"
          }
        ]
      },
      {
        "id": "interface_idc2f0_19",
        "type": "INTERFACE",
        "name": "角色",
        "showName": "角色",
        "children": [
          {
            "id": "fun_idd3ad_20",
            "type": "FUN",
            "name": "查询",
            "showName": "查询",
            "parentId": "interface_idc2f0_19",
            "sortOrder": 0,
            "inputParam": {
              "id": ""
            },
            "outputParam": "<pre>{\n  \"id\": \"string\",\n  \"get_ext\": {},\n  \"createTime\": \"2023-09-07T10:09:57\",\n  \"updateTime\": \"2023-09-07T10:09:57\",\n  \"creator\": \"string\",\n  \"modifier\": \"string\",\n  \"version\": 0\n}</pre>",
            "url": "/api/v1/role",
            "method": "get"
          },
          {
            "id": "fun_id53d2_21",
            "type": "FUN",
            "name": "修改",
            "showName": "修改",
            "parentId": "interface_idc2f0_19",
            "sortOrder": 0,
            "inputParam": {},
            "outputParam": "<pre>{\n  \"id\": \"string\",\n  \"get_ext\": {},\n  \"createTime\": \"2023-09-07T10:09:57\",\n  \"updateTime\": \"2023-09-07T10:09:57\",\n  \"creator\": \"string\",\n  \"modifier\": \"string\",\n  \"version\": 0\n}</pre>",
            "url": "/api/v1/role",
            "method": "put"
          },
          {
            "id": "fun_id09a1_22",
            "type": "FUN",
            "name": "新增",
            "showName": "新增",
            "parentId": "interface_idc2f0_19",
            "sortOrder": 0,
            "inputParam": {},
            "outputParam": "<pre>{\n  \"id\": \"string\",\n  \"get_ext\": {},\n  \"createTime\": \"2023-09-07T10:09:57\",\n  \"updateTime\": \"2023-09-07T10:09:57\",\n  \"creator\": \"string\",\n  \"modifier\": \"string\",\n  \"version\": 0\n}</pre>",
            "url": "/api/v1/role",
            "method": "post"
          },
          {
            "id": "fun_id1478_23",
            "type": "FUN",
            "name": "删除",
            "showName": "删除",
            "parentId": "interface_idc2f0_19",
            "sortOrder": 0,
            "inputParam": {
              "id": ""
            },
            "outputParam": "<pre>{}</pre>",
            "url": "/api/v1/role",
            "method": "delete"
          },
          {
            "id": "fun_idab72_24",
            "type": "FUN",
            "name": "批量修改",
            "showName": "批量修改",
            "parentId": "interface_idc2f0_19",
            "sortOrder": 0,
            "inputParam": {},
            "outputParam": "<pre>{\n  \"id\": \"string\",\n  \"get_ext\": {},\n  \"createTime\": \"2023-09-07T10:09:57\",\n  \"updateTime\": \"2023-09-07T10:09:57\",\n  \"creator\": \"string\",\n  \"modifier\": \"string\",\n  \"version\": 0\n}</pre>",
            "url": "/api/v1/role/batch",
            "method": "put"
          },
          {
            "id": "fun_ide56b_25",
            "type": "FUN",
            "name": "批量新增",
            "showName": "批量新增",
            "parentId": "interface_idc2f0_19",
            "sortOrder": 0,
            "inputParam": {},
            "outputParam": "<pre>{\n  \"id\": \"string\",\n  \"get_ext\": {},\n  \"createTime\": \"2023-09-07T10:09:57\",\n  \"updateTime\": \"2023-09-07T10:09:57\",\n  \"creator\": \"string\",\n  \"modifier\": \"string\",\n  \"version\": 0\n}</pre>",
            "url": "/api/v1/role/batch",
            "method": "post"
          },
          {
            "id": "fun_id6050_26",
            "type": "FUN",
            "name": "删除",
            "showName": "删除",
            "parentId": "interface_idc2f0_19",
            "sortOrder": 0,
            "inputParam": {},
            "outputParam": "<pre>undefined</pre>",
            "url": "/api/v1/role/batch",
            "method": "delete"
          },
          {
            "id": "fun_id2047_27",
            "type": "FUN",
            "name": "分页无条件查询",
            "showName": "分页无条件查询",
            "parentId": "interface_idc2f0_19",
            "sortOrder": 0,
            "inputParam": {
              "current": "",
              "size": "",
              "page": "",
              "perPage": "",
              "searchCount": ""
            },
            "outputParam": "<pre>{\n  \"records\": [\n    {\n      \"id\": \"string\",\n      \"get_ext\": {},\n      \"createTime\": \"2023-09-07T10:09:57\",\n      \"updateTime\": \"2023-09-07T10:09:57\",\n      \"creator\": \"string\",\n      \"modifier\": \"string\",\n      \"version\": 0\n    }\n  ],\n  \"total\": 0,\n  \"size\": 0,\n  \"current\": 0,\n  \"orders\": [\n    {\n      \"column\": \"string\",\n      \"asc\": true\n    }\n  ],\n  \"optimizeCountSql\": true,\n  \"searchCount\": true,\n  \"optimizeJoinOfCountSql\": true,\n  \"countId\": \"string\",\n  \"maxLimit\": 0,\n  \"pages\": 0\n}</pre>",
            "url": "/api/v1/role/page",
            "method": "get"
          },
          {
            "id": "fun_id2e57_28",
            "type": "FUN",
            "name": "分页有条件查询",
            "showName": "分页有条件查询",
            "parentId": "interface_idc2f0_19",
            "sortOrder": 0,
            "inputParam": {
              "current": "",
              "size": "",
              "page": "",
              "perPage": "",
              "searchCount": "",
              "varToNull": ""
            },
            "outputParam": "<pre>{\n  \"records\": [\n    {\n      \"id\": \"string\",\n      \"get_ext\": {},\n      \"createTime\": \"2023-09-07T10:09:57\",\n      \"updateTime\": \"2023-09-07T10:09:57\",\n      \"creator\": \"string\",\n      \"modifier\": \"string\",\n      \"version\": 0\n    }\n  ],\n  \"total\": 0,\n  \"size\": 0,\n  \"current\": 0,\n  \"orders\": [\n    {\n      \"column\": \"string\",\n      \"asc\": true\n    }\n  ],\n  \"optimizeCountSql\": true,\n  \"searchCount\": true,\n  \"optimizeJoinOfCountSql\": true,\n  \"countId\": \"string\",\n  \"maxLimit\": 0,\n  \"pages\": 0\n}</pre>",
            "url": "/api/v1/role/page",
            "method": "post"
          },
          {
            "id": "fun_ide03f_29",
            "type": "FUN",
            "name": "查询全部数据",
            "showName": "查询全部数据",
            "parentId": "interface_idc2f0_19",
            "sortOrder": 0,
            "inputParam": {},
            "outputParam": "<pre>{\n  \"id\": \"string\",\n  \"get_ext\": {},\n  \"createTime\": \"2023-09-07T10:09:57\",\n  \"updateTime\": \"2023-09-07T10:09:57\",\n  \"creator\": \"string\",\n  \"modifier\": \"string\",\n  \"version\": 0\n}</pre>",
            "url": "/api/v1/role/list",
            "method": "get"
          },
          {
            "id": "fun_id8307_30",
            "type": "FUN",
            "name": "查询符合条件数据",
            "showName": "查询符合条件数据",
            "parentId": "interface_idc2f0_19",
            "sortOrder": 0,
            "inputParam": {
              "varToNull": ""
            },
            "outputParam": "<pre>{\n  \"id\": \"string\",\n  \"get_ext\": {},\n  \"createTime\": \"2023-09-07T10:09:57\",\n  \"updateTime\": \"2023-09-07T10:09:57\",\n  \"creator\": \"string\",\n  \"modifier\": \"string\",\n  \"version\": 0\n}</pre>",
            "url": "/api/v1/role/list",
            "method": "post"
          },
          {
            "id": "fun_id1675_31",
            "type": "FUN",
            "name": "excel导入",
            "showName": "excel导入",
            "parentId": "interface_idc2f0_19",
            "sortOrder": 0,
            "inputParam": {},
            "outputParam": "<pre>{}</pre>",
            "url": "/api/v1/role/import",
            "method": "post"
          },
          {
            "id": "fun_id8f49_32",
            "type": "FUN",
            "name": "excel导出",
            "showName": "excel导出",
            "parentId": "interface_idc2f0_19",
            "sortOrder": 0,
            "inputParam": {
              "condition": ""
            },
            "outputParam": "<pre>undefined</pre>",
            "url": "/api/v1/role/export",
            "method": "post"
          },
          {
            "id": "fun_id17c4_33",
            "type": "FUN",
            "name": "excel导出",
            "showName": "excel导出",
            "parentId": "interface_idc2f0_19",
            "sortOrder": 0,
            "inputParam": {
              "qo": ""
            },
            "outputParam": "<pre>undefined</pre>",
            "url": "/api/v1/role/export/customized",
            "method": "post"
          },
          {
            "id": "fun_id84bb_34",
            "type": "FUN",
            "name": "删除",
            "showName": "删除",
            "parentId": "interface_idc2f0_19",
            "sortOrder": 0,
            "inputParam": {},
            "outputParam": "<pre>undefined</pre>",
            "url": "/api/v1/role/batch/delete",
            "method": "post"
          },
          {
            "id": "fun_id7a6d_35",
            "type": "FUN",
            "name": "excel导入模板",
            "showName": "excel导入模板",
            "parentId": "interface_idc2f0_19",
            "sortOrder": 0,
            "inputParam": {},
            "outputParam": "<pre>undefined</pre>",
            "url": "/api/v1/role/import/template",
            "method": "get"
          }
        ]
      }
    ]
  }]
})