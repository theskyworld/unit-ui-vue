<template>
    <u-input placeholder="请输入你的内容..." v-model="searchText" disabled></u-input>
</template>
<script setup>
import UInput from "@/components/Input/index.vue";
import { ref } from 'vue'

const searchText = ref('')
</script>
