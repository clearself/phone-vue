export default {
    state: {
        chatForm: {
            chatId: '',
            chatType: '', // 聊天类型 0 群聊，1单人
            chatName: '', // 名称
            peopleNum: ''
        },
        chatPool: [],
        isExit: false
    },
    mutations: {
        changeExit(state, data) {
            // eslint-disable-next-line no-return-assign
            return state.isExit = data
        },
        refreshChatId(state, data) {
            // eslint-disable-next-line no-return-assign
            return state.chatForm.chatId = JSON.parse(JSON.stringify(data))
        },
        refreshChatType(state, data) {
            // eslint-disable-next-line no-return-assign
            return state.chatForm.chatType = JSON.parse(JSON.stringify(data))
        },
        refreshChatForm(state, data) {
            // eslint-disable-next-line no-return-assign
            return state.chatForm = JSON.parse(JSON.stringify(data))
        },
        refreshChatName(state, data) {
            // eslint-disable-next-line no-return-assign
            return state.chatForm.chatName = JSON.parse(JSON.stringify(data))
        },
        refreshChatPool(state, data) {
            return state.chatPool.push(data)
        },
        clearChatPool(state, data) {
            // eslint-disable-next-line no-return-assign
            return state.chatPool = []
        }
    },
    actions: {

    }
}
