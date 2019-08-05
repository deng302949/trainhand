const {
  override,
  useBabelRc,
  addPostcssPlugins,
} = require('customize-cra');

//加上css 浏览器前缀
const autoprefixer = require('autoprefixer');
//将rem转成px
const px2rem = require('postcss-px2rem');

const postcssPlugins = [
  autoprefixer({
    browsers: ['last 2 version', 'not ie <= 8', 'iOS 7'],
    remove: true,
  }),
  //比例
  px2rem({ remUnit: 16 }),
];

// let addLoader = () => config => {
//   let modules = {
//     rules: [
//       {
//         test: /\.(txt|md)$/,
//         loader: require.resolve('raw-loader'),
//       },
//     ]
//   };
//   config.module = { ...config.module, ...modules }
//   return config;
// }

module.exports = override(
  addLessLoader({
    modifyVars,
    javascriptEnabled: true
  }),
  // useBabelRc(),
  addPostcssPlugins(postcssPlugins),
)