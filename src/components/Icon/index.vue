<script setup lang='ts'>
import { computed } from "vue";
import { IconProps } from "./types";
import { omit } from "lodash-es";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";



/*********************************导包分界线***************************************/
/* macros */
defineOptions({
    name: "UIcon",
    inheritAttrs: false,
});


/* props */
const props = defineProps<IconProps>();

/* emits */


/* datas */
// 由于新增了自定义的属性,故对传入的属性值进行过滤,只将FontAwesomeIcon内置的属性值传递给该组件
// 通过lodash实现过滤
// npm install lodash-es --save
// npm install @types/lodash-es --save-dev

// 对属性进行过滤
// 将type和color属性进行过滤,不属于FontAwesomeIcon内置的属性
// 使用computed,使其具备响应式
const filteredProps = computed(() => omit(props, ["type", "color"]));



// 自定义样式
const customStyles = computed(() => {
    return props.color ? { color: props.color } : {};
});
/* computed */



/* methods */



/* watch */


/* hooks */

/* useComposition */

</script>
  <!-- 其本质为对fontawesome图标的FontAwesomeIcon组件进行封装 -->
  <!-- 将使用fontawesome时FontAwesomeIcon组件上需要的属性值改为通过Icon组件来传入,通过属性的透传实现值的传递 -->
  <!-- 并同时增加一些自定义的功能 -->
  <!-- :class="{[`u-icon--${type}`] : type}"  增加自定义的type属性功能 -->
  <!-- :style="customStyles"  增加图标自定义的样式,例如color等 -->
<template>
    <i class="u-icon" :class="{ [`u-icon--${type}`]: type }" :style="customStyles" v-bind="$attrs">
        <!-- 使用v-bind="$props"将defineProps中定义的属性透传到font-awesome-icon组件上 -->
        <font-awesome-icon v-bind="filteredProps"></font-awesome-icon>
    </i>
</template>
<style scoped></style>