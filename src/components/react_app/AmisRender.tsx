import React from "react";
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
