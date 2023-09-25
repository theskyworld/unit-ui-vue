<!-- 基础下拉菜单 -->
<template>
    <u-dropdown :menuOptions="menuOptions">
        <u-button type="primary">dropdown</u-button>
    </u-dropdown>
</template>
<script setup>
import UDropdown from "@/components/Dropdown/index.vue";
import UButton from "@/components/Button/index.vue";

const menuOptions = [
    {
        key: "1",
        label: "这是第一条内容",
    },
    {
        key: "2",
        label: "这是第二条内容",
    },
    {
        key: "3",
        label: "这是第三条内容",
    }
];
</script>
