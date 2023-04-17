import { h } from "vue";
import type { VNode } from "vue";
import SvgIcon from "@/components/Icon/SvgIcon.vue";
import { type IconTypes } from "@/types/icon";

export const useIcon = (props: IconTypes): VNode => {
  return h(SvgIcon, props);
};
