<script setup lang='ts'>
import { DropdownEmits, DropdownInstance, DropdownProps, MenuOption } from './types';
import UTooltip from '../Tooltip/index.vue';
import { TooltipInstance } from '../Tooltip/types';
import { ref } from 'vue';
import RenderVNode from "./RenderVNode";



/*********************************导包分界线***************************************/
/* macros */
defineOptions({
    name: "UDropdown",
})


/* props */
const props = withDefaults(defineProps<DropdownProps>(), {
    hideAfterClick: true,
})
/* emits */
const emits = defineEmits<DropdownEmits>();


/* datas */
const tooltipInstance = ref<TooltipInstance>();



/* computed */



/* methods */
function visibleChange(e: boolean) {
    emits('visible-change', e);
}

function onItemClick(e: MenuOption) {
    if (e.disabled) {
        return;
    }

    emits("select", e);
    if (props.hideAfterClick) {
        tooltipInstance.value!.hide();
    }
}


/* watch */


/* hooks */

/* useComposition */


/* bottom */
defineExpose<DropdownInstance>({
    show: () => tooltipInstance.value!.show(),
    hide: () => tooltipInstance.value!.hide(),
})
</script>
<template>
    <div class="u-dropdown">
        <u-tooltip ref="tooltipInstance" :trigger="trigger" :placement="placement" :popper-options="popperOptions"
            :open-delay="openDelay" :close-delay="closeDelay" @visible-change="visibleChange" :manual="manual">
            <slot></slot>
            <template #content>
                <ul class="u-dropdown__menu">
                    <template v-for="item in menuOptions" :key="item.key">
                        <!-- 用于当divided的值为true时，两个菜单选项之间的分割线 -->
                        <li v-if="item.divided" role="separator" class="divided-placeholder"></li>
                        <li @click="onItemClick(item)" :id="`dropdown-item-${item.key}`" class="u-dropdown__item"
                            :class="{ 'is-disabled': item.disabled, 'is-divided': item.divided }">
                            <!-- {{ item.label }}</li> -->
                            <!-- 支持真实DOM节点的渲染，不仅限于字符串 -->
                            <RenderVNode :vNode="item.label"></RenderVNode>
                        </li>
                    </template>
                </ul>
            </template>
        </u-tooltip>
    </div>
</template>
<style scoped></style>