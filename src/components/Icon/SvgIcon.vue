<script setup lang="ts">
import { computed, unref, ref, watch, nextTick } from "vue";
import { ElIcon } from "element-plus";
import { propTypes } from "@/utils/proptypes";
import Iconify from "@purge-icons/generated";

type Nullable<T> = T | null;
type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>;
const props = defineProps({
  // icon name
  icon: propTypes.string,
  // icon color
  color: propTypes.string,
  // icon size
  size: propTypes.number.def(16)
});

const elRef = ref<ElRef>(null);

const isLocal = computed(() => props.icon.startsWith("svg-icon:"));

const symbolId = computed(() => {
  return unref(isLocal) ? `#icon-${props.icon.split("svg-icon:")[1]}` : props.icon;
});

const getIconifyStyle = computed(() => {
  const { color, size } = props;
  return {
    fontSize: `${size}px`,
    color
  };
});

const updateIcon = async (icon: string) => {
  if (unref(isLocal)) return;

  const el = unref(elRef);
  if (!el) return;

  await nextTick();

  if (!icon) return;

  const svg = Iconify.renderSVG(icon, {});
  if (svg) {
    el.textContent = "";
    el.appendChild(svg);
  } else {
    const span = document.createElement("span");
    span.className = "iconify";
    span.dataset.icon = icon;
    el.textContent = "";
    el.appendChild(span);
  }
};

watch(
  () => props.icon,
  (icon: string) => {
    updateIcon(icon);
  }
);
</script>

<template>
  <ElIcon :size="size" :color="color">
    <svg v-if="isLocal" aria-hidden="true">
      <use :xlink:href="symbolId" />
    </svg>

    <span v-else ref="elRef" :class="$attrs.class" :style="getIconifyStyle">
      <span class="iconify" :data-icon="symbolId" />
    </span>
  </ElIcon>
</template>
