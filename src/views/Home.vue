<script setup lang="ts">
import Avatar from '@/components/Avatar.vue'
import Introduction from '@/components/Introduction.vue'
import Hobbies from '@/components/Hobbies.vue'
import Title from '@/components/Title.vue'
import Project from '@/components/Project.vue'

</script>

<template>
  <main>
    <div id="bg">
      <div class="bg-svg bg-svg-left"></div>
      <div class="bg-svg bg-svg-right"></div>
      <img id="dashuai-name" src="../assets/svg/bgsvg-name.svg" alt="" srcset="">
    </div>
    <div class="content">
      <Avatar></Avatar>
      <Introduction></Introduction>
      <Hobbies></Hobbies>
      <Title title="个人项目 - Personal Projects"></Title>
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
      </Project>
      <Title title="近期文章 - Recent Articles"><img src="@/assets/png/rocket.png" alt=""></Title>
    </div>
  </main>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  padding-top: 55px;
  padding-bottom: 50px;
  margin: 0 auto;
}

#dashuai-name {
  display: block;
  top: 170px;
  margin: 0 auto;
  width: 500px;
  min-width: 320px;
  transform: scale(.3);
  transform-origin: center;
  user-select: none;
  -webkit-user-drag: none;
}

main #bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--zx-mise);
  overflow: hidden;
}

/* width >= 900px */
@media screen and (min-width: 900px) {
  .bg-svg {
    height: 100%;
  }

  .bg-svg-left {
    background-image: url(../assets/svg/bgsvg-left.svg);
    position: absolute;
    width: 210px;
    top: 100px;
  }

  .bg-svg-right {
    background-image: url(../assets/svg/bgsvg-right.svg);
    position: absolute;
    top: 0px;
    right: 0px;
    width: 230px;
  }
}

/* width <= 900px */
@media screen and (max-width: 900px) {
  .bg-svg {
    height: 100%;
    transform: scale(0.5);
    transform-origin: top;
  }

  .bg-svg-left {
    background-image: url(../assets/svg/bgsvg-left.svg);
    position: absolute;
    width: 210px;
    top: 250px;
  }

  .bg-svg-right {
    background-image: url(../assets/svg/bgsvg-right.svg);
    position: absolute;
    top: 250px;
    right: 0px;
    width: 230px;
  }
}
</style>