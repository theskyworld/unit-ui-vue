<script setup lang="ts">
import { ref } from "vue";
import type { AnimatedEnterProps } from ".";
/*********************************导包分界线***************************************/
/* types */
/* macros */
/* props */
const { animateName } = withDefaults(defineProps<AnimatedEnterProps>(), {});
/* emits */
/* datas */
const mainWrapperDynamicClass = ref({
  toTop: animateName === "to-top",
  toBottom: animateName === "to-bottom",
  toLeft: animateName === "to-left",
  toRight: animateName === "to-right"
});
/* computed */
/* methods */
</script>
<template>
  <div class="wrapper" id="mainWrapper" :class="mainWrapperDynamicClass">
    <slot></slot>
  </div>
</template>
<style scoped lang="scss">
@use "./animatedEnter.scss"
</style>
