<template>
    <div>
        <competencies-banner></competencies-banner>
        <public-nav @change="handleOpen"></public-nav>
        <competencies-ourFacilities ref="facilities"></competencies-ourFacilities>
        <competencies-ourPeople ref="people"></competencies-ourPeople>
        <competencies-ourRD @change="videoChange1" ref="rd"></competencies-ourRD>
        <competencies-ourQuality @change="videoChange2" ref="quality"></competencies-ourQuality>
        <common-video1 ref="common-video1" :videoSwitch1="videoSwitch1" :videoSrc="videoSrc"></common-video1>
        <common-video2 ref="common-video2" :videoSwitch2="videoSwitch2" :videoSrc="videoSrc"></common-video2>
        <public-footer></public-footer>
        <public-menu ref="home-menu" @change="handleClose"></public-menu>
    </div>
</template>

<script>
    import PublicNav from '../../common/Nav'
    import PublicFooter from '../../common/Footer'
    import CommonVideo1 from './components/Video-1'
    import CommonVideo2 from './components/Video-2'
    import PublicMenu from '../../common/Menu'
    import CompetenciesBanner from './components/Banner'
    import CompetenciesOurFacilities from './components/OurFacilities'
    import CompetenciesOurPeople from './components/OurPeople'
    import CompetenciesOurRD from './components/OurRD'
    import CompetenciesOurQuality from './components/OurQuality'

    export default {
        name: 'Competencies',
        components: {PublicNav, PublicMenu, CommonVideo1, CommonVideo2, CompetenciesBanner, CompetenciesOurFacilities, CompetenciesOurPeople, CompetenciesOurRD, CompetenciesOurQuality, PublicFooter},
        data () {
            return {
                ScrollElements: [], // 元素名称
                elementsTop: [], // 元素高度
                num: 0,
                videoSwitch1: false,
                videoSwitch2: false,
                videoSrc: '',
                timerId: '',
                first: false,
                timer: null
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
                // console.log(top + WinHeight)
                const ElementsTop =  this.elementsTop
                const ScrollElements =  this.ScrollElements
                // 当前元素减去屏幕可视高度
                // const eleTop = this.$refs[ScrollElements[this.num]].$el.getBoundingClientRect().top - WinHeight;
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
                this.elementsTop.length = 0
                this.ScrollElements.length = 0
                for(let key in this.$refs) {
                    if(key === 'home-menu') continue // 首页菜单不需要
                    if(key === 'common-video1') continue // video不需要
                    if(key === 'common-video2') continue // video不需要

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
            // 视频一
            videoChange1 () {
                this.$refs['common-video1'].$el.classList.remove('displayNone')
                this.videoSwitch1 = !this.videoSwitch1
            },
            // 视频二
            videoChange2 () {
                this.$refs['common-video2'].$el.classList.remove('displayNone')
                this.videoSwitch2 = !this.videoSwitch2
            },
            // 跳转后位置到Rd元素的位置
            goToRd () {
                if(this.$route.query.id === 'rd' && !this.first) {
                    console.log(this.$refs['rd'].$el.offsetTop)
                    document.body.scrollTop = document.documentElement.scrollTop = this.$refs['rd'].$el.offsetTop - 20;
                    this.first = true
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop
                }
            },
            // 跳转后位置到Quality元素的位置
            goToQuality () {
                if(this.$route.query.id === '1' && !this.first) {
                    console.log(this.$refs['quality'].$el.offsetTop)
                    document.body.scrollTop = document.documentElement.scrollTop = this.$refs['quality'].$el.offsetTop - 20;
                    this.first = true
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop
                }
            },
            // 页面初始化执行函数
            init () {
                this.scrollTopComputed()
                window.addEventListener('scroll', this.handleScroll)
                if(this.$route.query.id === 'rd') {
                    this.goToRd()
                }
                if(this.$route.query.id === '1') {
                    this.goToQuality()
                }
                this.handleScroll()
            }
        },
        mounted () {
            // 这里因为苹果渲染比较慢会导致跳转到指定位置会不准，所以用了定时器，暂时未找到更好的办法
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.init()
            }, 500)
        },
        destroyed () {
            // 页面销毁删除滚动条绑定事件
            window.removeEventListener('scroll', this.handleScroll)
            this.first = false
        },
        updated() {
            console.log("数据更新后触发执行updated");
        },
        activated() {
            console.log('activated')
        },
        deactivated() {
            console.log('deactivated')
        }
    }
</script>

<style>

</style>