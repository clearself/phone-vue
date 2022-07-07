<template>
    <div id="app" >
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {}
    },
    created() {
        if (!this.$isMobile()) {
            document.body.style.maxWidth = '750px'
            document.body.style.margin = '0 auto'
        }
    },
    methods: {
    }
}
</script>

<style lang="scss">
html,body,#app{
    height: 100%;
    width: 100%;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

</style>
