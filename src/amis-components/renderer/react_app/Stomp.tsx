import React, { ReactNode } from "react";
import {
  ListenerAction,
  Renderer,
  RendererProps,
  SchemaExpression,
  ScopedComponentType,
} from "amis";

import { ActionObject, ScopedContext } from "amis";
import type { IScopedContext } from "amis";
import { SchemaCollection } from "amis";
import { Client, StompSubscription } from "@stomp/stompjs";

import { Alert2 as Alert } from "amis";
import { IServiceStore } from "amis";

export const eventTypes = [
  /* 接受消息 */
  "receive",
] as const;

export interface StompSchema {
  /**
   * 指定为 Service 数据拉取控件。
   */
  type: "stomp";

  /**
   * WebScocket 地址，用于实时获取数据
   */
  url: string;

  /**
   * 订阅路径列表
   */

  channels: string[];

  /**
   * 是否自动重连
   */
  autoReconnect?: boolean;

  /**
   * 重连次数
   */
  reconnectCount?: number;

  /**
   * 重连间隔
   */
  reconnectInterval?: number;

  /**
   * 内容区域
   */
  body?: SchemaCollection;

  /**
   * 是否默认就拉取？
   */
  initFetch?: boolean;

  /**
   *
   *
   * 接受消息更新数据的key
   *
   */
  responseKey: string;

  /**
   * 绑定变量，只要变化就发送请求
   */
  bindData?: SchemaExpression;

  /**
   * 是否以Alert的形式显示api接口响应的错误信息，默认展示
   */
  showErrorMsg?: boolean;
}

export interface StompProps
  extends RendererProps,
    Omit<StompSchema, "type" | "className"> {
  store: IServiceStore;
}

interface StompState {
  reconnectCount: number;
  error: string;
}

export default class Stomp extends React.Component<StompProps, StompState> {
  static contextType = ScopedContext;
  client?: Client;
  subscripts: Record<string, StompSubscription> = {};

  constructor(props: StompProps) {
    super(props);

    this.handleAction = this.handleAction.bind(this);
    this.state = {
      error: "",
      reconnectCount: 0,
    };
  }

  componentWillUnmount() {
    if (this.client && this.client.connected) {
      this.client.deactivate();
      this.client.forceDisconnect();
      // this.client = undefi
    }
  }
  componentDidMount() {
    if (this.props.initFetch) {
      this.connect();
    }
  }

  connect() {
    const url = this.props.url;
    if (url) {
      const client = new Client({
        brokerURL: url,
        reconnectDelay: this.props.reconnectInterval ?? 1000,
        onStompError: (frame) => {
          console.log("Broker reported error: " + frame.headers["message"]);
          console.log("Additional details: " + frame.body);
          const { env } = this.props;
          env.notify("error", frame.headers["message"]);
          this.setState({
            error: frame.headers["message"],
          });
        },
        onConnect: () => {
          console.log("connected");
          this.suball();
        },
        onWebSocketClose: () => {
          console.log("close");
          //自动重连
          if (
            this.props.autoReconnect &&
            this.state.reconnectCount <= (this.props.reconnectCount || 3)
          ) {
            this.setState({
              error: `连接未成功，正在重连  第${this.state.reconnectCount}次`,
              reconnectCount: this.state.reconnectCount + 1,
            });
          } else {
            this.setState({
              error: "连接已断开",
            });
            client.deactivate();
          }
        },
      });
      this.client = client;

      client.activate();
    }
  }

  suball() {
    if (this.client?.connected) {
      this.props.channels?.forEach((channel) => {
        if (channel) {
          this.sub(channel);
        }
      });
    }
  }
  unsubAll() {
    if (this.client?.connected) {
      for (let key of Object.keys(this.subscripts)) {
        if (key) {
          this.unsub(key);
        }
      }
    }
  }

  sendAll() {
    if (this.client?.connected) {
      if (this.props.bindData != "" && this.props.bindData != undefined) {
        this.props.channels.forEach((channel) => {
          this.send(channel, this.props.bindData!);
        });
      }
    }
  }

  doAction(
    action: ListenerAction,
    args: { channelName: string; msg: string; headers: any }
  ) {
    if (action?.actionType === "send") {
      this.send(args.channelName, args.msg, args.headers);
    }
  }
  componentDidUpdate(prevProps: Readonly<StompProps>): void {
    const props = this.props;

    console.log("componentUpdate", props);

    if (props.url && prevProps.url !== props.url) {
      if (this.client) {
        this.client.deactivate();
        this.unsubAll();
      }
      this.setState({
        error: "",
        reconnectCount: 0,
      });

      this.connect();
    } else if (props.channels != prevProps.channels) {
      this.unsubAll();
      this.suball();
    }

    if (props.bindData && prevProps.bindData !== props.bindData) {
      this.sendAll();
    }
  }

  send(channelName: string, msg: string, headers: any = {}) {
    const client = this.client;
    if (client) {
      client.publish({
        destination: channelName,
        headers: headers,
        body: msg,
      });
    }
  }

  handleAction(
    e: React.UIEvent<any> | void,
    action: ActionObject,
    data: object,
    throwErrors: boolean = false,
    delegate?: IScopedContext
  ) {
    const { onAction, translate: __ } = this.props;

    if (action.actionType === "submit") {
      this.send(action.channelName, action.msg, action.headers);
    } else {
      onAction(e, action, data, throwErrors, delegate || this.context);
    }
  }

  sub(channelName: string) {
    const { dispatchEvent } = this.props;
    const client = this.client;
    if (client) {
      const subscrib = client?.subscribe(channelName, (message) => {
        console.log("客户端接受到消息", message.body);
        dispatchEvent("receive", {
          channelName,
          msg: message.body,
        });

        if (this.props.responseKey) {
          let data =
            this.props.store.getValueByName(this.props.responseKey) || [];
          data = data.concat(message.body);
          console.log("接受到的消息是", data);

          this.props.store.updateData(
            {
              [this.props.responseKey]: data,
            },
            undefined,
            false
          );
        }
      });
      this.subscripts[channelName] = subscrib;
    }
  }

  unsub(channelName: string) {
    const client = this.client;
    if (client) {
      if (this.subscripts[channelName]) {
        this.subscripts[channelName].unsubscribe();
        delete this.subscripts[channelName];
      }
    }
  }

  renderBody() {
    const { render, body: schema } = this.props;

    if (schema) {
      return render("body", schema, {
        key: "body",
        onAction: this.handleAction,
      }) as JSX.Element;
    } else {
      return <div>请设置stomp组件属性</div>;
    }
  }

  render(): ReactNode {
    const {
      className,
      style,
      classnames: cx,

      classPrefix: ns,
    } = this.props;
    const { error } = this.state;

    return (
      <div className={cx(`${ns}Stomp`, className)} style={style}>
        {error ? (
          <Alert
            level="danger"
            showCloseButton
            onClose={() => this.setState({ error: "" })}
          >
            {error}
          </Alert>
        ) : null}

        {this.renderBody()}
      </div>
    );
  }
}

//react方式注册组件
@Renderer({
  type: "stomp",
  autoVar: true,
  storeType: "StompStore",
  storeExtendsData: true,
  isolateScope: true,
})
export class StompRenderer extends Stomp {
  constructor(props: StompProps, context: IScopedContext) {
    super(props);

    console.log("mount stomp");
    const scoped = context;
    scoped.registerComponent(this as unknown as ScopedComponentType);
  }

  componentWillUnmount() {
    super.componentWillUnmount();
    console.log("unmount stomp");

    const scoped = this.context as IScopedContext;
    scoped.unRegisterComponent(this as unknown as ScopedComponentType);
  }
}

const amisLib = window.amisRequire("amis");
//sdk方式注册组件  vue用的sdk渲染方式
amisLib.Renderer({
  // test: /(^|\/)stomp/,
  type: "stomp",
  autoVar: true,
  storeType: "StompStore",
  storeExtendsData: true,
  isolateScope: true,
})(Stomp);
