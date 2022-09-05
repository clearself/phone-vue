<template>
    <div class="w100">
        <div v-for="item in videoList1" :key="item.id" :id="item.id" class="video-box">
            <video-player :config="item" :status="item.isPlay" @paly="paly" />
        </div>
    </div>
</template>

<script>
import VideoPlayer from '@/pages/login/VideoPlayer.vue'
export default {
    name: 'Video',
    components: {
        VideoPlayer
    },
    data() {
        return {
            player: null,
            videoList: [
                {
                    id: '12133214214',
                    videoOptions: {
                        autoplay: true,
                        controls: true,
                        sources: [
                            {
                                src: 'http://vod.flypa.cn/4fd98752f10fa8c8cd065e7a83496195/62c57864/video/tos/vod/tos-vod-cn-v-43075f6d946f3377/6370af90044048d49f78cdabc7650dfe/',
                                type: 'video/mp4'
                            }
                        ]
                    }
                }
            ],
            videoList1: [
                {
                    id: '121332142143',
                    isPlay: false,
                    playsinline: true,
                    playbackRate: [0.5, 1.0, 1.5, 2.0], // 可选择的播放速度
                    poster: 'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg',
                    fluid: true,
                    url: 'https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4',
                    resource: [{ name: '超清', url: 'https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4' }, { name: '高清', url: 'https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-480p.mp4' }, { name: '标清', url: 'https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4' }]
                },
                {
                    id: '121332142142',
                    isPlay: false,
                    playbackRate: [0.5, 1.0, 1.5, 2.0], // 可选择的播放速度
                    poster: 'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg',
                    fluid: true,
                    // cors: true, 请求是否跨域
                    url: 'https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4',
                    resource: [{ name: '超清', url: 'https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4' }, { name: '高清', url: 'https:/sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-480p.mp4' }, { name: '标清', url: 'https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4' }]
                },
                {
                    id: '121332142145',
                    isPlay: false,
                    fluid: true,
                    playbackRate: [0.5, 1.0, 1.5, 2.0], // 可选择的播放速度
                    poster: 'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg',
                    url: 'https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4',
                    resource: [{ name: '超清', url: 'https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4' }, { name: '高清', url: 'https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-480p.mp4' }, { name: '标清', url: 'https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4' }],
                    pip: true, // 开启画中画
                    screenShot: true // 开启截屏
                }
            ],
            title: '你的名字'
        }
    },
    mounted() {
        console.log(this.$userAgen())
    },
    methods: {
        paly(id) {
            this.videoList1 = this.videoList1.map(item => {
                if (item.id === id) {
                    item.isPlay = true
                } else {
                    item.isPlay = false
                }
                return item
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.video-box.xgplayer{
    width: 100% ;
    height:400px;
    margin:10px 0;
    position:relative;
}

</style>
