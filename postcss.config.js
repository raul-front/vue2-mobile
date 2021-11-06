module.exports = {
  plugins: {
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: {},
    'postcss-pxtorem': {
      // rootValue: 75,
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      // unitPrecision: 5,
      propList: ['*', '!font-size'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 2,
    },
  },
}
// module.exports = () => ({
//   plugins: [
//     require('postcss-pxtorem')({
//       rootValue: 37.5,
//       // propList: ['*'],
//       propList: ['*', '!font-size'],
//       exclude: function (file) {
//         console.log('file111', file)
//         return !file.includes('node_modules/vant/es')
//       },
//     }),
//     require('postcss-pxtorem')({
//       rootValue: 75,
//       // propList: ['*'],
//       propList: ['*', '!font-size'],
//       exclude: function (file) {
//         console.log('file222', file)
//         return file.includes('node_modules/vant/es')
//       },
//     }),
//   ],
// })
