<!--
 * @Author: nbn
 * @Date: 2023-09-09 00:03:18
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-12 22:42:48
 * @FilePath: /amis-widget/src/Home.vue
 * @Description: 
-->
<template>
  <Layout>
    <Layout.Header>

      <Menu theme="dark" mode="horizontal" v-model:selected-keys="selectedKeys" @click="handleClick">
        <Menu.Item key="/">首页</Menu.Item>
        <Menu.Item key="/list">部件列表</Menu.Item>
        <Menu.Item key="/editor">编辑器</Menu.Item>
        <Menu.Item key="/playground">Playground</Menu.Item>
        <Menu.Item key="/diff">比对</Menu.Item>

      </Menu>
    </Layout.Header>
    <Layout.Content>

      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">


        <RouterView></RouterView>

      </div>
    </Layout.Content>
  </Layout>
</template>

<script setup lang="ts">
import { Menu, Layout } from 'ant-design-vue';
import { ref } from 'vue';
import router from './router';
import type { MenuInfo } from 'ant-design-vue/es/menu/src/interface';

const selectedKeys = ref([router.currentRoute.value.path])
const handleClick = (menuInfo: MenuInfo) => {
  console.log('click ', menuInfo);
  router.push({
    path: `${menuInfo.key}`
  })
};
</script>

<style scoped></style>