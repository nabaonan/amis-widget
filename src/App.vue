<!--
 * @Author: nbn
 * @Date: 2023-09-06 20:58:47
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-06 23:38:42
 * @FilePath: /amis-widget/src/App.vue
 * @Description: 
-->
<script setup lang="ts">
import { Typography } from 'ant-design-vue'

import WidgetList from './components/WidgetList.vue';
</script>

<template>
  <Typography.Title>Amis部件列表 （抽离通用小组件，方便复用） </Typography.Title>
  <!-- <Typography.Title :level="3">我要在vue3里渲染amis</Typography.Title> -->
  <!-- <AmisRender :schema="json"></AmisRender> -->
  <WidgetList></WidgetList>
</template>

<style scoped></style>
