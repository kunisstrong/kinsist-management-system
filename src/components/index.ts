import type { App } from "vue";
import SvgIcon from "./Icon/SvgIcon.vue";

export const setupGlobCom = (app: App<Element>): void => {
  app.component("SvgIcon", SvgIcon);
};
