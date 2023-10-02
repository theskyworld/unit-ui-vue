<script setup lang='ts'>
import { TextareaProps } from "./types";



/*********************************导包分界线***************************************/
/* macros */
defineOptions({
    name : 'UTextarea',
})


/* props */
const props = withDefaults(defineProps<TextareaProps>(), {})
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
    <textarea :name=name cols="30" rows="10" :value="modelValue" @input="emits('update:modelValue', ($event.target as any).value)"></textarea>
</template>
<style scoped></style>