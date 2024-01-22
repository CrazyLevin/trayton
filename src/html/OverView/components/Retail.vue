<template>
    <div class="retail">
        <div class="left">
            <div class="left-inner">
                <h2 class="inner-title AvantGarde">OUR RETAIL</h2>
                <h3 class="inner-title-cn YaSiRegular">新零售</h3>
                <p class="p YaSiRegular">在中国，Simon Li建立了自己独特的零售网络，意在面向正在迅速成长的中国现代都市中产阶级，尤其是“极致生活品味的崇尚者”。Simon Li秉持现代化的线上线下结合理念，同时拥有线上和线下实体门店。我们致力于帮助中国消费者轻松地挑选出风格、颜色、坐感、舒适度兼备的完美沙发。</p>
            </div>
        </div>
        <img class="retail-img" src="../../../assets/images/retail.jpg" alt="retail"/>
        <img class="retail-img-mobile" src="../../../assets/images/retail_mobile.jpg" alt="retail"/>
    </div>
</template>

<script>
    export default {
        name: 'OverViewRetail'
    }
</script>

<style lang="scss" scoped>
    @import '~styles/varibles';
    @import '~styles/common';
    .retail {
        position: relative;
        margin-top: 10vw;
    }
    .retail-img {
        width: 100%;
    }
    .retail-img-mobile {
        display: none;
    }
    .left {
        /*opacity: 0;*/
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 60%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        background: rgba(255, 255, 255 ,.7);
        opacity: 0;
    }
    .left-inner {
        /*width: 391px;*/
        width: 70%;
    }
    .inner-title {
        margin: 0 0 0 0;
        opacity: 0;
    }
    .inner-title-cn {
        margin: 1rem 0 1rem 0;
        letter-spacing: 1rem;
        opacity: 0;
    }
    .p {
        display: block;
        margin: 0 0 0 0;
        @include textJustify;
        opacity: 0;
    }

    .animate .left {
        animation: fadeInLeft 1s linear forwards;
    }
    .animate .inner-title {
        animation: opacityIn .3s 1s linear forwards;
    }
    .animate .inner-title-cn {
        animation: opacityIn .3s 1.3s linear forwards;
    }
    .animate .p {
        animation: opacityIn .3s 1.6s linear forwards;
    }
    @media screen and (max-width: 750px) {
        .left {
            /*opacity: 0;*/
            padding: 3rem 0;
            right: 0;
            bottom: auto;
        }
        .retail-img {
            display: none;
        }
        .retail-img-mobile {
            display: block;
            width: 100%;
        }
        .left-inner {
            width: 90%;
        }
    }
</style>
