<template>
    <u-input type="password" placeholder="请输入你的密码..." v-model="searchText"></u-input>
</template>
<script setup>
import UInput from "@/components/Input/index.vue";
import { ref } from 'vue'

const searchText = ref('')
</script>
