<!--
 * @Author: nbn
 * @Date: 2023-09-06 22:20:28
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-07 23:41:21
 * @FilePath: /amis-widget/src/components/WidgetList.vue
 * @Description: 
-->
<template>
  <List :data-source="widgets" :grid="{ gutter: 5, column: 4 }">

    <template #renderItem="{ item }">
      <List.Item>
        <Card :title="item.title" class="">



          <AmisRender :schema="item.component"></AmisRender>
          <!-- <AmisRenderReact :schema="item.component"></AmisRenderReact> -->
          <template #extra>

            <Button type="link" @click="message.warn('暂未实现')">实时编辑</Button>
            <Button type="link" @click="() => preview(item.component)">预览</Button>

          </template>
        </Card>
      </List.Item>
    </template>

  </List>

  <Modal v-model:open="visible" title="预览" :footer="null" :width="1000">
    <AmisRender :schema="currentSchema"></AmisRender>
  </Modal>
</template>

<script  lang="ts" setup>

import { SchemaNode } from 'amis';
import { List, Card, Button, Modal, message } from 'ant-design-vue'
import { ref, watchEffect } from 'vue';
import AmisRender from './AmisRender.vue';
import AmisRenderReact from './AmisRenderR2V.vue';

type Module = Record<string, () => Promise<unknown>>


interface Widget {
  title: string
  path: string
  component: any
}


const widgets = ref<Widget[]>([])

const modulesRef = ref<Module>()




watchEffect(() => {
  modulesRef.value = import.meta.glob(['../amis/*.js', '../amis/*.json'])

  widgets.value = []

  for (const path in modulesRef.value) {
    const name = /[^\\/]+$/g.exec(path)?.[0]!
    modulesRef.value[path]().then((mod: any) => {
      console.log('glob', path, mod)

      widgets.value.push({
        title: name,
        path,
        component: mod.default
      })
    })
  }
})


const visible = ref(false);
const currentSchema = ref<SchemaNode>();


const preview = (json: SchemaNode) => {
  console.log('preview', json)
  visible.value = true;
  currentSchema.value = json

}




</script>

<style lang="scss" scoped></style>