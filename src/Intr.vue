<!--
 * @Author: nbn
 * @Date: 2023-09-09 00:21:45
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-09 00:34:21
 * @FilePath: /amis-widget/src/Intr.vue
 * @Description: 
-->
<template>
  <Typography.Title>介绍 </Typography.Title>
  <Typography.Title :level="2">目的：（抽离通用小组件，方便复用） </Typography.Title>

  <Typography.Paragraph>
    主要将日常的组件做个积累
  </Typography.Paragraph>
  <Typography.Paragraph>
    使用vue 和 amis做结合，看看能到什么程度
  </Typography.Paragraph>
</template>

<script setup lang="ts">

import { Typography } from 'ant-design-vue'
</script>

<style scoped></style>