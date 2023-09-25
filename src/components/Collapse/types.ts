import { Ref, InjectionKey } from "vue";

// 父组件Collapse的属性类型
export interface CollapseProps {
  // 用于绑定v-model
  modelValue: NameType[];
  // 是否为手风琴
  accordion?: boolean;
}

// 父子组件之间v-model的绑定，用于在父组件中获取当前所有已打开的item的name，实现手风琴
export interface CollapseEmits {
  (e: "update:modelValue", values: NameType[]): void;
  (e: "change", values: NameType[]): void;
}

// 子组件CollapseItem的属性类型
export type NameType = string | number;
export interface CollapseItemProps {
  // 通过判断当前name是否在activeNames中来判断当前item是否激活
  name: NameType;
  // item的title.title通过组件属性或者插槽来实现(组件属性作为默认值)
  // item的内容通过插槽展示
  title?: string;
  disabled?: boolean;
}

// 父子组件之间的上下文通信
// 父组件Collapse通过provide/inject将以下上下文中的内容传递给子组件CollapseItem
export interface CollapseContext {
  activeItemsNames: Ref<NameType[]>; // 存储要打开的item的names
  handleItemClick: (itemName: NameType) => void; // 处理item的点击事件
}
// 依赖注入的key
export const collapseContextKey: InjectionKey<CollapseContext> =
  Symbol("collapseContextKey");
