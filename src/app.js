import Vue from 'vue'
import index from './index.vue'

// root インスタンスを作成する
new Vue({
  el: '#components-demo',
  render: h => h(index)
})