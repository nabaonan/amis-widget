<!--
 * @Author: nbn
 * @Date: 2023-09-07 21:04:55
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-07 22:45:34
 * @FilePath: /amis-widget/src/components/AmisRenderR2V.vue
 * @Description: 
-->
<template>
  <AmisRenderReact :schema="schema"></AmisRenderReact>
</template>

<script setup  lang="ts">

import { applyPureReactInVue } from 'veaury'
import AmisRender from './react_app/AmisRender.tsx';

import { Schema } from 'amis'

defineProps<{
  schema?: Schema
}>()


const AmisRenderReact = applyPureReactInVue(AmisRender)



</script>

<style scoped></style>./Test.js