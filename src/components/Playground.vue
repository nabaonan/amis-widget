<!--
 * @Author: nbn
 * @Date: 2023-09-09 17:20:59
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-15 22:59:50
 * @FilePath: /amis-widget/src/components/Playground.vue
 * @Description: 
-->
<template>
  <Space>

    <Button @click="toggle">收起/展开</Button>
  </Space>
  <Row>

    <Col v-show="!collapse" span="12">
    <div ref="$editor" id="editor"></div>
    <Editor theme="vs-dark" :options="options" language="json" height="90vh" v-model:value="schema">
    </Editor>
    </Col>
    <Col :span="collapse ? 24 : 12">

    <AmisRenderReact :schema="jsonSchema"></AmisRenderReact>
    </Col>
  </Row>
</template>



<script setup lang="ts">
import { debounce } from 'lodash';
import { Col, Row, Button, Space } from 'ant-design-vue'
import { ref, watch } from 'vue';
import router from '@/router';
import AmisRenderReact from './AmisRenderReact.vue'

import { Editor } from '@guolao/vue-monaco-editor'



const query = router.currentRoute.value.query


watch(() => router.currentRoute, () => {
  console.log('query变化了', query)
  // import('@/amis/测试stomp.json').then(json => {
  //   console.log('加载到了', json.default)
  // })
  const aaa = '../amis/测试stomp.json'
  console.log('path----',(query as any)['path'])
  import(`./${aaa}`).then(json => {
    console.log('加载到了', json.default)
  })
}, {
  immediate: true
})


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


const collapse = ref(true)

const toggle = () => {
  collapse.value = !collapse.value
}

const jsonSchema = ref()




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