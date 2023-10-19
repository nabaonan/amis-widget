<!--
 * @Author: nbn
 * @Date: 2023-09-06 22:20:28
 * @LastEditors: nbn
 * @LastEditTime: 2023-10-18 20:49:23
 * @FilePath: /amis-widget/src/components/WidgetList.vue
 * @Description: 
-->
<template>
  <List :data-source="widgets" :grid="{ gutter: 5, column: 4 }">

    <template #renderItem="{ item }">
      <List.Item>
        <Card :title="item.title" class="">



          <!-- <AmisRenderSDK :schema="item.component"></AmisRenderSDK> -->
          <AmisRenderReact :schema="item.component"></AmisRenderReact>
          <!-- <AmisRenderReact2 :schema="item.component"></AmisRenderReact2> -->
          <template #extra>

            <Button type="link" @click="message.warn('暂未实现')">实时编辑</Button>
            <Button type="link" @click="() => preview(item.component)">预览</Button>

          </template>
        </Card>
      </List.Item>
    </template>

  </List>

  <Modal v-model:open="visible" title="预览" :footer="null" :width="1000">
    <AmisRenderSDK :schema="currentSchema"></AmisRenderSDK>
  </Modal>
</template>

<script  lang="ts" setup>

import { Schema, } from 'amis';
import { List, Card, Button, Modal, message } from 'ant-design-vue'
import { ref, watchEffect } from 'vue';
import AmisRenderSDK from './AmisRenderSDK.vue';
import AmisRenderReact from './AmisRenderReact.vue';
// import AmisRenderReact2 from './AmisRenderReact2.vue';

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
const currentSchema = ref<Schema>();


const preview = (json: Schema) => {
  console.log('preview', json)
  visible.value = true;
  currentSchema.value = json

}




</script>

<style lang="scss" scoped></style>