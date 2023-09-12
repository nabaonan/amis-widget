<!--
 * @Author: nabaonan
 * @Date: 2023-09-12 14:27:12
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-12 21:40:40
 * @FilePath: /amis-widget/src/components/AmisRenderReact.vue
 * @Description: 
-->
<template>
  <AmisRenderReact :schema="schema" />
</template>

<script setup lang="ts">
import AmisRender from './react_app/AmisRender'
// import type {  IProps } from './react_app/AmisRender'
import { applyPureReactInVue } from 'veaury';
import { Schema } from 'amis';


const AmisRenderReact = applyPureReactInVue(AmisRender)

interface IProps {
  schema: Schema;
}
defineProps<IProps>()



</script>

<style scoped></style>