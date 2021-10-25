export default {
    data() {
        return {

        }
    },
    computed: {
        /* 是否是白板*/
        isWhite() {
            if (this.$store.state.common.currentTheme === 'white-theme') {
                return true
            } else {
                return false
            }
        },
        /* 饼图颜色*/
        plat_pieColors() {
            if (this.$store.state.common.currentTheme === 'white-theme') {
                return []
            }
        }
    },
    methods: {
        initTheme() {
            let theme = this.$store.state.common.currentTheme
            switch (theme) {
                case 'white-theme':
                    return '#000'
                default :
                    return '#fff'
            }
        }
    }
}
