<script setup lang='ts'>
import { ButtonProps } from './types';





/*********************************导包分界线***************************************/
/* macros */
// 修改当前组件的对外导出组件名
defineOptions({
    name: "UButton",
});


/* props */
const props = withDefaults(defineProps<ButtonProps>(), {
    nativeType: 'button',
})
/* emits */


/* datas */



/* computed */



/* methods */



/* watch */


/* hooks */

/* useComposition */

</script>
<template>
    <!-- 添加button元素的固定样式和动态样式，其中动态样式包含固定的样式名和动态样式名两种 -->
    <!-- 同时设置button元素原生属性disabled、autofocus和type的值 -->
    <button ref="_ref" class="u-button" :class="{
        [`u-button--${type}`]: type,
        [`u-button--${size}`]: size,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
        'is-loading': loading,
    }" :disabled="disabled || loading" :autofocus="autofocus" :type="nativeType">
        <span>
            <slot />
        </span>
    </button>
</template>
<style scoped></style>