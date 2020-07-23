const path = require('path');
module.exports = {
  entry: './src/index.js',
  // 進入點，所以檔案必須與此檔案有關聯才會被編譯
  output: {
    filename: 'index.bundle.js',
    // 編譯檔案名稱
    path: path.resolve(__dirname, 'dist')
    // 編譯檔案的位置
  }
};