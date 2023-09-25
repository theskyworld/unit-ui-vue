<!-- 禁用的下拉菜单 -->
<template>
    <u-dropdown :menuOptions="menuOptions">
        <u-button type="primary">dropdown</u-button>
    </u-dropdown>
</template>
<script setup>
import UDropdown from "@/components/Dropdown/index.vue";
import UButton from "@/components/Button/index.vue";
import { h } from 'vue';
const menuOptions = [
    {
        key: "1",
        label: "item1",
    },
    {
        key: "2",
        label: h("b", "this should be bold"),
        disabled: true
    },
    {
        key: "3",
        label: "item3",
    },
    {
        key: "4",
        label: "item4",
    }
];
</script>
