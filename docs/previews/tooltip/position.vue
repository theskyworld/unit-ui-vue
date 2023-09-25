<!-- 指定弹出位置的弹出提示 -->
<template>
    <u-tooltip content="hello tooltip" :popperOptions="topOption">
        <u-button type="primary">top</u-button>
    </u-tooltip>
    <u-tooltip content="hello tooltip" :popperOptions="bottomOption">
        <u-button type="primary">bottom</u-button>
    </u-tooltip>
    <u-tooltip content="hello tooltip" :popperOptions="leftOption">
        <u-button type="primary">left</u-button>
    </u-tooltip>
    <u-tooltip content="hello tooltip" :popperOptions="rightOption">
        <u-button type="primary">right</u-button>
    </u-tooltip>
</template>
<script setup>
import UButton from "@/components/Button/index.vue";
import UTooltip from "@/components/Tooltip/index.vue";
import { ref } from "vue";

const topOption = ref({
    placement: 'top',
    strategy: 'fixed'
})
const bottomOption = ref({
    placement: 'bottom',
    strategy: 'fixed'
})
const leftOption = ref({
    placement: 'left',
    strategy: 'fixed'
})
const rightOption = ref({
    placement: 'right',
    strategy: 'fixed'
})
</script>
