import type { App } from 'vue'
import { SvgIcon } from './Icon'

export const setupGlobCom = (app: App<Element>): void => {
  app.component('SvgCon', SvgIcon)
}
