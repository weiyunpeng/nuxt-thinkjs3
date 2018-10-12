module.exports = {
    dev: process.env.NODE_ENV !== 'production',
    srcDir: 'client/',
    buildDir: '.build/',
    offline: true,
    /*
  ** Headers of the page
  */
    head: {
        title: 'mystub',
        meta: [
            { charset: 'utf-8' },
            { 'http-equiv': 'cleartype', content: 'on' },
            { name: 'author', content: 'https://weiyunpeng.github.io' },
            { name: 'MobileOptimized', content: '320' },
            { name: 'HandheldFriendly', content: 'True' },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            {
                name: 'viewport',
                content:
                    'width=device-width, initial-scale=1.0, user-scalable=no'
            },
            { hid: 'keywords', name: 'keywords', content: 'weiyunpeng,mystub' },
            {
                hid: 'description',
                name: 'description',
                content: 'https://weiyunpeng.github.io'
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
  ** Global CSS
  */
    css: [
        '~assets/css/main.css',
        '~/assets/css/animate.min.css',
        'muse-ui/dist/muse-ui.css'
    ],
    plugins: [
        {
            src: '~plugins/MuseUI',
            ssr: true
        }
    ],
    /*
  ** Customize the progress-bar color
  */
    loading: { color: '#3B8070' },
    /*
   ** Build configuration
   */
    build: {
        /*
     ** Run ESLINT on save
     */
        extend(config, ctx) {
            if (ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                });
            }
        },
        extractCSS: true
    }
};
