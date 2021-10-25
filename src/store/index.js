import Vue from 'vue'
import Vuex from 'vuex'

import bpmn from './modules/bpmn'
import common from './modules/common'
import referee from './modules/defense_drill/referee'
import chat from './modules/chat_room/chat'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        bpmn,
        common,
        referee,
        chat
    },
    state: {},
    mutations: {

    },
    actions: {},
    getters: {}
})
