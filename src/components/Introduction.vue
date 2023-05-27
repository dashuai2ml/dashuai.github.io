<template>
  <div class="content">
    <div class="text">
      <span>
        <img id="hi" src="@/assets/png/WavingHand.png" alt="" srcset="">
      </span>
      <p>
        我是一名热爱技术、热爱生活的开发者和程序员。对于新鲜事物有着强烈的探索欲望和求知欲，同时也非常热衷于不断学习和提高自己。在工作和生活中，我总是尽力将自己的思考和创造力发挥到极致，以应对日常的挑战并创造更多的价值。
      </p>
    </div>
    <div class="text">
      <span>
        <img src="@/assets/png/ZanyFace.png" alt="" srcset="">
      </span>
      <p>
        I'm a developer and programmer who loves technology and life. I have a strong desire to explore and learn
        about new things, and I'm always eager to improve myself. In both my work and personal life, I strive to
        showcase my creativity and problem-solving skills to deal with challenges and create more value.
      </p>
    </div>
  </div>
</template>
<style scoped>
.content {
  display: flex;
  position: relative;
  top: 50px;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
}

.content div:nth-child(2)>p {
  position: relative;
  left: 10px;
  margin-top: 10px;
}

.text {
  display: flex;
  flex-direction: row;
  max-width: 700px;
}

.text span:nth-child(1) {
  display: inline-block;
  position: relative;
  top: 15px;
  width: 80px;
}

#hi {
  position: relative;
  left: -8px;
  top: -10px;
}
</style>