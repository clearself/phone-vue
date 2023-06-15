<template>
    <div id="viewer"></div>
</template>

<script>
import { Viewer, utils } from '@photo-sphere-viewer/core'
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin'
import { GalleryPlugin } from '@photo-sphere-viewer/gallery-plugin'
import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin'
import '@photo-sphere-viewer/core/index.css'
import '@photo-sphere-viewer/markers-plugin/index.css'
import '@photo-sphere-viewer/gallery-plugin/index.css'
export default {
    props: {
        hasAnimate: {
            type: Boolean,
            default: true
        },
        imgList: [],
        hasGallery: {
            type: Boolean,
            default: true
        }
    },
    components: {},
    data() {
        return {
            viewer: '',
            panoramaUrl: '',
            markersPlugin: '',
            autorotatePlugin: '',
            galleryPlugin: '',
            currIndex: 0,
            animatedValues: {
                pitch: { start: -Math.PI / 2, end: 0.2 },
                yaw: { start: Math.PI, end: 0 },
                zoom: { start: 0, end: 50 },
                fisheye: { start: 2, end: 0 }
            },
            defaultUrl: require('../assets/img/vr4.jpg')
        }
    },
    created() {},
    mounted() {
        this.panoramaUrl = this.imgList[0].panorama || this.defaultUrl
        this.initViewer()
        // this.handelListenerViewerClick()
        this.handleSelectMarker()
        this.handleHoverMarker()
        this.handleLeaveMarker()
        this.$nextTick(() => {
            this.handleGalleryChange()
        })
    },
    watch: {},
    methods: {
        // 入场动画
        enteraAimation() {
            const _this = this
            // _this.autorotatePlugin.stop()
            new utils.Animation({
                properties: _this.animatedValues,
                duration: 2500,
                easing: 'inOutQuad',
                onTick: (properties) => {
                    _this.viewer.setOption('fisheye', properties.fisheye)
                    _this.viewer.rotate({ yaw: properties.yaw, pitch: properties.pitch })
                    _this.viewer.zoom(properties.zoom)
                }
            }).then(() => {
                if (this.hasGallery) {
                    this.galleryPlugin.setItems(this.imgList) // 设置图库
                }
                // _this.autorotatePlugin.start()
            })
        },
        initViewer() {
            const _this = this
            this.viewer = new Viewer({
                container: 'viewer',
                panorama: this.panoramaUrl || this.defaultUrl,
                caption: 'test',
                loadingImg: require('../assets/img/loading.gif'),
                touchmoveTwoFingers: false,
                mousewheelCtrlKey: false,
                defaultPitch: this.animatedValues.pitch.start,
                defaultYaw: this.animatedValues.yaw.start,
                defaultZoomLvl: this.animatedValues.zoom.start,
                fisheye: this.animatedValues.fisheye.start,
                navbar: [
                    'autorotate',
                    'zoom',
                    'markers',
                    'move',
                    'download',
                    'gallery',
                    {
                        title: 'Rerun animation',
                        content: '🔄',
                        onClick: _this.enteraAimation
                    },
                    'caption',
                    'fullscreen'
                ],
                plugins: [
                    [
                        GalleryPlugin,
                        {
                            visibleOnLoad: false,
                            hideOnClick: false
                        }
                    ],
                    [
                        AutorotatePlugin,
                        {
                            autostartDelay: 1000,
                            autorotateSpeed: '3rpm'
                            /*   autorotatePitch: _this.animatedValues.pitch.end,
                    autostartOnIdle: false, */
                        }
                    ],
                    [
                        MarkersPlugin,
                        {
                            markers: []
                        }
                    ]
                ]
            })
            _this.markersPlugin = _this.viewer.getPlugin(MarkersPlugin)
            _this.autorotatePlugin = _this.viewer.getPlugin(AutorotatePlugin)
            _this.galleryPlugin = _this.viewer.getPlugin(GalleryPlugin)
            if (_this.hasGallery) {
                _this.galleryPlugin.setItems(_this.imgList) // 设置图库
            }
            _this.viewer.addEventListener('ready', _this.handleViewerReady, {
                once: true
            })
        },
        handleViewerReady() {
            this.enteraAimation()
            console.log(this.imgList[this.currIndex].markers, 'this.imgList[this.currIndex].markers')
            this.markersPlugin.setMarkers(this.imgList[this.currIndex].markers) // 设置标签
            this.showInitMarker()
            setTimeout(() => {
                this.autorotatePlugin.setKeypoints(this.imgList[this.currIndex].markers)
            }, 3000)
        },
        showInitMarker() {
            const _this = this
            this.viewer
                .animate({
                    yaw: '-27deg',
                    pitch: '-6deg',
                    speed: 100
                })
                .then(() => {
                    _this.markersPlugin.showMarkerTooltip('new-marker1')
                    _this.autorotatePlugin.start()
                })
        },
        // 清除标记
        clearMarker() {
            this.markersPlugin.clearMarkers()
        },
        // 更新标记
        updateMarker(id, imgUrl) {
            this.markersPlugin.updateMarker({
                id: id,
                image: imgUrl
            })
        },
        updateIndex(index) {
            this.currIndex = index
            this.panoramaUrl = this.imgList[index].panorama
        },
        // 选择标记事件
        handleSelectMarker() {
            const _this = this
            this.markersPlugin.addEventListener('select-marker', ({ marker }) => {
                this.$emit('selectMarker', marker)
            })
        },
        // 标记悬停事件
        handleHoverMarker() {
            // this.markersPlugin.addEventListener('enter-marker', ({ marker }) => {
            //     /*  console.log("enter"); */
            // })
        },
        handleLeaveMarker() {
            // this.markersPlugin.addEventListener('leave-marker', ({ marker }) => {
            //     /* console.log("leave"); */
            // })
        },
        // gallery图库列表切换
        handleGalleryChange() {
            const _this = this
            let _sindex = ''
            document.addEventListener('click', function(e) {
                var element = document.elementFromPoint(e.clientX, e.clientY)
                let flag = false
                if (element && element.dataset && element.dataset.psvGalleryItem) {
                    const id = element.dataset.psvGalleryItem
                    _sindex = _this.imgList.findIndex((data) => {
                        return data.id == id
                    })
                    flag = true
                } else {
                    if (element && element.className == 'psv-gallery-item-thumb') {
                        const eleId =
                element.parentElement.parentElement.dataset.psvGalleryItem
                        _sindex = _this.imgList.findIndex((data) => {
                            return data.id == eleId
                        })
                        flag = true
                    }
                }
                if (flag) {
                    if (_this.currIndex == _sindex) {
                        console.log('点击了未切换')
                    } else {
                        _this.currIndex = _sindex
                        _this.panoramaUrl = _this.imgList[_sindex].panorama
                        _this.handelChangeViewer('gallery')
                    }
                }
            })
        },
        // 图库列表当前选中active更新
        handelGalleryActive() {
            const galleryBox = document.getElementsByClassName(
                'psv-gallery-container'
            )[0]
            const galleryItemEle =
          document.getElementsByClassName('psv-gallery-item')[this.currIndex]
            galleryBox.childNodes.forEach((item) => {
                item.className = 'psv-gallery-item'
            })
            galleryItemEle.classList.add('psv-gallery-item--active')
        },
        /** *
       * viewer 切换场景
       * */

        handelChangeViewer(type) {
            const _this = this
            if (_this.viewer) {
                _this.clearMarker()
                _this.handelGalleryActive()
                _this.viewer.setPanorama(_this.panoramaUrl).then(() => {
                    console.log(_this.imgList[_this.currIndex].markers, '_this.imgList[_this.currIndex].markers')
                    _this.markersPlugin.setMarkers(
                        _this.imgList[_this.currIndex].markers
                    )
                    _this.markersPlugin.showMarkerTooltip(_this.imgList[_this.currIndex].markers[0].id)
                })
                if (type != 'gallery') {
                    this.handelGalleryActive()
                }
            }
        },
        // viewer点击事件监听
        handelListenerViewerClick(addMarker) {
            const _this = this
            const emptyMarker = {
                image: require('./../assets/img/local.png'),
                width: 32,
                height: 32
            }
            addMarker = addMarker || emptyMarker
            this.viewer.addEventListener('click', ({ data }) => {
                if (!data.rightclick) {
                    _this.$emit('viewerClick', data)
                    _this.markersPlugin.addMarker({
                        id: '#' + Math.random(),
                        position: { yaw: data.yaw, pitch: data.pitch },
                        image: addMarker.image || require('./../assets/img/local.png'),
                        size: {
                            width: addMarker.width || 32,
                            height: addMarker.height || 32
                        },
                        anchor: 'bottom center',
                        tooltip: addMarker.tooltip || '新增标记',
                        data: {
                            generated: true
                        }
                    })
                }
            })
        },
        randomPoints() {
        /*  this.markersPlugin.showMarkerTooltip("new-marker3"); */
            this.markersPlugin.showAllTooltips()
        }
    }
}
</script>
  <style lang="scss" scoped>
    #viewer {
        width: 100%;
        height: 100%;
    }
    ::v-deep .custom-tooltip {
        .psv-tooltip-content {
            color: red;
        }
    }
  </style>

