export default {
    data() {
        return {

        }
    },
    computed: {
        ueditorFontColor() {
            return this.initTheme()
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
