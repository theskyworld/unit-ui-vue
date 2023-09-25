<script setup lang='ts'>
import { InjectionKey, provide, ref, watch } from 'vue';
import { CollapseContext, CollapseEmits, CollapseProps, NameType, collapseContextKey } from './types';





/*********************************导包分界线***************************************/
/* macros */
defineOptions({
    name: "UCollapse",
});


/* props */
const props = defineProps<CollapseProps>();
/* emits */
const emits = defineEmits<CollapseEmits>();


/* datas */
// 存储当前已打开的item的name值
// eslint-disable-next-line vue/no-setup-props-destructure
const activeItemsNames = ref<NameType[]>(props.modelValue);


/* computed */



/* methods */

// 处理点击当前item的title进行当前item的打开或关闭的事件
const handleItemClick = (itemName: NameType) => {
    // 手风琴模式，只能存在一个被打开的item
    if (props.accordion) {
        activeItemsNames.value = [
            // 当前item是打开的，无需处理，否则将当前item作为要打开的item（作为activeItemsNames.value[0]的值）
            activeItemsNames.value[0] === itemName ? "" : itemName,
        ];
    } else {
        // 先判断当前item是打开还是关闭的（name值是否存在activeItemsNames中）
        const curItemNameIndex = activeItemsNames.value.indexOf(itemName);
        if (curItemNameIndex > -1) {
            // 已打开，点击则关闭
            activeItemsNames.value.splice(curItemNameIndex, 1);
        } else {
            // 未打开，点击则打开
            activeItemsNames.value.push(itemName);
        }
    }

    emits("update:modelValue", activeItemsNames.value);
    emits("change", activeItemsNames.value);
};


/* watch */
// 异步更新activeItemsNames的值
// 用于在例如延迟一段时间之后更新openedValue的值
// openedValue与activeNames进行双向绑定
// const openedValue = ref([]);
// setTimeout(() => {
//     openedValue = ["item1", "item2"]
// })
// <u-collapse v-model='openedValue' accordion>
// </u-collapse>
watch(
    () => props.modelValue,
    () => {
        activeItemsNames.value = props.modelValue;
    }
);

/* hooks */

/* useComposition */


/* bottom */
// 将以上定义的两个属性通过provide/inject传递给子组件
provide(collapseContextKey, {
    activeItemsNames,
    handleItemClick,
});
</script>
<template>
    <div class="u-collapse">
        <slot />
    </div>
</template>
<style scoped></style>