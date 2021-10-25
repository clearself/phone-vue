export default {
    state: {
        data: [],
        teamData: []
    },
    mutations: {
        refreshData(state, {
            data
        }) {
            // eslint-disable-next-line no-return-assign
            return state.data = data
        },
        teamData(state, {
            data
        }) {
            if (data.first) {
                // eslint-disable-next-line no-return-assign
                return state.teamData = data.data
            } else {
                return state.teamData.push(data)
            }
        }
    },
    actions: {
        getRefresh(store, {
            data
        }) {
            store.commit('refreshData', {
                data
            })
        },
        getTeam(store, {
            data
        }) {
            store.commit('teamData', {
                data
            })
        }
    }
}
