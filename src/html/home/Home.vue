<template>
    <div>
        <home-swiper @change="handleOpen"></home-swiper>
        <home-swiperUnder ref="swiper-under"></home-swiperUnder>
        <home-quality ref="quality" ></home-quality>
        <home-brand ref="home-brand"></home-brand>
        <home-sofa ref="home-sofa" @change="videoChange"></home-sofa>
        <home-contact ref="home-contact"></home-contact>
        <public-footer></public-footer>
        <public-menu ref="home-menu" @change="handleClose"></public-menu>
        <common-video ref="common-video" :videoSwitch="videoSwitch"></common-video>
    </div>
</template>

<script>
import PublicFooter from '../../common/Footer'
import PublicMenu from '../../common/Menu'
import CommonVideo from './components/Video'
import HomeSwiper from './components/Swiper'
import HomeSwiperUnder from './components/SwiperUnder'
import HomeQuality from './components/Quality'
import HomeBrand from './components/Brand'
import HomeSofa from './components/Sofa'
import HomeContact from './components/Contact'

export default {
    name: 'Home',
    components: {PublicFooter, PublicMenu, CommonVideo, HomeSwiper, HomeSwiperUnder, HomeQuality, HomeBrand, HomeSofa, HomeContact},
    data () {
        return {
            ScrollElements: [], // 元素名称
            elementsTop: [], // 元素高度
            num: 0,
            videoSwitch: false,
        }
    },
    methods: {
        // 滚动条触发事件，滚动到一定高度触发动画
        handleScroll () {

            if (this.num >= this.ScrollElements.length) { // 如果超过不再运行后面的逻辑
                window.removeEventListener('scroll', this.handleScroll)
                return
            }

            // 滚动条高度
            const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset

            // 窗口高度
            const WinHeight = document.documentElement.clientHeight || document.body.clientHeight
            // console.log(top,WinHeight)
            // console.log(top + WinHeight)
            const ElementsTop =  this.elementsTop
            const ScrollElements =  this.ScrollElements
            // 当前元素减去屏幕可视高度
            // const eleTop = this.$refs[ScrollElements[this.num]].$el.getBoundingClientRect().y - WinHeight;

            ScrollElements.forEach((e,i) => {
                const eleTop = this.$refs[ScrollElements[i]].$el.getBoundingClientRect().top - WinHeight;
                // 滚动条达到一定高度出现动画
                if(eleTop < 0 && i < this.ScrollElements.length) {
                    this.$refs[ScrollElements[i]].$el.classList.add('animate')
                    // this.num++
                }
            })
            // 滚动条达到一定高度出现动画
            // if(eleTop < 0 && this.num < this.ScrollElements.length) {
            //     this.$refs[ScrollElements[this.num]].$el.classList.add('animate')
            //     this.num++
            // }
        },
        // 把要计算的动画元素名称放入数组中
        scrollTopComputed () {
            // console.log(this.$refs['home-brand'].$el.getBoundingClientRect())
            for(let key in this.$refs) {
                if(key === 'home-menu') continue // 首页菜单不需要
                if(key === 'common-video') continue // video不需要

                // console.log(this.$refs[key].$el.offsetHeight)
                // console.log(this.$refs[key].$el.offsetParent)
                const marginTop = parseInt(document.defaultView.getComputedStyle(this.$refs[key].$el).marginTop)
                // console.log(marginTop)
                // console.log(this.$refs[key].$el.offsetTop)
                this.elementsTop.push(this.$refs[key].$el.offsetTop)
                this.ScrollElements.push(key)
            }
            // console.log(this.elementsTop)
        },
        // 打开菜单
        handleOpen () {
            this.$refs['home-menu'].$el.classList.remove('close-animate')
            this.$refs['home-menu'].$el.classList.add('animate')
        },
        // 关闭菜单
        handleClose () {
            this.$refs['home-menu'].$el.classList.add('close-animate')
        },
        // 监听子组件视频按钮
        videoChange () {
            this.$refs['common-video'].$el.classList.remove('displayNone')
            this.videoSwitch = !this.videoSwitch
        }
    },
    computed: {
    },
    mounted () {
        this.scrollTopComputed()
        window.addEventListener('scroll', this.handleScroll)
        this.handleScroll()
    },
    destroyed () {
        // 页面即将被隐藏或即将被替换新的页面
        window.removeEventListener('scroll', this.handleScroll)
    },
    deactivated () {
        this.$refs['home-menu'].$el.classList.remove('animate')
    },
}
</script>

<style>

</style>