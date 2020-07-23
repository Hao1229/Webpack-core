# Webpack-core
此專案的目的是為了往後開發若不使用前端框架，但又想使用 webpack，可直接 fork 此專案作為開發用基礎。

## webpack 指令
* `npm install`：剛 fork 此專案下來時，請先執行此指令，確保套件的安裝。

* `npm run dev`：執行這個指令會產生 dist 資料夾，裡頭包含未壓縮的打包內容。

* `npm run watch`：此指令用於開發上，讓 webpack 監聽開發的變更並即時更新開發版本的打包內容，建議與 vs code 的 live server 共用，使用 live server 開啟 dist 中打包好的 html 檔。

* `npm run build`：要交付或 deploy 檔案時，請使用此指令，將會產生一個 dist 資料夾，資料夾內所有檔案包括圖片皆會經過壓縮處理，直接交付 dist 資料夾即可。

## 已安裝套件
* eslint：此專案已安裝 standard 的 eslint，若需要修改 eslint 的 style 可參考 [eslint官網](https://eslint.org/)。

* babel：支援 js 高級寫法轉換。

* css、sass loader：目前只設定 sass、scss，若想要改成用 css 開發，請先到 `webpack.config.js` 做設定。

其他比較偏向 webpack 的自動化套件就不一一列出，詳細部分可以到 `package.json` 了解。

## 補充
若對 webpack 有疑慮的地方可以參考此篇[文章](https://hao1229.github.io/2020/07/22/webpackNote/#more)。