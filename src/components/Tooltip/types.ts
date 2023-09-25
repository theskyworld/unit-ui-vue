import { Placement, Options, Modifier } from "@popperjs/core";

// 触发popper展示和隐藏的方式
export type TriggerType = "hover" | "click";

export interface TooltipProps {
  // popper中展示的内容
  content?: string;
  trigger?: TriggerType;
  // popper展示的位置
  placement?: Placement;
  // 是否通过手动的方式进行popper的展示和隐藏
  manual?: boolean;
  // popper的配置选项
  popperOptions?: Partial<Options> & Partial<Modifier<"offset", Options>>;
  // 定义动画
  transition?: string;
  // 展示和隐藏延迟
  openDelay?: number;
  closeDelay?: number;
}

export interface TooltipEmits {
  (e: "visible-change", value: boolean): void;
}

// 手动触发popper的展示和隐藏
export interface TooltipInstance {
  show: () => void;
  hide: () => void;
}
