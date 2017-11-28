// https://github.com/nuxt/nuxt.js/blob/dev/lib/common/options.js#L170
// console.log(process.env.NODE_ENV) // npm run dev: 'development', npm run build: 'production', npm run generate: 'production'
// const webpack = require('webpack')
module.exports = {
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    vendor: ['common-tags', 'uuid/v1'],
    plugins: [
      // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/), // 使用 moment without locale
      // new webpack.optimize.CommonsChunkPlugin({ // 在各 .vue 裡可視情況分類套件並載入
      //   async: 'common-in-lazy',
      //   minChunks: ({ resource } = {}) => (
      //     resource &&
      //     resource.includes('node_modules') &&
      //     (/moment/.test(resource) || /accounting/.test(resource))
      //   )
      // })
    ]
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    htmlAttrs: {
      lang: 'zh-Hant-TW'
    },
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: 'fund程式,模擬基金投資,基金競賽,基金比賽' },
      { hid: 'description', name: 'description', content: '' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: '中華民國證券投資信託暨顧問商業同業公會' },
      { hid: 'og:url', property: 'og:url', content: process.env.NODE_ENV === 'development' ? 'http://172.18.1.82:3000/' : 'http://taiwanfund.event-fundrich.com/' },
      { hid: 'og:title', property: 'og:title', content: '' },
      { hid: 'og:description', property: 'og:description', content: '' },
      { hid: 'og:image', property: 'og:image', content: process.env.NODE_ENV === 'development' ? 'http://172.18.1.82:3000/og.jpg' : 'http://taiwanfund.event-fundrich.com/og.jpg' },
      { hid: 'og:image:type', property: 'og:image:type', content: 'image/jpeg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '628' },
      { 'http-equiv': 'cache-control', content: 'max-age=0' } // 活動站需要時時更新，從 client 端指定沒有 cache 週期
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' },
      { rel: 'icon', type: 'image/png', href: './favicon.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#269384' },
  /*
  ** Customize app manifest
  */
  meta: {
    ogTitle: false, // 設定為 false，就不會跟頁面中的 head: { meta: [{ hid: 'og:title' }] } 資訊重複
    ogDescription: false // 設定為 false，就不會跟頁面中的 head: { meta: [{ hid: 'og:description' }] } 資訊重複
  },
  manifest: {
    start_url: 'http://taiwanfund.event-fundrich.com/?utm_source=web_app_manifest&utm_campaign=2017_taiwanfund_race',
    name: '創造勝利 fund 程式',
    short_name: 'fund 程式',
    background_color: '#FFF', // splash screen 背景色
    theme_color: '#269384', // 狀態列顏色
    orientation: 'portrait', // portrait: 直式, landscape: 橫式
    description: '全國大專院校基金投資模擬競賽',
    lang: 'zh-Hant-TW'
  },
  /*
  ** CSS
  */
  css: [
    'normalize.css',
    'hamburgers/dist/hamburgers.min.css',
    '@/assets/sass/main.sass'
  ],
  /*
  ** Plugins
  */
  plugins: [
    { src: '@/plugins/velocity', ssr: false }
  ],
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa',
    // ['@nuxtjs/google-tag-manager', { id: 'GTM-KV9327S' }],
    '@/modules/tapable',
    '@/modules/custom-loaders'
  ],
  /*
  ** Single page application is served under "./"
  */
  router: { base: '/' },
  /*
  ** Customize runtime options for rendering pages
  */
  render: {
    // 尚無法得知此以下設定是否有效
    // bundleRenderer: {
    //   shouldPreload: (file, type) => ['script', 'style', 'font'].includes(type)
    // },
    http2: { push: true },
    static: { maxAge: '15m' },
    gzip: { threshold: 9 }
  }
}
