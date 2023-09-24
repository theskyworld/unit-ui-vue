// 测试Button组件
import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Button from "./index.vue";

describe("test Button.vue", () => {
  // 测试在Button组件挂载之后的容器元素
  test("wrapper element after Button mounted", () => {
    // 使用@vue/test-utils工具中的mount方法（模拟vue中的mount方法）挂载Button组件，并传递props和slots给Button组件
    const wrapper = mount(Button, {
      // 传递组件属性
      props: {
        type: "primary",
      },
      slots: {
        // 传递默认插槽
        default: "button",
      },
    });
    // 测试挂载后的wrapper元素
    console.log(wrapper.html()); // <button class="u-button u-button--primary" type="button"><span>button</span></button>
    // 测试是否存在指定的类名
    // 被测试的目标元素为<template>下的最顶层元素且唯一的根元素，前面不包含注释等其它内容
    expect(wrapper.classes()).toContain("u-button--primary");

    // 测试是否存在指定的slot文本内容
    expect(wrapper.get("button").text()).toBe("button");
    expect(wrapper.get("button").text()).not.toBe("click");

    // 测试点击事件
    console.log(wrapper.get("button").trigger("click"));
    expect(wrapper.emitted()).toHaveProperty("click");
  });

  // 测试disabled属性
  test("disabled attribute", () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true,
      },
      slots: {
        default: "disabled",
      },
    });
    // 测试是否成功添加了disabled属性
    expect(wrapper.attributes("disabled")).toBeDefined();
    // 对元素button元素进行判断
    expect(wrapper.find("button").element.disabled).toBeDefined();

    // 点击事件应当失效
    wrapper.get("button").trigger("click");
    expect(wrapper.emitted()).not.toHaveProperty("click");
  });
});
