<template>
    <div class="main home">
        <div class="box border-bottom">
            车生活是上海市
        </div>

        <van-button type="warning" text="显示遮罩层" @click="show = true" />
        <van-area title="标题" :area-list="areaList" :columns-placeholder="['请选择', '请选择', '请选择']" />
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
            <van-cell v-for="item in list" :key="item" :title="item" />
        </van-list>
        <van-overlay :class-name="$isMobile()?'':'is-pc'" :show="show" @click="show = false">
            <div class="wrapper" @click.stop>
                <div class="block" />
            </div>
        </van-overlay>
    </div>
</template>

<script>
import {
    areaList
} from '@vant/area-data'
import Vue from 'vue'
import { Button, Area, List, Cell, Toast, Popup, Overlay } from 'vant'

Vue.use(Button).use(Area).use(List).use(Cell).use(Toast).use(Popup).use(Overlay)
export default {
    name: 'Home',
    data() {
        return {
            areaList,
            show: false,
            list: [],
            loading: false,
            finished: false
        }
    },
    mounted() {
        // Toast('提示内容')
    },
    methods: {
        onLoad() {
            // 异步更新数据
            // setTimeout 仅做示例，真实场景中一般为 ajax 请求
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    this.list.push(this.list.length + 1)
                }

                // 加载状态结束
                this.loading = false

                // 数据全部加载完成
                if (this.list.length >= 40) {
                    this.finished = true
                }
            }, 1000)
        }
    }
}
</script>
<style lang="scss" scoped>
@import './style';
.box {
    width: 100%;
    height: 75px;
    // background-color: red;
    font-size: 16px;
}
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.block {
    overflow-y: auto;
    width: 120px;
    height: 300px;
    background-color: #ffffff;
}
</style>
