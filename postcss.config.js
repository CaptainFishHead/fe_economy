export default {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      unitToConvert: 'px', // 要转换的单位，这里是将 px 转换为视口单位
      viewportWidth: 1920, // 设计稿的视口宽度，对应设计图的宽度 1920px
      unitPrecision: 5, // 单位转换后保留的小数位数
      propList: ['*'], // 可以从 px 转换为 vw 的属性列表，'*' 表示所有属性都进行转换
      viewportUnit: 'vw', // 希望使用的视口单位，这里使用 vw
      fontViewportUnit: 'vw', // 字体使用的视口单位
      selectorBlackList: ['.ignore', '.hairlines'], // 需要忽略的 CSS 选择器，这些类名的元素不会进行转换
      minPixelValue: 1, // 设置要替换的最小像素值，小于该值的 px 不会进行转换
      mediaQuery: false, // 是否允许在媒体查询中转换 px
      replace: true, // 是否直接替换而不是添加备用属性
      exclude: [/node_modules/], // 要排除的文件路径，使用正则表达式排除 node_modules 目录下的文件
      landscape: false, // 是否添加针对横屏时的媒体查询规则
      landscapeUnit: 'vw', // 横屏时使用的视口单位
      landscapeWidth: 1920 // 横屏时的视口宽度
    },
  },
}