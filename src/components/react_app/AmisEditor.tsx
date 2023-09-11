/*
 * @Author: nbn
 * @Date: 2023-09-07 23:02:35
 * @LastEditors: nabaonan
 * @LastEditTime: 2023-09-11 11:29:47
 * @FilePath: /amis-widget/src/components/react_app/AmisEditor.tsx
 * @Description:
 */
import { Editor } from "amis-editor";
import "amis/lib/themes/cxd.css";
import "amis/lib/helper.css";
import "amis/sdk/iconfont.css";
import "amis-editor-core/lib/style.css";

import { SchemaObject } from "amis";

interface IProps {
  schema: SchemaObject;
}

export default (props: IProps) => {
  return (
    <Editor
      theme={"cxd"}
      preview={false}
      isMobile={false}
      value={props.schema}
      onChange={() => {}}
      onPreview={() => {
        // store.setPreview(true);
      }}
      // plugins={[StompPlugin]}
      onSave={() => {}}
      className="is-fixed"
      // $schemaUrl={schemaUrl}
      showCustomRenderersPanel={true}
      amisEnv={
        {
          // fetcher: store.fetcher,
          // notify: store.notify,
          // alert: store.alert,
          // copy: store.copy
        }
      }
    />
  );
};
