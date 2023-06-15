<template>
    <div style="width: 100%; height: 100vh;">
        <photoSphereViewer
            style="width: 100%; height: 100%;"
            ref="viewer"
            :imgList="photoList"
            @selectMarker="selectMarker"
        />
    </div>
</template>

<script>
import photoSphereViewer from '@/components/PhotoSphereViewer.vue'
import { markers, photos } from '@/components/data.js'
export default {
    props: [],
    components: { photoSphereViewer },
    data() {
        return {
            photoList: photos
        }
    },
    created() {},
    mounted() {},
    methods: {
        selectMarker(marker) {
            console.log('here page')
            console.log(marker)
            const myViewer = this.$refs.viewer
            if (marker.id == 'new-marker1') {
                myViewer.updateIndex(1)
            }
            if (marker.id == 'new-marker2') {
                myViewer.updateIndex(2)
            }
            if (marker.id == 'new-marker3') {
                myViewer.updateMarker(marker.id, require('../assets/img/bao.png'))
            } else {
                myViewer.handelChangeViewer()
            }
        }
    }
}
</script>
  <style lang="scss" scoped>
  </style>
