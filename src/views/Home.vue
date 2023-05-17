<script setup lang="ts">
import Avatar from '@/components/Avatar.vue'
import Introduction from '@/components/Introduction.vue'

</script>

<template>
  <main>
    <div id="bg">
      <div class="bg-svg bg-svg-left"></div>
      <div class="bg-svg bg-svg-right"></div>
      <img id="dashuai-name" src="../assets/svg/bgsvg-name.svg" alt="" srcset="">
    </div>
    <div id="content">
      <Avatar></Avatar>
      <Introduction></Introduction>
    </div>
  </main>
</template>

<style scoped>
#content {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid blue; */
  max-width: 1280px;
  height: 2000px;
  padding-top: 55px;
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
  /* border: 1px solid red; */
  background-color: var(--zx-mise);
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
    transform-origin:top;
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