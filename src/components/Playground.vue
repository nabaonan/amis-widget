<!--
 * @Author: nbn
 * @Date: 2023-09-09 17:20:59
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-12 22:10:44
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

    <AmisRenderReact :schema="jsonSchema"></AmisRenderReact>
    </Col>
  </Row>
</template>



<script setup lang="ts">
import { debounce } from 'lodash';
import { Col, Row, } from 'ant-design-vue'
import { ref, watch } from 'vue';

import AmisRenderReact from './AmisRenderReact.vue'

import { Editor } from '@guolao/vue-monaco-editor'


const $editor = ref(null)
const schema = ref(`
{
  "type": "form",
  "debug": false,
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