<template>
    <div class="modalTest">
        <!-- 按钮组 -->
        <div class="btn">
            <van-button type="danger" size="small" text="弹窗2" @click="modalSign2 = true" />
        </div>

        <!-- 背景数据 -->
        <div class="listBG">
            <ul>
                <li v-for="(item,index) in 50" :key="index">这是第{{item}}条背景数据</li>
            </ul>
        </div>

        <!-- 弹框1 -->
        <!-- <div class="modalBox" v-if="modalSign1" @touchmove.prevent @click.self="modalSign1 = false">
            <div class="modal">
                <ul>
                    <li v-for="(item,index) in 8" :key="index">这是第{{item}}条数据</li>
                </ul>
            </div>
        </div> -->
        <!-- 弹框2 -->
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
        <!-- <div class="modalBox" v-if="modalSign2" @click.self="closeModal">
            <div class="modal">
                <ul>
                    <li v-for="(item,index) in 20" :key="index">这是第{{item}}条数据</li>
                </ul>
            </div>
        </div> -->
    </div>
</template>

<script>
import ModalBox from './modalBox.vue'
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
    .modalTest{
        width:100%;
        min-height: 100vh;
        overflow: scroll;
        position: relative;
        .btn{
            padding: 10px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;
            &>button{
                margin: 10px 0;
            }
        }
        .listBG{
            text-align: center;
            line-height: 50px;
        }
    }
    .modal{
        width: 50%;
        height: 50%;
        overflow: scroll;
        background: #fff;
        border-radius: 10px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 20px;
    }
</style>

