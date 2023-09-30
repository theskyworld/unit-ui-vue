<script setup lang='ts'>
import { InputProps } from './types';





/*********************************导包分界线***************************************/
/* macros */
defineOptions({
    name: "UInput"
})


/* props */
const props = withDefaults(defineProps<InputProps>(), {
    type: "text",
    placeholder: '请输入内容...'
})
/* emits */
const emits = defineEmits(['update:modelValue'])

/* datas */



/* computed */



/* methods */



/* watch */


/* hooks */

/* useComposition */




</script>
<template>
    <input :type="type" :placeholder="placeholder" :value="modelValue" @input="emits('update:modelValue', $event.target.value)" />
</template>
<style scoped></style>