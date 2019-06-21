import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './action'
import * as getters from './getter'
import state from './state'
import mutation from './mutation'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutation,
  actions,
  getters
})
