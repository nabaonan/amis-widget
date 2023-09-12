<!--
 * @Author: nbn
 * @Date: 2023-09-12 21:53:20
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-12 22:46:15
 * @FilePath: /amis-widget/src/components/Diff.vue
 * @Description: 
-->
<template>
  <DiffEditor height="80vh" theme="vs-dark" original="" modified="" language="json" :options="OPTIONS"
    @mount="handleMount" />
</template>

<script setup lang="ts">
import { DiffEditor } from '@guolao/vue-monaco-editor'
import { shallowRef } from 'vue'

const OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
  readOnly: false,
  originalEditable: true
}




const diffEditorRef = shallowRef()
const handleMount = (diffEditor: any) => (diffEditorRef.value = diffEditor)


</script>

<style scoped></style>