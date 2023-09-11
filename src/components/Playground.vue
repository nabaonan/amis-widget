<!--
 * @Author: nbn
 * @Date: 2023-09-09 17:20:59
 * @LastEditors: nabaonan
 * @LastEditTime: 2023-09-11 19:00:12
 * @FilePath: /amis-widget/src/components/Playground.vue
 * @Description: 
-->
<template>
  <Row>

    <Col span="12">
    <div ref="$editor" id="editor"></div>
    <Editor theme="vs-dark" :options="options" language="json" height="90vh" v-model:value="schema">
    </Editor>
    </Col>
    <Col span="12">

    <AmisRender :schema="jsonSchema"></AmisRender>
    </Col>
  </Row>
</template>



<script setup lang="ts">
import { debounce } from 'lodash';
import { Col, Row, } from 'ant-design-vue'
import { Editor } from '@guolao/vue-monaco-editor'
import * as monaco from 'monaco-editor';
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
import AmisRender from './AmisRender.vue';
import { ref, watch } from 'vue';

self.MonacoEnvironment = {
  getWorker(_, label) {
    switch (label) {
      case 'json':
        return new jsonWorker();
      case 'css':
      case 'scss':
      case 'less':
        return new cssWorker();
      case 'html':
      case 'handlebars':
      case 'razor':
        return new htmlWorker();
      case 'typescript':
      case 'javascript':
        return new tsWorker();
      // case 'yaml':
      //     return new yamlWorker();
      default:
        return new editorWorker()
    }
  }
};
monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true);

const $editor = ref(null)
const schema = ref(`
{
  "type": "form",
  "debug": true,
  "body": [
    {
      "type": "input-rich-text",
      "value": "1",
      "name": "test"
    }
  ]
}

`)

const jsonSchema = ref()

// monaco.editor.create($editor.value, {
//   value: schema.value,
//   language: 'json',
// });


watch(schema, debounce((val: string) => {
  console.log('触发了watch', val)
  jsonSchema.value = JSON.parse(val)

}, 1000), {
  immediate: true//首次就出发渲染
})

const options = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
}

</script>

<style scoped></style>