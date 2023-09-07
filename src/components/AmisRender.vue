<!--
 * @Author: nbn
 * @Date: 2023-09-06 21:27:37
 * @LastEditors: nabaonan
 * @LastEditTime: 2023-09-07 16:11:28
 * @FilePath: /amis-widget/src/components/AmisRender.vue
 * @Description: 
-->
<template>
  <div ref="$el">

  </div>
</template>

<script setup lang="ts">

import { SchemaNode, RenderOptions,IScopedContext } from 'amis'

import { Ref, VNodeRef, onMounted, onUnmounted, ref, unref, watchEffect } from "vue";

const $el = ref(null)

export interface AmisSdk {
  embed: (selector: VNodeRef | string, schema: SchemaNode, options?: RenderOptions) => AmisInstance;
}
const scoped = window.amisRequire("amis/embed");

type AmisInstance =  {
  unmount: () => void;
  updateSchema: (schema: SchemaNode) => void;
  updateProps: (props: SchemaNode, callback: () => void) => void;
} & IScopedContext


const instance = ref<AmisInstance>()

interface IProps {
  schema?: Ref<SchemaNode> | SchemaNode
}

const props = defineProps<IProps>()


watchEffect(() => {
  if (props.schema) {

    console.log('amis===', instance.value)

    console.log('schema变化', props.schema)
    instance.value?.updateSchema(unref(props.schema))
  }
})

onMounted(() => {
  if (props.schema) {
    console.log('穿件来的schema', props.schema)
    instance.value = scoped.embed($el.value, props.schema);
  }

});
onUnmounted(() => {
  instance.value?.unmount();
});

</script>

<style lang="scss" scoped></style>