<!-- 基础折叠面板 -->
<template>
    <u-collapse v-model="activeItemsNames">
        <u-collapse-item name="item21" title="这是第一个面板的标题">
            在这里放第一个面板的内容
        </u-collapse-item>
        <u-collapse-item name="item2" title="这是第二个面板的标题">
            在这里放第二个面板的内容
        </u-collapse-item>
        <u-collapse-item name="item3" title="这是第三个面板的标题">
            在这里放第三个面板的内容
        </u-collapse-item>
    </u-collapse>
</template>
<script setup>
import UCollapse from "@/components/Collapse/index.vue";
import UCollapseItem from "@/components/Collapse/CollapseItem.vue";
import { ref } from "vue";

const activeItemsNames = ref([]);
</script>
