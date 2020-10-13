import Vue from './vue.esm.browser.js';

const app = new Vue({
  el: '#app',
  data() {
    return {
      counter: '0'   // в задании указано " с текстом 0 " сделано! инкремент все равно приводит к числу )
    }
  },
  methods: {
    addCounter() {
      this.counter++
    }
  }
})

