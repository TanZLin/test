import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

import commons from './commons'
import cartstore from './cartstore'

const store = new Vuex.Store({
    modules:{
        commons,
        cartstore,
    }
})

export default store