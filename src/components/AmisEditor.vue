<!--
 * @Author: nbn
 * @Date: 2023-09-07 23:15:06
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-07 23:16:29
 * @FilePath: /amis-widget/src/components/AmisEditor.vue
 * @Description: 
-->
<template>
  <AmisRenderReact :schema="schema"></AmisRenderReact>
</template>

<script setup lang="ts">


import { Schema } from 'amis';
import AmisEditor from './react_app/AmisEditor';

import { applyPureReactInVue } from 'veaury'
defineProps<{
  schema?: Schema
}>()


const AmisRenderReact = applyPureReactInVue(AmisEditor)



</script>

<style scoped></style>