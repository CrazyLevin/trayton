<template>
    <div class="video-model displayNone" ref="video-model">
        <div class="close-model" @click="closeVideo"></div>
        <div class="video-box">
            <video ref="video" class="video" src="../../../assets/video/sofa_marker_cn.mp4" controls></video>
            <div class="close-video" @click="closeVideo">
                <svg class="close" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 27.5 27.5"><defs><path id="a" d="M0 0h27.5v27.5H0z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M26.5 1L1 26.5M1 1l25.5 25.5L1 1z"/></svg>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CommonVideo',
        props: {
            videoSwitch: Boolean,
        },
        data () {
            return {
                currentSwitch: false
            }
        },
        methods: {
            // 关闭视频
            closeVideo () {
                // console.log(this.$refs['video-model']);
                this.currentSwitch = false
                this.$refs['video'].pause()
                this.$refs['video-model'].classList.add('displayNone')
                document.documentElement.style.overflowY = 'scroll';
            }
        },
        watch: {
            // 打开视频
            videoSwitch() {
                // console.log(this.videoSrc)
                document.documentElement.style.overflowY = 'hidden';
                this.currentSwitch = this.videoSwitch
                this.$refs['video'].load()
                this.$refs['video'].play()
                // 结束视频后关闭
                this.$refs['video'].onended = () => {
                    this.$refs['video-model'].classList.add('displayNone')
                    document.documentElement.style.overflowY = 'scroll';
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>