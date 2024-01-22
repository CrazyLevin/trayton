<template>
    <div>
        <contact-banner></contact-banner>
        <public-nav @change="handleOpen"></public-nav>
        <contact-map></contact-map>
        <public-menu ref="home-menu" @change="handleClose"></public-menu>
        <public-footer></public-footer>
    </div>
</template>

<script>
    import PublicNav from '../../common/Nav-en'
    import PublicMenu from '../../common/Menu-en'
    import ContactBanner from './components/Banner'
    import ContactMap from './components/Map'
    import PublicFooter from '../../common/Footer-en'
    export default {
        name: 'ContactUs',
        components: {PublicNav, PublicMenu, PublicFooter,  ContactBanner, ContactMap},
        methods: {
            // 打开菜单
            handleOpen () {
                this.$refs['home-menu'].$el.classList.remove('close-animate')
                this.$refs['home-menu'].$el.classList.add('animate')
            },
            // 关闭菜单
            handleClose () {
                this.$refs['home-menu'].$el.classList.add('close-animate')
            },
        }
    }
</script>

<style>

</style>