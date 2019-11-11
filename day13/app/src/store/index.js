import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        orderbody: false,
        seachval: ''
    },
    mutations: {
        setBody(state, newValue) {
            state.orderbody = newValue
        },
        setVal(state, newValue) {
            state.seachval = newValue
        }
    },
    actions: {
        setBody(context, newValue) {
            context.commit('setBody', newValue)
        },
        setVal(context, newValue) {
            context.commit('setVal', newValue)
        }
    },
    getters: {
        getorderbody(state) {
            return state.orderbody
        },
        getseachval(state) {
            return state.seachval
        }
    }
})