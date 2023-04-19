<script setup lang="ts">
import {useMarkdown} from '@/func/marked'
</script>

<template>
  <main>
    <div v-html="useMarkdown('![pic](favicon.ico)')"></div>
  </main>
</template>
