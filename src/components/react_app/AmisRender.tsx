/*
 * @Author: nabaonan
 * @Date: 2023-09-12 17:25:53
 * @LastEditors: nabaonan
 * @LastEditTime: 2023-09-12 17:31:33
 * @FilePath: /amis-widget/src/components/react_app/AmisRender.tsx
 * @Description:
 */
import { render as renderAmis, Schema, RenderOptions } from "amis";

export interface RootRenderProps {
  location?: Location;
  theme?: string;
  data?: Record<string, any>;
  locale?: string;
  [propName: string]: any;
}
export interface IProps {
  schema: Schema;
  props?: RootRenderProps;
  options?: RenderOptions;
}
export default (props: IProps) => {
  return renderAmis(props.schema, props.props, props.options);
};
