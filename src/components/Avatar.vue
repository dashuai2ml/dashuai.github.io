<template>
    <img id="avatar" src="../assets/png/yang.png" alt="" srcset="">
</template>

<style scoped>
#avatar {
    border-radius: 50%;
    box-shadow: 0px 6px 20px -4px rgba(100, 100, 100, 0.5);
    transform: scale(.8);
    transition: transform cubic-bezier(0.18, 0.89, 0.32, 1.28) .5s;
}

#avatar:hover {
    transform: scale(.9) rotate(360deg);
}
</style>