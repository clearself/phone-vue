<template>
    <div class="modalTest">
        <!-- 按钮组 -->
        <div class="btn">
            <van-button type="danger" size="small" text="弹窗2" @click="modalSign2 = true" />
        </div>

        <!-- 背景数据 -->
        <!-- <div class="listBG">
            <ul>
                <li v-for="(item,index) in 50" :key="index">这是第{{item}}条背景数据</li>
            </ul>
        </div> -->
        <ModalBox :visible.sync="modalSign2">
            <div slot="modal" class="modal">
                <van-button type="danger" size="small" text="关闭" @click="modalSign2 = false" />
                <ul>
                    <li>egfbbfbbfbfd</li>
                    <li>egfbbfbbfbfd</li>
                    <li>egfbbfbbfbfd</li>
                    <li>egfbbfbbfbfd</li>
                    <li>egfbbfbbfbfd</li>
                    <li>egfbbfbbfbfd</li>
                    <li>egfbbfbbfbfd</li>
                    <li>egfbbfbbfbfd</li>
                    <li>egfbbfbbfbfd</li>
                    <li>egfbbfbbfbfd</li>
                    <li>egfbbfbbfbfd</li>
                    <li>egfbbfbbfbfd</li>
                    <li>egfbbfbbfbfd</li>
                    <li>egfbbfbbfbfd</li>
                    <li>egfbbfbbfbfd</li>
                    <li>egfbbfbbfbfd</li>
                    <li>egfbbfbbfbfd</li>
                    <li>egfbbfbbfbfd</li>
                    <li>egfbbfbbfbfd</li>
                    <li>egfbbfbbfbfd</li>
                    <li>egfbbfbbfbfd</li>
                    <li>egfbbfbbfbfd</li>
                    <li>egfbbfbbfbfd</li>
                    <li>egfbbfbbfbfd</li>
                </ul>
            </div>
        </ModalBox>
        <div class="ub ub-ver ub-ae w100" style="height: 500px;border: 1px solid red;">
            <div class="box red"></div>
            <div class="box green"></div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'vant'
import ModalBox from './modalBox.vue'

Vue.use(Button)
export default {
    components: {
        ModalBox
    },
    data() {
        return {
            modalSign2: false
        }
    },
    methods: {
    },
    mounted() {

    }
}
</script>

<style type="text/scss" lang="scss" scoped>
    .modalTest {
        position: relative;
        overflow: scroll;
        width: 100%;
        min-height: 100vh;
        .btn {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;
            padding: 10px;
            &>button {
                margin: 10px 0;
            }
        }
        .listBG {
            text-align: center;
            line-height: 50px;
        }
    }
    .modal {
        position: absolute;
        top: 50%;
        left: 50%;
        overflow: scroll;
        padding: 20px;
        width: 50%;
        height: 50%;
        border-radius: 10px;
        background: #ffffff;
        transform: translate(-50%, -50%);
    }
    .box {
        width: 100px;
        height: 100px;
    }
    .red {
        background-color: red;
    }
    .green {
        background-color: green;
    }
</style>

