<template>
    <div class="sofa">
        <div class="left">
            <div class="left-inner">
                <h2 class="inner-title AvantGarde">SOFA MAKER</h2>
                <h3 class="inner-title-cn YaSiRegular">沙发匠人</h3>
                <p class="p YaSiRegular">特雷通集团由现任首席执行官李曦萌（Simon Lichtenberg）先生（来自丹麦）于 1995 年在上海创立。集团拥有众多子公司，主营沙发及其他居家家具的设计、制造和分销。皮类和布类沙发是我们的王牌产品，具备设计新颖、质量上乘、极具性价比的特点。我们关注人们对产品的体验...</p>
                <router-link to="/AboutUs?id=3" class="sofa-read AvantGarde">
                    READ MORE
                </router-link>
            </div>
        </div>
        <div class="right">
            <img class="video" src="../../../assets/images/home_video.jpg" alt="home_video"/>
            <img class="video-mobile" src="../../../assets/images/home_video_mobile.jpg" alt="home_video_mobile"/>
            <a href="javascript:" @click="videoBtn" class="video-btn">
                <img class="video-btn-img" src="../../../assets/images/video_btn.png" alt="video_btn"/>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeSofa',
        methods: {
            videoBtn () {
                this.$emit('change')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~styles/common';
    @import '~styles/varibles';
    .sofa {
        margin-top: 24rem;
        display: flex;
        color: #fff;
    }
    .left {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 33%;
        background: #bca890;
    }
    .left-inner {
        /*width: 391px;*/
        width: 70%;
    }
    .right {
        opacity: 0;
        position: relative;
        width: 67%;
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
        color: #fff;
        padding-bottom: 5px;
        border-bottom: 1px solid #fff;
        opacity: 0;
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
        width: 7%;
        height: 7%;
        margin: auto;
    }
    .video-btn-img {
        width: 100%;
    }
    .video-mobile {
        display: none;
    }
    .animate .right {
        animation: opacityIn .3s linear forwards;
    }
    .animate .inner-title {
        animation: fadeInUp .3s .3s linear forwards;
    }
    .animate .inner-title-cn {
        animation: fadeInUp .3s .6s linear forwards;
    }
    .animate .p {
        animation: fadeInUp .3s .9s linear forwards;
    }
    .animate .sofa-read {
        animation: fadeInUp .3s 1.2s linear forwards;
    }

    .animate .video-btn {
        animation: SmallScaleBigRepeat 3s linear infinite;
    }
    @media screen and (max-width: 1440px) {
        .sofa {
            margin-top: 12rem;
        }
    }
    @media screen and (max-width: 1024px) {
        .sofa {
            display: block;
        }
        .left {
            padding: 5rem 0 7rem 0;
            width: auto;
        }
        .right {
            width: auto;
        }

        .left-inner {
            width: 90%;
        }
        .inner-title-cn {
            margin: 2rem 0 0 0;
        }
        .p {
            margin: 5rem 0 0 0;
        }
        .sofa-read {
            margin: 5rem 0 0 0;
        }
    }
    @media screen and (max-width: 750px) {
        .video-btn {
            width: 15%;
            height: 15%;
        }
        .sofa {
            margin-top: 5rem;
        }
        .sofa-read {
            border-bottom: none;
        }
        .video {
            display: none;
        }
        .video-mobile {
            display: block;
            width: 100%;
        }
    }
    @media screen and (max-width: 500px) {
        .inner-title-cn {
            margin: 1.5rem 0 0 0;
        }
        .p {
            margin: 3rem 0 0 0;
        }
    }
</style>