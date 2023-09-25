<!-- 指定触发方式的弹出提示 -->
<template>
    <u-tooltip :trigger="triggerEvent" content="hello tooltip">
        <u-button type="primary">click</u-button>
    </u-tooltip>
</template>
<script setup>
import UButton from "@/components/Button/index.vue";
import UTooltip from "@/components/Tooltip/index.vue";
import { ref } from "vue";

const triggerEvent = ref('click');
</script>
