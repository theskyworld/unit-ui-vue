<template>
    <u-radio v-model="选项2" name='单选' label="选项1"></u-radio>
    <u-radio v-model="选项2" name='单选' label="选项2"></u-radio>
    <u-radio v-model="选项3" name='单选' label="选项3"></u-radio>
</template>
<script setup>
import URadio from "@/components/Radio/index.vue";
import { ref } from 'vue'

const selectedValue = ref('')
</script>
