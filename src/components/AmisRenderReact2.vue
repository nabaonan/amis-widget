<!--
 * @Author: nbn
 * @Date: 2023-09-18 21:18:13
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-18 21:34:28
 * @FilePath: /amis-widget/src/components/AmisRenderReact2.vue
 * @Description: 
-->
<template>
  <div ref="$el">

  </div>
</template>

<script setup lang="ts">


import { Root, createRoot } from 'react-dom/client'
import { onMounted, ref, toRaw, watchEffect } from 'vue';
import { Schema, render as renderAmis } from 'amis'
const $el = ref()


const props = defineProps<{
  schema: Schema
}>()

let root: Root

onMounted(() => {
  root = createRoot($el.value)
  root.render(renderAmis(toRaw(props.schema), {}, {}))
});

watchEffect(() => {


  if (props.schema && root) {

    root.render(renderAmis(toRaw(props.schema), {}, {}))
  }
});

</script>

<style scoped></style>