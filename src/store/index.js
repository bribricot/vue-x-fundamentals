// Create a reactive object allows us to store a global state instead of using VueX for now.

import { reactive } from 'vue'
import { createStore } from 'vuex' // <--- importing reactive

export default reactive({ flashMessage: '', event: null })
createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
})
// Add also the event property, because it's where we'll store the data returned from our API, and where our component will look for the data.

// Very similar to the Vue Instance


