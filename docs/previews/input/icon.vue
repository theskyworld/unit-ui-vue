<template>
    <u-input icon="fa-user" before placeholder="请输入你的内容..." v-model="searchText1"></u-input>
    <u-input icon="fa-eye" after placeholder="请输入你的内容..." v-model="searchText2"></u-input>
    <u-input icon="fa-lock" after placeholder="请输入你的内容..." v-model="searchText3"></u-input>
    <u-input icon="fa-coffee" before placeholder="请输入你的内容..." v-model="searchText4"></u-input>
    <u-input icon="fa-desktop" before placeholder="请输入你的内容..." v-model="searchText5"></u-input>
    <u-input icon="fa-phone" before placeholder="请输入你的内容..." v-model="searchText6"></u-input>
</template>
<script setup>
import UInput from "@/components/Input/index.vue";
import { ref } from 'vue'

const searchText1 = ref('');
const searchText2 = ref('');
const searchText3 = ref('');
const searchText4 = ref('');
const searchText5 = ref('');
const searchText6 = ref('');


</script>
