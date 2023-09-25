<!-- 不同类型的消息 -->
<template>
    <u-button @click="addMessageSuccess">add message success</u-button>
    <u-button @click="addMessageDanger">add message danger</u-button>
</template>
<script setup>
import UButton from "@/components/Button/index.vue";
import { createMessage } from '@/components/Message/method'

function addMessageSuccess() {
    createMessage({ message: 'hello world', type: 'success', duration: 3000 })
}
function addMessageDanger() {
    createMessage({ message: 'hello world', type: 'danger', duration: 3000 })
}
</script>
