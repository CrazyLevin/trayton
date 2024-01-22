<template>
    <div class="banner">
        <img class="banner-mobile" src="../../../assets/images/aboutUs_banner_mobile.jpg" alt="aboutUs_banner_mobile" >
        <div class="banner-model"></div>
        <div class="banner-text">
            <h2 class="banner-title AvantGarde">
                ABOUT US
                <svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.5 91.2"><path fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M75.5 0L0 91.2"/></svg>
            </h2>
            <h3 class="banner-title-cn YaSiBlank">关于我们</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AboutUsBanner'
    }
</script>

<style lang="scss" scoped>
    @import '~styles/varibles';
    @import '~styles/common';
    .banner {
        background: url(../../../assets/images/aboutUs_banner.jpg) no-repeat center;
    }
    .line {
        position: absolute;
        bottom: -28%;
        right: -21%;
    }
</style>
