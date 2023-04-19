
<script setup lang="ts">
import { useMarkdown } from '@/func/marked'

const props = defineProps({
  content: { type: String, required: true },
})


</script>
<template>
  <div class="item">
    <slot></slot>
    <div v-html="useMarkdown(content)"></div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
}
</style>
