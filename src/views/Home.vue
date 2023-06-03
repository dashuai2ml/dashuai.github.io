<script setup lang="ts">
import Avatar from '@/components/Avatar.vue'
import Introduction from '@/components/Introduction.vue'
import Hobbies from '@/components/Hobbies.vue'
import Title from '@/components/Title.vue'
import Slideshow from '@/components/Slideshow.vue'
import ArticleList from '@/components/ArticleList.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

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
      <Slideshow></Slideshow>
      <Title title="近期文章 - Recent Articles"><img src="@/assets/png/rocket.png" alt=""></Title>
      <ArticleList></ArticleList>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  </main>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* max-width: 1280px; */
  padding-top: 55px;
  /* padding-bottom: 50px; */
  /* margin: 0 auto; */
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