<script setup lang='ts'>
import { ButtonProps } from './types';
import { ref } from "vue";
import UIcon from "../Icon/index.vue";





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
const buttonElemRef = ref<HTMLButtonElement>();


/* computed */



/* methods */



/* watch */


/* hooks */

/* useComposition */


/** 将获取到的button元素向外进行暴露，用于外部访问button元素
 * 例如
const buttonInstanceRef = ref();
onMounted(() => {
  console.log(buttonInstanceRef.value.ref); // button元素
})

  <div>
    <u-button ref="buttonInstanceRef">button</u-button>
  </div>
 */
defineExpose({
    ref: buttonElemRef,
})
</script>
<!-- 将注释内容放置外template元素的外部，用于保证当前组件测试的通过（被测试的目标元素为<template>下的最顶层元素且唯一的根元素，前面不包含注释等其它内容） -->
<!-- 添加button元素的固定样式和动态样式，其中动态样式包含固定的样式名和动态样式名两种 -->
<!-- 同时设置button元素原生属性disabled、autofocus和type的值 -->
<template>
    <button ref="buttonElemRef" class="u-button" :class="{
        [`u-button--${type}`]: type,
        [`u-button--${size}`]: size,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
        'is-loading': loading,
    }" :disabled="disabled || loading" :autofocus="autofocus" :type="nativeType">
        <!-- 添加图标 -->
        <u-icon icon="spinner" v-if="loading" spin></u-icon>
        <u-icon :icon="icon" v-if="icon"></u-icon>
        <span>
            <slot />
        </span>
    </button>
</template>
<style scoped></style>