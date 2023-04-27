<script setup lang="ts">
import MDArticleTemplate from '../components/MDArticleTemplate.vue'


</script>

<template>
  <main>
    <Suspense>
      <!-- 主要内容 -->
      <MDArticleTemplate file-path="src/assets/article/test.md"></MDArticleTemplate>

      <!-- 加载中状态 -->
      <template #fallback>
        正在加载...
      </template>
    </Suspense>
  </main>
</template>
