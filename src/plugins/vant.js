import {
  Button,
} from 'vant'

const components = [
  Button,
]

export default {
  install (Vue) {
    components.forEach(component => {
      Vue.component(component.name, component)
    })
  },
}
