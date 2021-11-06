/*
 * @Descripttion:
 * @Author: pujianguo
 * @Date: 2021-11-06 02:38:16
 */
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('styles', resolve('src/styles'))
      .set('components', resolve('src/components'))
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          hack: 'true; @import "~styles/mixins.less";',
        },
      },
    },
  },
}
