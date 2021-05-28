const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // 如果打开以下配置，就会走到 development 的 条件导出
  // resolve: {
  //   conditionNames: ['development'],
  // },
};
