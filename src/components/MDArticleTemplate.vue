
<script setup lang="ts">
import { useMarkdown } from '@/utils/marked'
import axios from 'axios';

const props = defineProps({
  filePath: { type: String, required: true },
})

const content = await axios.get(props.filePath)

</script>
<template>
  <div>
    <slot></slot>
    <div v-html="useMarkdown(content.data)"></div>
    123
  </div>
</template>

<style scoped>
:deep(code):not(.hljs){
  background-color: #f0f0f0;
}

</style>
