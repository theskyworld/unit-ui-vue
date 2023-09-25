<!-- 被禁用的折叠面板 -->
<template>
    <u-collapse v-model="activeItemsNames">
        <u-collapse-item name="item6" title="disabled" disabled></u-collapse-item>
    </u-collapse>
</template>
<script setup>
import UCollapse from "@/components/Collapse/index.vue";
import UCollapseItem from "@/components/Collapse/CollapseItem.vue";
import { ref } from "vue";

const activeItemsNames = ref([]);
</script>
