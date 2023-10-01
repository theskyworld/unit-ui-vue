export interface InputProps {
  // 内置属性
  type: string;
  placeholder: string;
  value?: any;

  // 组件双向绑定
  modelValue?: any;

  // 禁用
  disabled?: boolean;
}
