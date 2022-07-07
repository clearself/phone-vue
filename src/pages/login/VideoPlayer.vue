<template>
    <div class="player-wrap">
        <Xgplayer :config="configInfo" @player="Player = $event" />
    </div>
</template>

<script>
import Xgplayer from 'xgplayer-vue'
export default {
    name: 'VideoPlayer',
    components: {
        Xgplayer
    },
    props: {
        config: {
            type: Object,
            default: null
        },
        status: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            Player: null
        }
    },
    watch: {
        status(newVal) {
            if (!newVal) {
                console.log(this.configInfo.id + '要暂停')
                this.Player.pause()
            }
        }
    },
    computed: {
        configInfo() {
            return this.config
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.Player.emit('resourceReady', this.configInfo.resource)
            this.Player.on('play', () => {
                console.log(this.configInfo.id + '在播放')
                this.$emit('paly', this.configInfo.id)
            })
        })
    },
    destroyed() {

    },
    methods: {

    }
}

</script>

<style lang="scss" scoped>

</style>

