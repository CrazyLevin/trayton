<template>
    <div class="YaSiRegular p">
        特雷通集团主要业务是设计、品牌塑造、制造和分销，家具和生活用品的零售，以及贸易和服务。<br class="br1024">
        经过多年的发展，集团已经成长为一家跨国家居集团公司。
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
        font-size: 18px;
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