<script setup lang='ts'>
import { RadioProps } from './typs';





/*********************************导包分界线***************************************/
/* macros */
defineOptions({
    name: 'URadio',
})


/* props */
const props = withDefaults(defineProps<RadioProps>(), {})
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
    <input type="radio" :id="label" name="monster" :value="modelValue" />
    <label :for="label"><span>{{ label }}</span></label>
</template>
<style scoped></style>