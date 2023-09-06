<!--
 * @Author: nbn
 * @Date: 2023-09-06 21:27:37
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-06 23:06:07
 * @FilePath: /amis-widget/src/components/AmisRender.vue
 * @Description: 
-->
<template>
  <div ref="$el">

  </div>
</template>

<script setup lang="ts">

import { SchemaNode, RenderOptions } from 'amis'

import { Ref, VNodeRef, onMounted, onUnmounted, ref, unref, watchEffect } from "vue";

const $el = ref(null)

export interface AmisSdk {
  embed: (selector: VNodeRef | string, schema: SchemaNode, options?: RenderOptions) => AmisInstance;
}
const scoped = window.amisRequire("amis/embed");

interface AmisInstance {
  unmount: () => void;
  updateSchema: (schema: SchemaNode) => void;
  getComponentByName: (name: string) => any;
  updateProps: (props: SchemaNode, callback: () => void) => void;
}


const instance = ref<AmisInstance>()

interface IProps {
  schema?: Ref<SchemaNode> | SchemaNode
}

const props = defineProps<IProps>()


watchEffect(() => {
  if (props.schema) {
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