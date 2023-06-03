<script setup lang="ts"></script>
<template>
  <div class="relative flex flex-col sm:mt-16 mt-5">
    <img id="robot" class="sm:left-[-150px] inline-block mix-blend-darken sm:mb-0 mb-[150px]" src="@/assets/png/robot.png" alt="">
    <div class=" absolute sm:top-0 top-[380px] sm:left-0">
      <img id="dialog" class="sm:left-[210px] left-[10px] sm:top-[50px] top-[-20px] inline-block"
        src="@/assets/png/dialog2.png" alt="">
      <a class=" absolute float-right sm:top-[78px] top-[8px] sm:right-[-130px] right-[70px] transition-all duration-200 scale-75 hover:scale-100"
        href="https://twitter.com/dashuai2ml" target="_blank">
        <img src="@/assets/png/twitter.png" alt="">
      </a>
      <a class=" absolute float-right sm:top-[115px] top-[45px] sm:right-[-65px] right-[135px] transition-all duration-200 scale-75 hover:scale-100"
        href="https://github.com/dashuai2ml" target="_blank">
        <img src="@/assets/png/github.png" alt="">
      </a>
    </div>
  </div>
</template>

<style scoped>
#robot {
  animation: bounce 5s infinite;
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(-10%);
    animation-timing-function: ease-in-out;
  }

  50% {
    transform: translateY(0);
    animation-timing-function: ease-in-out;
  }
}
</style>