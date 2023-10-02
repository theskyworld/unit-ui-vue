<script setup lang='ts'>
import { createApp, onMounted, ref } from 'vue';
import { InputProps } from './types';
import UIcon from "../Icon/index.vue";




/*********************************导包分界线***************************************/
/* macros */
defineOptions({
    name: "UInput"
})


/* props */
const props = withDefaults(defineProps<InputProps>(), {
    type: "text",
    placeholder: '请输入内容...',
    before: true,
})
/* emits */
const emits = defineEmits(['update:modelValue'])

/* datas */
const inputWrapperRef = ref<HTMLSpanElement>();
onMounted(() => {
    if (props.icon) {
        // 创建Icon组件对应的app实例
        const IconApp = createApp(UIcon, {
            icon: props.icon
        });
        // 将Icon组件实例挂载到dom元素上
        const IconWrapperElem = document.createElement("i");
        IconApp.mount(IconWrapperElem);
        // 根据before或者after，将Icon组件实例的dom元素添加到input的前面或者后面
        const { before, after } = props;
        if (after) {
            IconWrapperElem.classList.add('u-icon--after');
            inputWrapperRef.value!.append(IconWrapperElem);
            return;
        }
        if (before) {
            IconWrapperElem.classList.add('u-icon--before');
            inputWrapperRef.value!.prepend(IconWrapperElem);
        }
    }
})




/* computed */



/* methods */



/* watch */


/* hooks */

/* useComposition */




</script>
<template>
    <span ref="inputWrapperRef" class="inputWrapper">
        <input :type="type" :placeholder="placeholder" :value="modelValue"
            @input="emits('update:modelValue', $event.target.value)" :class="{
                'disabled': disabled,
                'icon-before': icon,
                'icon-after': after
            }" />
    </span>
</template>
<style scoped></style>