import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import state from './state.js'
import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'
let store=new Vuex.Store({
	state,
	mutations,
	getters,
	actions
})


export default store