<template>

    <div class="sofa">
        <div class="right-inner-mobile">
            <h2 class="inner-title AvantGarde">SOFA MAKER</h2>
            <h3 class="inner-title-cn YaSiRegular">沙发匠人</h3>
            <p class="p YaSiRegular">特雷通集团由现任首席执行官李曦萌（Simon Lichtenberg）先生（来自丹麦）于 1995 年在上海创立。集团拥有众多子公司，主营沙发及其他居家家具的设计、制造和分销。皮类和布类沙发是我们的王牌产品，具备设计新颖、质量上乘、极具性价比的特点。我们关注人们对产品的体验，对生活品质的感受，努力成为全球行业领导者。</p>
        </div>
        <div class="left">
            <img class="video" src="../../../assets/images/aboutUs_sofa.jpg" alt="aboutUs_sofa"/>
            <a href="javascript:" @click="videoBtn" class="video-btn">
                <img class="video-btn-img" src="../../../assets/images/video_btn.png" alt="video_btn"/>
            </a>
        </div>
        <div class="right">
            <div class="right-inner">
                <h2 class="inner-title AvantGarde">SOFA MAKER</h2>
                <h3 class="inner-title-cn YaSiRegular">沙发匠人</h3>
                <p class="p YaSiRegular">特雷通集团由现任首席执行官李曦萌（Simon Lichtenberg）先生（来自丹麦）于 1995 年在上海创立。集团拥有众多子公司，主营沙发及其他居家家具的设计、制造和分销。皮类和布类沙发是我们的王牌产品，具备设计新颖、质量上乘、极具性价比的特点。我们关注人们对产品的体验，对生活品质的感受，努力成为全球行业领导者。</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AboutUsSofa',
        methods: {
            videoBtn (src) {
                this.$emit('change', src)
                // console.log(1)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~styles/common';
    @import '~styles/varibles';
    .sofa {
        position: relative;
        margin-top: 29rem;
        display: flex;
        color: #fff;
        background: #f7f7f5;
        border-bottom: 10rem solid #f7f7f5;
    }
    .left {
        position: relative;
        margin: -5% 7% 0 10%;
        width: 45%;
        opacity: 0;
    }
    .right {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 33%;
        color: #323232;
    }
    .right-inner {
        width: 391px;
    }
    .right-inner-mobile {
        display: none;

    }
    .inner-title {
        margin: 0 0 0 0;
        opacity: 0;
    }
    .inner-title-cn {
        margin: 5% 0 0 0;
        letter-spacing: 1rem;
        opacity: 0;
    }
    .p {
        display: block;
        margin: 10% 0 0 0;
        @include textJustify;
        opacity: 0;
    }
    .sofa-read {
        display: inline-block;
        margin: 10% 0 0 0;
        font-size: 1.8rem;
        color: #fff;
        padding-bottom: 5px;
        border-bottom: 1px solid #fff;
    }
    .video {
        width: 100%;
    }
    .video-btn {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 15%;
        height: 15%;
        margin: auto;
    }
    .video-btn-img {
        width: 100%;
    }

    .animate .left {
        animation: fadeInUp .5s linear forwards;
    }
    .animate .inner-title {
        animation: fadeInUp .5s .3s linear forwards;
    }
    .animate .inner-title-cn {
        animation: fadeInUp .5s .5s linear forwards;
    }
    .animate .p {
        animation: fadeInUp .5s .8s linear forwards;
    }
    .animate .video-btn {
        animation: SmallScaleBigRepeat 3s linear infinite;
    }
    @media screen and (max-width: 1440px) {
        .sofa {
            margin-top: 15rem;
        }
        .left-inner {
            width: 280px;
        }
    }
    @media screen and (max-width: 750px) {
        .sofa {
            margin-top: 5rem;
            display: block;
            border: none;
        }
        .left {
            margin: 0 0 0 0;
            width: 100%;
        }
        .right-inner {
            display: none;
        }
        .right-inner-mobile {
            display: block;
            margin: 0 auto 5rem;
            padding-top: 5rem;
            width: 90%;
            color: #000;
        }
        .p {
            margin: 3rem 0 0 0;
        }
    }

</style>