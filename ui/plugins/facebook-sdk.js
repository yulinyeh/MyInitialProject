export default ({ app, route }) => {
  window.fbAsyncInit = function () {
    window.FB.init({
      appId: '1061200460616036',
      xfbml: true,
      version: 'v2.11'
    })
  };
  (function (d, s, id) {
    var js
    var fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) { return }
    js = d.createElement(s); js.id = id
    js.src = 'https://connect.facebook.net/zh_TW/sdk.js'
    fjs.parentNode.insertBefore(js, fjs)
  }(document, 'script', 'facebook-jssdk'))

  app.router.afterEach((to, from, next) => {
    console.dir(next)
    // window.FB.AppEvents.logPageView() // 送出 Facebook SDK PageView
  })
}
