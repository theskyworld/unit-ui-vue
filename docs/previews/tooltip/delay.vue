<!-- 指定延时效果的弹出提示 -->
<template>
    <u-tooltip content="hello tooltip" :openDelay="1000" :closeDelay="1000">
        <u-button type="primary">top</u-button>
    </u-tooltip>
</template>
<script setup>
import UButton from "@/components/Button/index.vue";
import UTooltip from "@/components/Tooltip/index.vue";

</script>
    