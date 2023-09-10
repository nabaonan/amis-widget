<!--
 * @Author: nbn
 * @Date: 2023-09-06 21:27:37
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-11 00:53:39
 * @FilePath: /amis-widget/src/components/AmisRender.vue
 * @Description: 
-->
<template>
  <div ref="$el">

  </div>
</template>

<script setup lang="ts">

import { SchemaNode, RenderOptions, IScopedContext } from 'amis'

import { toRaw, VNodeRef, onMounted, onUnmounted, ref, watchEffect } from "vue";

const $el = ref(null)

export interface AmisSdk {
  embed: (selector: VNodeRef | string, schema: SchemaNode, options?: RenderOptions) => AmisInstance;
}
const scoped = window.amisRequire("amis/embed");


type AmisInstance = {
  unmount: () => void;
  updateSchema: (schema: SchemaNode) => void;
  updateProps: (props: SchemaNode, callback: () => void) => void;
} & IScopedContext


const instance = ref<AmisInstance>()

interface IProps {
  schema?: SchemaNode
}

const props = defineProps<IProps>()


watchEffect(() => {
  if (props.schema) {

    console.log('更新schema', instance.value)
    const schema = toRaw(props.schema)
    if (!instance.value) {

      instance.value = scoped.embed($el.value, schema);
    }
    instance.value?.updateSchema(schema)

  }
})

onMounted(() => {
  if (props.schema) {
    console.log('穿件来的schema', props.schema)
    instance.value = scoped.embed($el.value, toRaw(props.schema));
  }

});
onUnmounted(() => {
  instance.value?.unmount();
});

</script>

<style lang="scss" scoped></style>