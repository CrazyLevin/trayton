<template>
    <div>
        <csr-banner></csr-banner>
        <public-nav @change="handleOpen"></public-nav>
        <div class="container">
            <csr-content1 ref="content1"></csr-content1>
            <csr-content2 ref="content2"></csr-content2>
        </div>
        <public-footer></public-footer>
        <public-menu ref="home-menu" @change="handleClose"></public-menu>
    </div>
</template>

<script>
    import PublicNav from '../../common/Nav'
    import PublicMenu from '../../common/Menu'
    import PublicFooter from '../../common/Footer'
    import CsrBanner from './components/Banner'
    import CsrContent1 from './components/CsrContent1'
    import CsrContent2 from './components/CsrContent2'

    export default {
        name: 'CsrEn',
        components: {PublicNav, PublicMenu, PublicFooter, CsrBanner, CsrContent1, CsrContent2},
        data () {
            return {
                ScrollElements: [], // 元素名称
                num: 0
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
                // const eleTop = this.$refs[ScrollElements[this.num]].$$el.getBoundingClientRect().top - WinHeight;
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
                    // console.log(this.$refs[key].$el.offsetTop)
                    this.ScrollElements.push(key)
                }
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
            // 页面初始化执行函数
            init () {
                this.scrollTopComputed()
                window.addEventListener('scroll', this.handleScroll)
                this.handleScroll()
            }
        },
        mounted () {
            this.init()
        },
        destroyed () {
            // 页面即将被隐藏或即将被替换新的页面
            window.removeEventListener('scroll', this.handleScroll)
        },
    }
</script>

<style lang="scss" scoped>
.container {
    margin: 0 auto;
    width: 1200px;
}
@media screen and (max-width: 1440px) {
    .container {
        width: 1200 * .75px;
    }
}
@media screen and (max-width: 1024px) {
    .container {
        margin: 0 auto;
        width: 90%;
    }
}

</style>