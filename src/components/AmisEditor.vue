<!--
 * @Author: nbn
 * @Date: 2023-09-07 23:15:06
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-12 21:52:28
 * @FilePath: /amis-widget/src/components/AmisEditor.vue
 * @Description: 
-->
<template>
  <AmisEditorReact :schema="schema"></AmisEditorReact>
</template>

<script setup lang="ts">


import { Schema } from 'amis';
import AmisEditor from './react_app/AmisEditor';

import { applyPureReactInVue } from 'veaury'
defineProps<{
  schema?: Schema
}>()

const AmisEditorReact = applyPureReactInVue(AmisEditor)
</script>

<style scoped></style>