/*
 * @Author: nabaonan
 * @Date: 2023-09-08 10:13:40
 * @LastEditors: nabaonan
 * @LastEditTime: 2023-09-11 11:32:08
 * @FilePath: /amis-widget/src/components/react_app/AmisRender.tsx
 * @Description:
 */
import {
  Schema,
  render as renderAmis,
  ToastComponent,
  AlertComponent,
} from "amis";

interface IProps {
  schema: Schema;
}
export default (props: IProps) => {
  let theme = "cxd";
  let locale = "zh-CN";

  return (
    <>
      <ToastComponent
        theme={theme}
        key="toast"
        position={"top-right"}
        locale={locale}
      />
      <AlertComponent theme={theme} key="alert" locale={locale} />

      {renderAmis(
        props.schema,

        {
          // props
        },
        {
          // env...
          theme: "cxd", // cxd 或 antd
        }
      )}
    </>
  );
};

// export default class AmisRender extends React.Component<IProps, any> {
//   render(): JSX.Element {
//     // return <>

//     // </>
//     return renderAmis(
//       this.props.schema,

//       {
//         // props
//       },
//       {
//         // env...
//         theme: "cxd", // cxd 或 antd
//       }
//     );
//   }
// }
