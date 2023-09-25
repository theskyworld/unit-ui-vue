<!-- 可关闭的消息 -->
<template>
    <u-button @click="addMessage">add message</u-button>
</template>
<script setup>
import UButton from "@/components/Button/index.vue";
import { createMessage } from '@/components/Message/method'

function addMessage() {
    createMessage({ message: 'hello world', duration: 3000, showClose: true })
}
</script>
