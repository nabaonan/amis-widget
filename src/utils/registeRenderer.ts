/*
 * @Author: nabaonan
 * @Date: 2023-09-12 14:54:10
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-12 21:33:03
 * @FilePath: /amis-widget/src/utils/registeRenderer.ts
 * @Description: 
 */

import { RendererConfig, Schema, Renderer } from 'amis';
import { registerRendererByType } from 'vue3-amis-widget';
interface TestFunc {
  (path: string, schema?: Schema, resolveRenderer?: (path: string, schema?: Schema, props?: any) => null | RendererConfig): boolean;
}
export interface RendererBasicConfig {
  test?: RegExp | TestFunc;
  type?: string;
  name?: string;
  storeType?: string;
  shouldSyncSuperStore?: (store: any, props: any, prevProps: any) => boolean | undefined;
  storeExtendsData?: boolean | ((props: any) => boolean);
  weight?: number;
  isolateScope?: boolean;
  isFormItem?: boolean;
  autoVar?: boolean;

}

export type AmisRendererOption = RendererBasicConfig & {

  framework?: 'vue3' | 'react';
}



export default (comp: any, options: AmisRendererOption, type: 'sdk' | 'react' = 'react') => {
  if (type == 'react') {

    // Renderer(options)(comp)
    registerRendererByType(comp, options)
  } else {
    const amisLib = window.amisRequire("amis");
    amisLib.Renderer(options)(comp);
  }

}