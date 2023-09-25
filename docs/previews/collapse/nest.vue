<!-- 嵌套的折叠面板 -->
<template>
    <u-collapse v-model="activeItemsNames">
        <u-collapse-item name="item1" title="面板1">
            <u-collapse v-model="activeItemsNamesInner1">
                <u-collapse-item name="item1" title="面板1-1">
                    面板1-1内容
                </u-collapse-item>
            </u-collapse>
            <u-collapse v-model="activeItemsNamesInner2">
                    <u-collapse-item name="item1" title="面板1-2">
                        面板1-2内容
                    </u-collapse-item>
                </u-collapse>
        </u-collapse-item>
    </u-collapse>
</template>
<script setup>
import UCollapse from "@/components/Collapse/index.vue";
import UCollapseItem from "@/components/Collapse/CollapseItem.vue";
import { ref } from "vue";

const activeItemsNames = ref([]);
const activeItemsNamesInner1 = ref([]);
const activeItemsNamesInner2 = ref([]);
</script>
