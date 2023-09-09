
import {
  RegionConfig,
  registerEditorPlugin,
  RendererPluginAction,
  RendererPluginEvent,
} from "amis-editor-core";
import { BaseEventContext, BasePlugin } from "amis-editor-core";
import { getSchemaTpl } from "amis-editor-core";
import type { SchemaObject } from "amis";
import { getArgsWrapper, getEventControlConfig } from "./helper";
import { StompSchema } from "../../renderer/react_app/Stomp";
// import {
//   getArgsWrapper,
//   getEventControlConfig,
// } from "amis-editor";

// window.amisRequire("amis-editor");

export class StompPlugin extends BasePlugin {
  static scene = ["layout"];

  // 关联渲染器名字
  rendererName = "stomp";
  $schema = "/schemas/Stomp.json";

  // 组件名称
  name = "stomp";
  isBaseComponent = false;
  description = "用来处理stomp。";
  docLink = "/amis/zh-CN/components/wt/stomp";
  icon = "fa-solid fa-link";
  pluginIcon = "fa-solid fa-link";
  tags = ["数据容器"];

  scaffold: SchemaObject | StompSchema = {
    type: "stomp",
    url: "ws://localhost:61614/chat",
    channels: ["666"],
    initFetch: true,
    responseKey: "msg",
  };
  previewSchema: any = {
    ...this.scaffold,
  };

  // 普通容器类渲染器配置

  regions: Array<RegionConfig> = [
    {
      key: "body",
      label: "stomp内容区",
    },
  ];

  events: RendererPluginEvent[] = [
    {
      eventName: "receive",
      eventLabel: "接收消息",
      description: "接收服务端消息",
      dataSchema: [
        {
          type: "object",
          properties: {
            "event.data": {
              type: "object",
              title: "当前数据域",
            },
          },
        },
      ],
    },
  ];

  actions: RendererPluginAction[] = [
    {
      actionType: "send",
      actionLabel: "发送消息",
      description: "给服务端发送消息",
      innerArgs: ["item"],
      schema: getArgsWrapper({
        type: "wrapper",
        className: "p-none",
        body: [
          getSchemaTpl("formulaControl", {
            name: "channelName",
            label: "频道",
            variables: "${variables}",
            size: "lg",
            required: true,
            mode: "horizontal",
          }),
          getSchemaTpl("formulaControl", {
            name: "msg",
            label: "消息",
            required: true,
            variables: "${variables}",
            size: "lg",
            mode: "horizontal",
          }),
          getSchemaTpl("formulaControl", {
            name: "headers",
            label: "头部信息",
            variables: "${variables}",
            size: "lg",
            mode: "horizontal",
          }),
        ],
      }),
    },
  ];

  notRenderFormZone = true;
  panelTitle = "stomp";
  panelJustify = true;
  panelBodyCreator = (context: BaseEventContext) => {
    return getSchemaTpl("tabs", [
      {
        title: "属性",
        body: getSchemaTpl("collapseGroup", [
          {
            title: "基本",
            body: [
              getSchemaTpl("layout:originPosition", { value: "left-top" }),
              {
                type: "input-text",
                label: "url",
                placeholder: "请输入stomp-broker 地址",
                name: "url",
              },

              {
                type: "combo",
                name: "channels",
                multiple: true,
                flat: true,
                addButtonText: "注册新频道",
                label: "订阅频道",
                items: context.schema.channels.map((v: string) => {
                  return {
                    type: "input-text",

                    name: "text",
                    placeholder: "请输入订阅频道",
                    value: v,
                  };
                }),
              },

              getSchemaTpl("switch", {
                name: "initFetch",
                label: "数据接口初始加载",
                visibleOn: "this.url",
              }),

              getSchemaTpl("switch", {
                name: "autoReconnect",
                visibleOn: "this.url",
                label: "是否自动重连",
              }),

              {
                type: "input-number",
                visibleOn: "this.autoReconnect",
                name: "reconnectCount",
                label: "重连次数",
                placeholder: "重连次数",
                value: 3,
              },

              {
                type: "input-number",
                name: "reconnectInterval",
                label: "重连间隔",
                visibleOn: "this.autoReconnect",
                placeholder: "重连间隔  单位毫秒",
                value: 1000,
              },

              {
                name: "responseKey",

                label: "返回值绑定key",
                type: "input-text",
              },

              getSchemaTpl("formulaControl", {
                name: "bindData",
                label: "监听变量",
                description: "只要该变量变化就发请求",
                // variables: "${variables}",
                mode: "horizontal",
              }),

              getSchemaTpl("switch", {
                name: "showErrorMsg",
                label: "展示错误",
              }),
            ],
          },
        ]),
      },
      {
        title: "外观",
        body: [getSchemaTpl("className")],
      },
      {
        title: "事件",
        className: "p-none",
        body: [
          getSchemaTpl("eventControl", {
            name: "onEvent",
            ...getEventControlConfig(this.manager, context),
          }),
        ],
      },
    ]);
  };
}

registerEditorPlugin(StompPlugin);
