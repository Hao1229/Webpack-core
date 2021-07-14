# Webpack-core
此專案的目的是為了往後開發若不使用前端框架，但又想使用 webpack，可直接 fork 此專案作為開發用基礎。

## webpack 指令
* `npm install`：剛 fork 此專案下來時，請先執行此指令，確保套件的安裝。

* `npm run dev`：執行此指令會產生 localhost 的本地路徑，可以透過此路經監聽開發。

* `npm run build`：要交付或 deploy 檔案時，請使用此指令，將會產生一個 dist 資料夾，資料夾內所有檔案包括圖片皆會經過壓縮處理，直接交付 dist 資料夾即可。

## 已安裝套件
* eslint：此專案已安裝 standard 的 eslint，若需要修改 eslint 的 style 可參考 [eslint官網](https://eslint.org/)。

* babel：支援 js 高級寫法轉換。

* css、sass loader：目前只設定 sass、scss，若想要改成用 css 開發，請先到 `webpack.config.js` 做設定。

* webpack dev server：此套件幫助我們在執行 `npm run dev` 時可產生本地路徑，監聽開發，若要更改監聽目標資料夾或是 port，可到 `webpack.config.js` 設定。

其他比較偏向 webpack 的自動化套件就不一一列出，詳細部分可以到 `package.json` 了解。

* jQuery：此專案已安裝 jQuery 方便開發，若不需要移除即可。

## pug html template
這邊推薦一種 html 的開發寫法，透過 pug 即使我們不使用框架，也能做類似框架中 template、component 的撰寫：
執行 `npm i -D pug html-loader pug-html-loader` 安裝，在 `webpack.config.js` 中設定：
```js
module: {
  rules: [{
    test: /\.pug$/,
    use: ['html-loader','pug-html-loader']
  }]
}
```
plugin 的 HtmlWebpackPlugin 記得將要輸出的檔案副檔名改成 `.pug`。

## 注意
目前此核心，尚未針對 html 的 img tag 做處理，引用圖片部分會較為麻煩。
這邊建議若要使用此核心做開發，圖片部分用 css `background-image` 來處理會是較佳的選擇。

## 補充
若對 webpack 有疑慮的地方可以參考此篇[文章](https://hao1229.github.io/2020/07/22/webpackNote/#more)。