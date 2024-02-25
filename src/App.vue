<script setup lang="ts">
import AnimatedEnter from './components/AnimatedEnter';
</script>

<template>
  <div>
    <AnimatedEnter animate-name="to-top">
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
    </AnimatedEnter>
  </div>
</template>

<style scoped>
.card {
  display: inline-block;
  width: 50px;
  height: 80px;
  border: solid 1px green;
  margin-right: 10px;
}
</style>
