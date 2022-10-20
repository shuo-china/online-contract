import CInput from './input/index.vue'
import CTextarea from './textarea/index.vue'
import type { App } from 'vue'

const components = {
  CInput,
  CTextarea
}

const install = function (app: App) {
  for (const key in components) {
    app.component(key, components[key])
  }
}

export default {
  install
}
