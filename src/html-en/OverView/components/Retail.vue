<template>
    <div class="retail">
        <div class="left">
            <div class="left-inner">
                <h2 class="inner-title AvantGarde">OUR RETAIL IN CHINA</h2>
                <h3 class="inner-title-cn AvantGarde"></h3>
                <p class="p AvantGarde">Simon Li Brand has its own retail network in China targeting the fast growing modern urban middle class, especially “Expressive Lifestyle Lovers”. Simon Li Brandhas a modern O2O retail concept with online and physical stores. Our focus is on making it easy for them to choose the product style, color, feel, and comfort that result in the perfect sofa for them.</p>
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
        line-height: 1.6;
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
