<template>
    <div class="banner">
        <img class="banner-mobile" src="../../../assets/images/csr_banner_mobile.jpg" alt="csr_banner_mobile"/>
        <div class="banner-model"></div>
        <div class="banner-text">
            <h2 class="banner-title AvantGarde">
                CORPORATION SOCIAL RESPONSIBILITY
                <svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.5 91.2"><path fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M75.5 0L0 91.2"/></svg>
            </h2>
            <h3 class="banner-title-cn YaSiBlank"></h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CompetenciesBanner'
    }
</script>

<style lang="scss" scoped>
    @import '~styles/varibles';
    @import '~styles/common';
    .banner {
        background: url(../../../assets/images/csr_banner.jpg) no-repeat center;
    }
    .line {
        position: absolute;
        bottom: -33%;
        right: -6%;
    }

    @media screen and (max-width: 1440px) {

        .line {
            position: absolute;
            right: -6%;
        }
    }
    @media screen and (max-width: 750px) {
        .line {
            bottom: -9%;
        }
        .banner {
            position: relative;
            background: none;
        }

    }
    @media screen and (max-width: 414px) {
        .line {
            right: 25%;
            bottom: 45%;
        }
    }
</style>
