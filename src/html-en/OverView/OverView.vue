<template>
    <div>
        <overView-banner></overView-banner>
        <public-nav @change="handleOpen"></public-nav>
        <overView-brand ref="brand"></overView-brand>
        <overView-product ref="product"></overView-product>
<!--        <overView-clients ref="clients"></overView-clients>-->
        <over-view-retail ref="retail"></over-view-retail>
        <over-view-entity ref="entity"></over-view-entity>
        <public-footer></public-footer>
        <public-menu ref="home-menu" @change="handleClose"></public-menu>
    </div>
</template>

<script>
    import PublicNav from '../../common/Nav-en'
    import PublicFooter from '../../common/Footer-en'
    import PublicMenu from '../../common/Menu-en'
    import OverViewBanner from './components/Banner'
    import OverViewProduct from './components/Product'
    import OverViewBrand from './components/Brand'
    import OverViewClients from './components/Clients'
    import OverViewRetail from './components/Retail'
    import OverViewEntity from './components/Entity'

    export default {
        name: 'OverView',
        components: {PublicNav, PublicFooter, PublicMenu, OverViewBanner, OverViewProduct, OverViewBrand, OverViewClients, OverViewRetail, OverViewEntity},
        data () {
            return {
                ScrollElements: [], // 元素名称
                num: 0,
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
            // 跳转后位置到brand元素的位置
            goToBrand () {
                if(this.$route.query.id === '2' && !this.first) {
                    document.body.scrollTop = document.documentElement.scrollTop = this.$refs['brand'].$el.offsetTop - 20;
                    this.first = true
                    // console.log(this.$route.query.brand)

                } else {
                    document.body.scrollTop = document.documentElement.scrollTop
                }
            },
            // 页面初始化执行函数
            init() {
                this.scrollTopComputed()
                window.addEventListener('scroll', this.handleScroll)
                this.handleScroll()
                if(this.$route.query.id === '2') {
                    this.goToBrand()
                    this.handleScroll()
                }
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
        }
    }
</script>

<style>

</style>
