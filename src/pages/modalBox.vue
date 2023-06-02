<template>
    <div class="modalBox" v-show="visible" @click.self="closeModal">
        <slot name="modal"></slot>
    </div>
</template>

<script>
export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            scrollTop: undefined, // 距离顶端的值
            className: 'modalOpen' // 类名
        }
    },
    watch: {
        visible(val) {
            if (val) {
                this.afterOpen()
            } else {
                this.beforeClose()
            }
        }
    },
    methods: {
        // 打开弹层 要做的事
        afterOpen() {
            this.scrollTop = document.scrollingElement.scrollTop
            document.body.classList.add(this.className)
            document.body.style.top = `-${this.scrollTop}px`
        },
        // 弹层关闭之前 要做的事
        beforeClose() {
            document.body.classList.remove(this.className)
            document.scrollingElement.scrollTop = this.scrollTop
        },
        // 关闭弹窗
        closeModal() {
            this.$emit('update:visible', false)
        }
    },
    mounted() {

    }
}
</script>

<style lang="scss" scoped>
.modalBox {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background: rgb(0 0 0 / 40%);
}
</style>

