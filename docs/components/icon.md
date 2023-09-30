---
title: 图标Icon
description: Icon组件

prev:
  text: "消息"
  link: "./message.md"

next:
  text: "弹出提示"
  link: "./tooltip.md"
---

# 图标

展示来自 fontawesome 的图标。

## 用法

注册需要使用的图标

```ts
// main.ts
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
```

在组件中使用

```vue
<script setup lang="ts">
import UIcon from "@/components/icon/index.vue";
</script>

<template>
  <div class="iconContainer">
    <i><u-icon icon="fa-user"></u-icon></i>
  </div>
</template>

<style scoped></style>
```

## 基础

包含多种图标

<script setup lang="ts">
import UIcon from "@/components/icon/index.vue";
import {ref} from "vue";

const iconNames = ref<string[]>([
  'fa-address-book',
  'fa-adjust',
  'fa-air-freshener',
  'fa-ambulance',
  'fa-anchor',
  'fa-archive',
  'fa-atom',
  'fa-baby',
  'fa-backspace',
  'fa-balance-scale',
  'fa-barcode',
  'fa-bath',
  'fa-battery-full',
  'fa-bed',
  'fa-bell',
  'fa-bicycle',
  'fa-binoculars',
  'fa-bomb',
  'fa-book',
  'fa-bookmark',
  'fa-box',
  'fa-briefcase',
  'fa-bug',
  'fa-building',
  'fa-bus',
  'fa-calculator',
  'fa-calendar',
  'fa-camera',
  'fa-car',
  'fa-caret-up',
  'fa-certificate',
  'fa-chart-bar',
  'fa-check',
  'fa-chess-knight',
  'fa-circle',
  'fa-clipboard',
  'fa-cloud',
  'fa-code',
  'fa-coffee',
  'fa-cog',
  'fa-compass',
  'fa-crown',
  'fa-cut',
  'fa-database',
  'fa-desktop',
  'fa-dice',
  'fa-dog',
  'fa-dollar-sign',
  'fa-donate',
  'fa-door-open',
  'fa-dragon',
  'fa-drum',
  'fa-envelope',
  'fa-eye',
  'fa-fan',
  'fa-file',
  'fa-fire',
  'fa-flag',
  'fa-flask',
  'fa-football-ball',
  'fa-gamepad',
  'fa-gift',
  'fa-globe',
  'fa-graduation-cap',
  'fa-hammer',
  'fa-handshake',
  'fa-heart',
  'fa-home',
  'fa-hourglass',
  'fa-id-card',
  'fa-inbox',
  'fa-key',
  'fa-laptop',
  'fa-lightbulb',
  'fa-map',
  'fa-microphone',
  'fa-moon',
  'fa-music',
  'fa-paint-brush',
  'fa-paper-plane',
  'fa-paw',
  'fa-phone',
  'fa-plane',
  'fa-puzzle-piece',
  'fa-rocket',
  'fa-search',
  'fa-shield',
  'fa-snowflake',
  'fa-star',
  'fa-sun',
  'fa-thumbtack',
  'fa-umbrella',
  'fa-user',
  'fa-wallet',
  'fa-wheelchair',
  'fa-wifi',
  'fa-yin-yang'
]);


function copyIconName(iconName : string) {
    console.log(iconName)

   /* 复制内容到文本域 */
  navigator.clipboard.writeText(iconName);

  /* 弹出已复制的内容 */
  alert("复制的文本为: " + iconName);
}


</script>
<div class="iconContainer">
    <span @click='copyIconName(iconName)' v-for="iconName in iconNames" :key="iconName"><u-icon :icon="iconName"></u-icon></span>
</div>

<style scoped>
.iconContainer i {
    margin: 5px;
    border : solid 1px gray;
    width : 50px;
    height : 50px;
    border-radius :3px;
    cursor : pointer;
}
.iconContainer i:hover {
    background-color : rgb(224, 223, 223,.2);
}
</style>

## 尺寸

通过添加 `size` 属性来指定不同大小的图标，可选的值包括有`"2xs"`、`"xs"`、`"sm"`、`"lg"`、`"xl"`、`"2xl"`、`"1x"`、`"2x"`、`"3x"`、`"4x"`、`"5x"`、`"6x"`、`"7x"`、`"8x"`、`"9x"`、`"10x"`

代码示例

```vue
<u-icon icon="fa-user" size="5x"></u-icon>
```

<div>
<u-icon icon='fa-user' size='2xs'></u-icon>
<u-icon icon='fa-user' size='sm'></u-icon>
<u-icon icon='fa-user' size='lg'></u-icon>
<u-icon icon='fa-user' size='2xl'></u-icon>
<u-icon icon='fa-user' size='3x'></u-icon>
<u-icon icon='fa-user' size='5x'></u-icon>

</div>
