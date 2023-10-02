<template>
    <u-textarea v-model="searchText"></u-textarea>
</template>
<script setup>
import UTextarea from "@/components/Textarea/index.vue";
import { ref } from 'vue'

const searchText = ref('')
</script>
