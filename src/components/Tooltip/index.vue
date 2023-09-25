<script setup lang='ts'>
import { computed, onUnmounted, ref, toRef, watch } from "vue";
import { TooltipEmits, TooltipInstance, TooltipProps } from "./types";
import { createPopper, Instance } from '@popperjs/core';
import useOnClickOutside from "./useOnClickOutside";
import { debounce } from 'lodash-es';



/*********************************导包分界线***************************************/
/* macros */
defineOptions({
    name: 'UTooltip',
})


/* props */
const props = withDefaults(defineProps<TooltipProps>(), {
    placement: 'bottom', // popper默认展示在下方
    trigger: 'hover', // 触发方式默认为hover
    transition: 'fade', // popper展示和隐藏的动画名默认为fade

    // 展示和隐藏的延迟效果
    openDelay: 0,
    closeDelay: 0
})
/* emits */
const emits = defineEmits<TooltipEmits>();

/* datas */
// 用于控制popper的展示或隐藏
const isOpen = ref(false);


// 触发浮层和展示popper的容器元素
const triggerPopperContainerElem = ref<HTMLElement>();
const popperContainerElem = ref<HTMLElement>();

// Tooltip组件容器元素，用于点击该元素之外的区域时关闭popper
const tooltipWrapperElem = ref<HTMLElement>();



// popper实例(使用createPopper()创建)
let popperInstance: Instance | null = null;


// 存储触发popper的动态事件
const events: Record<string, any> = ref({});

// 存储点击Tooltip组件容器元素之外的区域时关闭popper的事件
const outerEvents: Record<string, any> = ref({});



// 添加展示和隐藏的延迟，并添加debounce效果
// eslint-disable-next-line vue/no-setup-props-destructure
const { openDelay, closeDelay } = props;
const openDebounce = debounce(onOpen, toRef(openDelay).value);
const closeDebounce = debounce(onClose, toRef(closeDelay).value);
/* computed */
// popper配置对象
const popperOptions = computed(() => ({
    placement: props.placement, // popper的展示位置，值来自于组件属性
    modifiers: {
        name: 'offset',
        options: {
            offset: [0, 9]
        }
    },
    ...props.popperOptions, // 其它popper内置的配置属性
}))


/* methods */
// 侦听click事件，控制poppoer显隐
function onTogglePopper() {
    // isOpen.value = !isOpen.value;
    if (isOpen.value) {
        closePopper();
    } else {
        openPopper()
    }
    emits('visible-change', isOpen.value);
}

function onOpen() {
    isOpen.value = true;
    emits("visible-change", true);
}

function onClose() {
    isOpen.value = false;
    emits("visible-change", false);
}

function openPopper() {
    closeDebounce.cancel();
    openDebounce();

}
function closePopper() {
    openDebounce.cancel();
    closeDebounce();
}


// 动态绑定不同触发事件下的事件回调
function attachEvents() {
    // hover事件触发
    if (props.trigger === "hover") {
        events.value["mouseenter"] = openPopper;
        // 离开事件的回调绑定外外部元素上
        outerEvents.value["mouseleave"] = closePopper;
        // click事件触发
    } else if (props.trigger === "click") {
        events.value["click"] = onTogglePopper;
    }
}
if (!props.manual) {
    attachEvents();
}
/* watch */
/* watch */
// 监听isOpen的变化，进行popper实例的创建或销毁
watch(isOpen, (newValue) => {
    // isOpen的值发生变化时
    if (newValue) {
        if (triggerPopperContainerElem.value && popperContainerElem.value) {
            // 创建popper实例，用于展示popper
            popperInstance = createPopper(triggerPopperContainerElem.value, popperContainerElem.value, popperOptions.value as any)
        } else {
            // 销毁popper实例，隐藏popper
            popperInstance?.destroy()
        }
    }
}, { flush: "post" });

// 监听trigger的变化，在触发方式发生改变时相应地改变其绑定的事件回调
watch(() => props.trigger, (newTrigger, oldTrigger) => {
    if (newTrigger !== oldTrigger) {
        // 清空旧的events和outerEvents
        events.value = {};
        outerEvents.value = {};
        attachEvents();
    }
});

// 监听manual的变化，实现寿手动和非手动展示/隐藏popper的切换
watch(() => props.manual, (isManual) => {
    // 手动模式
    if (isManual) {
        events.value = {};
        outerEvents.value = {};
        // 非手动模式
    } else {
        attachEvents();
    }
})

/* hooks */

/* useComposition */
// 点击Tooltip组件容器元素外部时关闭popper
useOnClickOutside(tooltipWrapperElem, () => {
    if (props.trigger === "click" && isOpen.value && !props.manual) {
        closePopper();
    }
})




/* bottom */
defineExpose<TooltipInstance>({
    show: openPopper,
    hide: closePopper,
})
onUnmounted(() => {
    popperInstance?.destroy()
})
</script>
  <!-- 将离开的事件回调绑定在外部元素上，避免鼠标一离开触发元素就隐藏popper（即使鼠标在popper上时） -->

<template>
    <div v-on="outerEvents" class="u-tooltip" ref="tooltipWrapperElem">
        <!-- 用于触发的区域 -->
        <!-- 动态绑定触发事件 -->
        <div v-on="events" ref="triggerPopperContainerElem" class="u-tooltip__trigger">
            <slot />
        </div>
        <!-- 用于展示的区域 -->
        <Transition :name="transition">
            <div v-if="isOpen" ref="popperContainerElem" class="u-tooltip__popper">
                <!-- {{ content }}用于接收普通文本字符串内容 -->
                <!-- slot用于接收DOM元素、组件等内容 -->
                <slot name="content">
                    {{ content }}
                </slot>
                <!-- 添加popper的arrow -->
                <div id="arrow" data-popper-arrow></div>
            </div>
        </Transition>
    </div>
</template>
<style scoped></style>