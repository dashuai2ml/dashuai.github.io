<script setup lang="ts">
const props = defineProps({
  bgColor: { type: String, required: true },
  link: { type: String, required: true },
})

</script>

<template>
  <div id="parent" class="relative">
    <div :style="{ backgroundColor: props.bgColor }" id="back"
      class="p-10 rounded-md w-[300px] h-[350px] flex flex-col items-center justify-center">
      <p class=" text-sm mb-3">
        <slot name="p1">
        </slot>
      </p>
      <p class=" text-sm mb-3">
        <slot name="p2">
        </slot>
      </p>
      <a :href="props.link" target="_blank">
        <img src="@/assets/png/pointingrRight.png" alt="">
      </a>
    </div>
    <div :style="{ backgroundColor: props.bgColor }" id="front"
      class=" rounded-md w-[300px] h-[350px] flex flex-col items-center justify-center">
      <h2 class=" mb-5 text-base font-medium">Electronic Parts Spider</h2>
      <slot name="img">
      </slot>
    </div>
  </div>
</template>

<style scoped>
#front {
  backface-visibility: hidden;
  transition: all ease-in-out .3s;
}

#back {
  transform: rotateY(180deg);
  position: absolute;
  top: 0px;
  transition: all ease-in-out .3s;
}

#parent:hover #back {
  transform: rotateY(360deg);
}

#parent:hover #front {
  transform: rotateY(180deg);
}
</style>