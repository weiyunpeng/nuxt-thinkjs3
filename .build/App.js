import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../client/assets/css/main.css'

import '../client/assets/css/animate.min.css'

import '../node_modules/muse-ui/dist/muse-ui.css'


import _6f6c098b from '../client/layouts/default.vue'

const layouts = { "_default": _6f6c098b }



export default {
  head: {"title":"mystub","meta":[{"charset":"utf-8"},{"http-equiv":"cleartype","content":"on"},{"name":"author","content":"https:\u002F\u002Fweiyunpeng.github.io"},{"name":"MobileOptimized","content":"320"},{"name":"HandheldFriendly","content":"True"},{"name":"apple-mobile-web-app-capable","content":"yes"},{"name":"viewport","content":"width=device-width, initial-scale=1.0, user-scalable=no"},{"hid":"keywords","name":"keywords","content":"weiyunpeng,mystub"},{"hid":"description","name":"description","content":"https:\u002F\u002Fweiyunpeng.github.io"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"style":[],"script":[]},
  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      }
    }, [ templateEl ])

    return h('div',{
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    
    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
    
  },
  components: {
    NuxtLoading
  }
}
