<script setup lang="ts">
import Project from '@/components/Project.vue'

</script>
<template>
  <div class="flex justify-around sm:w-[650px] flex-col sm:flex-row">
    <Project :bg-color="'#CCECB4'" :link="'https://github.com/dashuai2ml/electronic-parts-spider'">
      <template #p1>
        <span>
          这个项目是一个基于TypeScript的爬虫程序，旨在抓取目标网站上的元器件详细信息。采取了一定措施来解决反爬虫的问题。
        </span>
      </template>
      <template #p2>
        <span>
          在数据抓取之后，进行了适当的清洗和过滤，确保数据的准确性和可用性。最终，将数据存储到了数据库中，以备后续使用。
        </span>
      </template>
      <template #img>
        <img src="@/assets/png/Spider.png" alt="">
      </template>
      <template #title>
        Electronic Parts Spider
      </template>
    </Project>
    <Project :bg-color="'#D9CCED'" :link="'https://github.com/dashuai2ml/magic-bee'">
      <template #p1>
        <span>
          该项目是一个软硬件结合的创新性项目，其硬件部分由一个点阵全彩像素屏组成，该屏幕使用ESP32驱动，并通过无线通讯与终端PC连接。
        </span>
      </template>
      <template #p2>
        <span>
          在关键部分方面，使用了Electron开发，该技术可以提供给屏幕图像源，并实现模式设定、动画处理等功能。该项目所涉及的技术涉及硬件、嵌入式系统、网页开发等多个领域。
        </span>
      </template>
      <template #img>
        <img class=" mt-10 top-[-15px]" src="@/assets/png/bee.png" alt="">
      </template>
      <template #title>
        Magic Bee
      </template>
    </Project>
  </div>
</template>