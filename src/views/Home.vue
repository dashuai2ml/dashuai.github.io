<script setup lang="ts">

</script>

<template>
  <main>
    <div id="bg">
      <div class="bg-svg bg-svg-left"></div>
      <div class="bg-svg bg-svg-right"></div>
    </div>
    <div id="content">
      <img id="dashuai-name" src="../assets/svg/bgsvg-name.svg" alt="" srcset="">
    </div>
  </main>
</template>

<style scoped>
#content {
  border: 1px solid blue;
  max-width: 1280px;
  height: 2000px;
  margin: 0 auto;
}

main #bg {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid red;
  background-color: var(--zx-mise);
}

#dashuai-name {
  display: block;
  top: 100px;
  margin: 0 auto;
  width: 50%;
  min-width: 320px;
  user-select: none;
  -webkit-user-drag: none;
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