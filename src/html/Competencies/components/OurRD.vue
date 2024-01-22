<template>
    <div class="rd">
        <h2 class="title AvantGarde">OUR R&D</h2>
        <h3 class="title-cn YaSiRegular">研发中心</h3>
        <div class="rd-inner">
            <div class="left">
                <h3 class="title-cn-sm YaSiRegular">研发实力</h3>
                <div>
                    <p class="p YaSiRegular">
                        经过20余年的沙发制造历程，我们发展并提炼出了一套独特有效的新品开发方法，贯穿于调研、构想、设计、工艺等各环节。
                    </p>
                    <p class="p YaSiRegular">
                        我们致力于生产行业中质量上乘、性价比极高的产品，并通过自主开发的系统，管理并评估产品的市场表现。
                    </p>
                </div>
                <div class="video-box">
                    <img class="video" src="../../../assets/images/competencies_rd_video_01.jpg" alt="home_video"/>
                    <a href="javascript:" @click="videoBtn" class="video-btn">
                        <img class="video-btn-img" src="../../../assets/images/video_btn.png" alt="video_btn"/>
                    </a>
                </div>
            </div>
            <div class="right">
                <div class="wrapper">
                    <swiper ref="mySwiper" :options="swiperOptions" >
                        <swiper-slide >
                            <img class="swiper-img" src="../../../assets/images/competencies_rd_swiper_01.jpg" alt=""/>
                        </swiper-slide>
                        <swiper-slide >
                            <img class="swiper-img" src="../../../assets/images/competencies_rd_swiper_02.jpg" alt=""/>
                        </swiper-slide>
                        <swiper-slide >
                            <img class="swiper-img" src="../../../assets/images/competencies_rd_swiper_03.jpg" alt=""/>
                        </swiper-slide>
                    </swiper>
<!--                    <div class="swiper-pagination" slot="pagination"></div>-->
                    <div class="swiper-button-prev swiper-button-prev-2 swiper-button-white"></div>
                    <div class="swiper-button-next swiper-button-next-2 swiper-button-white"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OurRD',
        data () {
            return {
                swiperOptions: {
                    prevButton:'.swiper-button-prev-2',
                    nextButton:'.swiper-button-next-2',
                    speed: 1000
                }
            }
        },
        methods: {
            videoBtn (src) {
                this.$emit('change', src)
                // console.log(1)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~styles/varibles';
    @import '~styles/common';
    .rd {
        margin-top: 13rem;
    }
    .title {
        margin: 0 0 0 5%;
        opacity: 0;
    }
    .title-cn {
        margin: 1rem 0 5rem 5%;
        letter-spacing: 1rem;
        opacity: 0;
    }
    .title-cn-sm {
        padding-bottom: 1rem;
        letter-spacing: 1rem;
        opacity: 0;
    }
    .p {
        width: 500px;
        @include textJustify;
        opacity: 0;
    }
    .rd-inner {
        padding: 12rem 0 12rem 0;
        display: flex;
        background: #f4f3ee;
    }
    .left {
        margin: 0 5% 0 5%;
        width: 45%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .right {
        position: relative;
        width: 45%;
        display: flex;
        align-items: flex-end;
        opacity: 0;
    }

    .video-text {
        width: 100%;
    }
    .video-box {
        position: relative;
        width: auto;
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

    .swiper-img {
        width: 100%;
    }
    .animate .video-btn {
        animation: SmallScaleBigRepeat 3s linear infinite;
    }
    .animate .title {
        animation: opacityIn .5s linear forwards;
    }
    .animate .title-cn {
        animation: opacityIn .5s .3s linear forwards;
    }
    .animate .title-cn-sm {
        animation: opacityIn .5s .5s linear forwards;
    }
    .animate .p {
        animation: opacityIn .5s .7s linear forwards;
    }
    .animate .video-box {
        animation: opacityIn .5s .9s linear forwards;
    }
    .animate .right {
        animation: opacityIn .5s 1.1s linear forwards;
    }
</style>
<style scoped>
    .wrapper {
        margin: 0 0 0 0;
        width: 100%;
    }

    @media screen and (max-width: 1024px) {
        .rd-inner {
            display: block;
        }
        .left {
            margin: 0 auto 0;
            width: 90%;
        }
        .video-box {
            margin-top: 0;
            width: auto;
        }
        .right {
            margin: 2rem auto 0;
            width: 90%;
        }
        .p {
            margin-bottom: 2rem;
            width: auto;
        }
    }
    @media screen and (max-width: 750px) {
        .rd {
            margin-top: 10rem;
        }
        .title {
            margin: 0 0 0 5%;
            opacity: 0;
        }
        .title-cn {
            margin: 1rem 0 5rem 5%;
            letter-spacing: 1rem;
            opacity: 0;
        }
        .title-cn-sm {
            padding-bottom: 1rem;
            letter-spacing: 1rem;
            opacity: 0;
        }
        .rd-inner {
            padding: 5rem 0 5rem 0
        }
    }
</style>