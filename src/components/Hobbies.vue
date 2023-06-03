<script setup lang="ts">
import { ref } from 'vue';
const displayDialog = ref(0)
function updateDialog(value:number) {
  displayDialog.value = value
}

</script>

<template>
  <div id="hobbies" class=" pt-5 sm:pt-0">
    <div class="text-center">
      <img :style="{opacity:displayDialog}" id="dialog" src="@/assets/png/dialog.png" alt="" srcset="">
      <img @mouseover="updateDialog(1)" @mouseleave="updateDialog(0)" src="@/assets/png/dinosaur0.png" alt="" srcset="">
    </div>
    <div class="grid-wrapper">
      <img src="@/assets/png/hobbies (1).png" alt="" srcset="">
      <img src="@/assets/png/hobbies (2).png" alt="" srcset="">
      <img src="@/assets/png/hobbies (3).png" alt="" srcset="">
      <img src="@/assets/png/hobbies (4).png" alt="" srcset="">
      <img src="@/assets/png/hobbies (5).png" alt="" srcset="">
      <img src="@/assets/png/hobbies (6).png" alt="" srcset="">
      <img src="@/assets/png/hobbies (7).png" alt="" srcset="">
      <img src="@/assets/png/hobbies (8).png" alt="" srcset="">
    </div>
  </div>
</template>

<style scoped>
#hobbies {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#dialog{
  transition: all ease-in-out .5s;
}

/* width >= 900px */
@media screen and (min-width: 900px) {
  #dialog{
    position: absolute;
    right: 20px;
    top: 20px;
    mix-blend-mode: normal;
  }
  .grid-wrapper {
    display: grid;
    grid-template-columns:  repeat(4, 120px);
    grid-column-gap: 30px;
    grid-row-gap: 20px;
  }
}

/* width < 900px */
@media screen and (max-width: 900px) {
  #dialog{
    position: absolute;
    right: 12px;
    top: -25px;
    mix-blend-mode: normal;
    z-index: 2;
  }
  .grid-wrapper {
    display: grid;
    grid-template-columns:  repeat(3, 120px);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
}

img {
  display: inline-block;
  mix-blend-mode: darken;
  transition: all ease-out .2s;
}

.grid-wrapper img{
  transform: scale(.8);
}

.grid-wrapper img:hover{
  transform: rotate(-20deg) scale(1.2);
}
</style>