<template>
    <div class="banner">
        <img class="banner-mobile" src="../../../assets/images/overView_banner_mobile.jpg" alt="overView_banner_mobile"/>
        <div class="banner-model"></div>
        <div class="banner-text">
            <h2 class="banner-title AvantGarde">
                BUSINESS OVERVIEW
                <svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.5 91.2"><path fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M75.5 0L0 91.2"/></svg>
            </h2>
            <h3 class="banner-title-cn YaSiBlank"></h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OverViewBanner'
    }
</script>

<style lang="scss" scoped>
    @import '~styles/varibles';
    @import '~styles/common';
    .banner {
        background: url(../../../assets/images/overView_banner.jpg) no-repeat center;
    }
    .banner-text {
        position: absolute;
    }
    .line {
        position: absolute;
        bottom: -33%;
        right: -11%;
    }
    @media screen and (max-width: 1440px) {
        .line {
            position: absolute;
            bottom: -31%;
        }
    }
    @media screen and (max-width: 750px) {
        .line {
            position: absolute;
            bottom: -15%;
        }
    }

</style>
