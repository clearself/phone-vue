<template>
    <div class="wrapper">
        <van-button type="warning">默认按钮</van-button>
        <van-search value="1231" placeholder="请输入搜索关键词"/>
        <div class="box"></div>
    </div>
</template>

<script>
export default {
    name: 'Vant',
    data() {
        return {}
    },
    mounted() {

    },
    methods: {}
}
</script>

<style scoped>

.box {
    background: red;
    width: 750px;
    height: 100px;
}

</style>
