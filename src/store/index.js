import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hotelsData: []
  },
  mutations: {
    SET_HOTELS_DATA (state, hotelsData) {
      state.hotelsData = hotelsData
    }
  },
  actions: {
    loadHotelsData ({ commit }) {
      axios
        .get('https://my-json-server.typicode.com/asesyolkin/cuva_tt/hotels')
        .then(responce => responce.data)
        .then(hotelsData => {
          commit('SET_HOTELS_DATA', hotelsData)
        })
    }
  },
  modules: {
  }
})
