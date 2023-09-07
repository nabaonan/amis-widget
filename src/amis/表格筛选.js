const btn = {
  type: "button",
  label: "选择接口",
  onEvent: {
    click: {
      actions: [
        {
          actionType: "dialog",
          dialog: {
            type: "dialog",
            title: {
              type: "flex",
              style: {
                width: "100%",
              },
              justify: "flex-start",
              alignItems: "flex-end",
              items: [
                {
                  type: "text",
                  value: "选择接口",
                },
                {
                  type: "text",
                  style: {
                    "margin-left": 10,
                    "font-size": 12,
                  },
                  value: "如果接口没发布则会调用失败，需要发布后重启沙箱",
                },
              ],
            },
            body: [
              {
                type: "tpl",
                id: "u:6bd9c34c1701",
                tpl: "${(_env==1?'主机':'沙箱')}接口地址: ${sandboxUrl}    ${sandboxUrl!=_host?'(HOST变量地址和'+(_env==1?'主机':'沙箱')+'接口地址不一致)': ''}",
                inline: true,
                wrapperComponent: "",
                style: {
                  boxShadow: "var(--shadows-shadow-none)",
                  "margin-bottom": 10,
                  color: "${sandboxUrl!=_host?'#FF598BFF': 'inherit'}",
                },
              },
              {
                type: "service",
                data: {
                  filterTree: [],
                  interList: [],
                },
                style: {
                  "margin-top": 10,
                },
                id: "treeWrapper",
                body: [
                  {
                    type: "flex",
                    id: "u:874aae18de36",
                    style: {
                      boxShadow: "var(--shadows-shadow-none)",
                      position: "relative",
                      inset: "auto",
                      padding: 0,
                      flexWrap: "nowrap",
                      overflowY: "auto",
                      flexDirection: "row",
                      alignItems: "flex-start",
                    },
                    className: "p-1",
                    items: [
                      {
                        type: "container",
                        body: [
                          {
                            "type": "input-text",
                            "placeholder": "请输入接口名称",
                            "style": {
                              marginBottom: 10
                            },
                            "addOn": {
                              "label": "",
                              "type": "text",
                              "id": "u:2a8d8e68d636",
                              "icon": "fa fa-search"
                            },
                            "onEvent": {
                              "change": {
                               
                                "actions": [
                                 
                                  {

                                    "actionType": "custom",
                                    "script": `
                              
                                    
                                    console.log('调用我',context);
                                    const searchValue = event.data.value;
                                 
                                    let filterResult = [];
                                    const filterTree = (search, tree = []) => {
                                      return tree.filter((item) => {
                                        item.children = filterTree(search, item.children);
                                        return item.children?.length || item.name.indexOf(search) !== -1;
                                      });
                                    };

                                    const cloneDeep = (source) => {
                                      var str = JSON.stringify(source); //序列化对象
                                      return JSON.parse(str); //还原

                                    }

                                    const target = []
                                    filterResult = filterTree(searchValue, cloneDeep(context.props.data.interList));

                                    console.log('过滤的结果是',filterResult)
                                    doAction({
                                      actionType: 'setValue',
                                      componentId: "treeWrapper",
                                      args: {
                                        value: {
                                          filterTree: filterResult
                                        }
                                      }
                                    });
                                    `
                                  }
                                ]
                              }

                            }
                          },
                          {
                            type: "table",
                            autoFillHeight: {
                              height: 400,
                            },
                            id: "u:017303070b4a",
                            columns: [
                              {
                                label: "方法名",
                                name: "name",
                                type: "flex",
                                justify: "flex-start",
                                items: [
                                  {
                                    type: "icon",
                                    style: {
                                      color: "rgb(154, 185, 255)",
                                      "margin-left": "4px",
                                      "margin-right": "5px",
                                    },
                                    icon: "${type=='DOMAIN'? 'fa-solid fa-inbox':  type=='INTERFACE'?'fa-regular fa-file-code':'fa-solid fa-code'}",
                                  },
                                  {
                                    type: "text",
                                    value: "$name",
                                  },
                                ],
                                id: "u:166e7fc875ef",
                              },
                              {
                                label: "调用方式",
                                name: "method",
                                type: "text",
                              },
                              {
                                type: "text",
                                label: "描述",
                                id: "u:66e4eac8a703",
                                name: "showName",
                                placeholder: "-",
                              },
                            ],
                            "expandConfig": {
                              expand: 'all'
                            },
                            source: "${filterTree}",
                            onEvent: {
                              rowClick: {
                                actions: [
                                 
                                  {
                                    componentId: "u:2da6ff378def",
                                    args: {
                                      value: {
                                        currentMethod: "${event.data.item}",
                                      },
                                    },
                                    actionType: "setValue",
                                    expression:
                                      "${event.data.item.type=='FUN'}",
                                  },
                                ],
                              },
                            },
                          },
                        ],
                        size: "xs",
                        style: {
                          padding: 0,
                          "margin-right": 10,
                          position: "static",
                          display: "block",
                          flex: "1 1 auto",
                          flexGrow: 1,
                          flexBasis: "auto",
                          boxShadow: "var(--shadows-shadow-none)",
                        },
                        wrapperBody: false,
                        isFixedHeight: false,
                        isFixedWidth: false,
                        id: "u:d3e84aafd04b",
                      },
                      {
                        type: "container",
                        body: [
                          {
                            type: "tpl",
                            id: "u:d26f07049f2f",
                            tpl: '<div style="background-color: rgba(240, 248, 255, 1); border-radius: 4px 4px 0 0; padding: 10px 0 10px 12px;"><span style="width: 4px; background-color: rgb(76, 132, 255); dispaly: inline-block; border-radius: 2px;">&nbsp;</span> &nbsp;<strong>接口描述</strong></div>',
                            style: {
                              boxShadow: "var(--shadows-shadow-none)",
                            },
                          },
                          {
                            type: "property",
                            id: "u:d22fcd38e349",
                            items: [
                              {
                                label: "路径",
                                content: "${currentMethod.url}",
                                span: 3,
                              },
                              {
                                label: "显示名称",
                                content: "${currentMethod.showName}",
                                span: 3,
                              },
                              {
                                label: "备注",
                                content: "${currentMethod.remarks}",
                                span: 3,
                              },
                              {
                                label: "调用方式",
                                content: "${currentMethod.method}",
                                // "content": {
                                //   "type": "text",
                                //   "visibleOn": "${currentMethod.method}",
                                //   "color": "processing",
                                //   "label": "${currentMethod.method}"
                                // },
                                span: 3,
                              },
                            ],
                            column: 2,
                            mode: "simple",
                          },
                          {
                            type: "tabs",
                            id: "u:2a89bf27c0a6",
                            tabs: [
                              {
                                title: "请求参数",
                                body: [
                                  {
                                    type: "json",
                                    id: "u:b469cf1868d3",
                                    source: "${currentMethod.inputParam}",
                                  },
                                ],
                                id: "u:e86ca0d71caa",
                              },
                              {
                                title: "返回参数",
                                body: [
                                  {
                                    type: "tpl",
                                    id: "u:bcd8715387b1",
                                    tpl: "${currentMethod.outputParam|raw}",
                                  },
                                ],
                                id: "u:e25577494a22",
                              },
                            ],
                          },
                          {
                            type: "divider",
                            id: "u:4d90f4d532cb",
                          },
                        ],
                        size: "xs",
                        style: {
                          padding: 0,
                          position: "static",
                          display: "block",
                          width: 500,
                          height: 400,
                          overflowY: "auto",
                          boxShadow: "var(--shadows-shadow-none)",
                        },
                        wrapperBody: false,
                        isFixedHeight: false,
                        isFixedWidth: false,
                        id: "u:d807f0c92838",
                      },
                    ],
                    isFixedHeight: false,
                    isFixedWidth: false,
                  },
                ],
                messages: {},
                api: {
                  url: "${apiUrl}",
                  method: "get",
                  sendOn: "${apiUrl}",
                  messages: {},
                  requestAdaptor: "",
                  adaptor: "",
                  responseData: {
                    "&": "$$",
                  },
                },
                onEvent: {
                  fetchInited: {
                    weight: 0,
                    actions: [
                      {
                        componentId: "treeWrapper",
                        args: {
                          value: {
                            interList: "${CONCAT(event.data.items,_apiList)}",
                            filterTree: "${CONCAT(event.data.items,_apiList)}"
                          },
                        },
                        actionType: "setValue",
                      },
                      {
                        args: {},
                        script:
                          "/* 自定义JS使用说明：\n  * 1.动作执行函数doAction，可以执行所有类型的动作\n  * 2.通过上下文对象context可以获取当前组件实例，例如context.props可以获取该组件相关属性\n  * 3.事件对象event，在doAction之后执行event.stopPropagation();可以阻止后续动作执行\n*/\nconst myMsg = '我是自定义JS';\nconsole.log('data----',event.data)\n",
                        actionType: "custom",
                      },
                    ],
                  },
                },
              },
            ],

            showCloseButton: true,
            showErrorMsg: true,
            showLoading: true,
            className: "app-popover",
            id: "u:2da6ff378def",
            onEvent: {
              confirm: {
                weight: 0,
                actions: [
                  {
                    actionType: "custom",
                    script:
                      "console.log('打印一下currentMethod', context.currentMethod)",
                  },
                  {
                    actionType: "setValue",
                    args: {
                      value: "${'${HOST}'+'/${SUBAPPKEY}'+currentMethod.url}",
                    },
                    componentId: "api-url",
                  },
                  {
                    actionType: "setValue",
                    args: {
                      value: "${currentMethod.method}",
                    },
                    componentId: "api-method",
                  },
                  // {
                  //   "actionType": "broadcast",
                  //   "args": {
                  //     "eventName": "onChooseApi"
                  //   },
                  //   "data": {
                  //     "value": "${HOST}/${SUBAPPKEY}/${currentMethod.url}",
                  //     "currentMethod": "${currentMethod}"
                  //   }
                  // }
                ],
              },
            },
            data: {
              _host: "${_host}",
              _apiList: "${_apiList}",
              _env: "${_env}",
              sandboxUrl: "${_url}",
              apiUrl:
                "${window:location.origin}/mid-platform-devplatform/api/modeling/sql-dev/v1/ylDpModelingSqlDevParamTree/subapp/${SUBAPPID}",
              currentMethod: {},
            },
            closeOnEsc: false,
            size: "lg",
            actions: [
              {
                type: "button",
                label: "取消",
                actionType: "cancel",
                id: "u:7c94f2fb3eb1",
              },
              {
                type: "button",
                label: "确定",
                actionType: "confirm",
                id: "u:853e0932de2b",
                level: "primary",
              },
            ],
          },
        },
      ],
    },
  },
  disabledOn: "${_env==2 && _sandboxStatus!=1}",
  id: "u:687a07d3125e",
};

const wrapper = {
  type: "page",
  data: {
    SUBAPPID: "1",
    _host: "http://localhost:5173",
    _apiList: [],
    _env: "1",
    sandboxUrl: "test",
  },
  body: [btn],
};

export default wrapper;
