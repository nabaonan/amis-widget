/*
 * @Author: nbn
 * @Date: 2023-09-12 20:05:40
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-18 21:42:44
 * @FilePath: /amis-widget/src/amis-components/renderer/react_app/Test.tsx
 * @Description:
 */
import registeRenderer, { AmisRendererOption } from "@/utils/registeRenderer";
import { useState } from "react";

interface TestProps {}

export const Test = (props: TestProps) => {
  const [state, setState] = useState(1);
  return (
    <div>
      这是一个测试的组件
      {state}
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        点击+1
      </button>
    </div>
  );
};

const options: AmisRendererOption = {
  type: "test",
  autoVar: true,
};

registeRenderer(Test, options, "react");
// registeRenderer(Test, options, "sdk");
