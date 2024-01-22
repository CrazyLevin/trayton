<template>
    <div class="AvantGarde p">
        Trayton Group is mainly engaged in design, branding, manufacturing, distribution, retail of furniture and daily necessities, trade, and services.<br class="br1224">
        Years of development and accumulated experience have facilitated the Group to become a global enterprise specialized in home furnishing.
    </div>
</template>

<script>
    export default {
        name: 'SwiperUnder'
    }
</script>

<style lang="scss" scoped>
    @import '~styles/varibles';
    .p {
        margin: 0 auto;
        padding: 90px 0 70px 0;
        text-align: center;
        width: 90%;
        font-size: 16px;
        line-height: 1.6;
        border-bottom: 1px solid $borderColor;
        opacity: 0;
    }
    @media screen and (max-width: 500px) {
        .p {
            padding: 30px 0 30px 0;
            font-size: 10px;
        }
    }
    .animate {
        animation: opacityIn .3s linear forwards;
    }
</style>