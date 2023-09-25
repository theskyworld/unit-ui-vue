// Button组件的属性类型
export interface ButtonProps {
  type?: ButtonTypes;
  size?: ButtonSizes;
  plain?: boolean;

  // 圆角相关
  round?: boolean;
  circle?: boolean;

  disabled?: boolean;
  icon?: string;
  loading?: boolean;
  // button元素内置原生属性
  nativeType?: NativeType; // nativeType即原生button元素的type属性，与这里的type进行区分
  autofocus?: boolean;
}
export type ButtonTypes = "primary" | "success" | "warning" | "danger" | "info";
export type ButtonSizes = "large" | "small";
export type NativeType = "button" | "submit" | "reset";


export interface UButtonInstance {
  ref: HTMLButtonElement;
}