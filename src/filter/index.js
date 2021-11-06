import * as constDatas from './const'

export default {
  install (Vue) {
    Object.keys(constDatas).forEach(name => {
      const funName = name.slice(0, -4)
      Vue.filter(funName, (key) => {
        return constDatas[name][key] || constDatas[name].default
      })
    })
  },
}
