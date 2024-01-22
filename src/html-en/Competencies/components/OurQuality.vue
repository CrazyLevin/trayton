<template>
    <div class="quality">
        <h2 class="title AvantGarde">OUR QUALITY</h2>
        <h3 class="title-cn YaSiRegular"></h3>
        <div class="right-mobile">
            <h3 class="title-cn-sm AvantGarde">ATTENTION TO DETAIL</h3>
            <div>
                <p class="p AvantGarde">
                    Creating the best skilled sewing techniques and the most stylish upholstery lines in the industry has always been one of our key differentiators and remains an area in which we take great pride. We achieve these high standards through relentless and continuous improvement of production equipment, production layout, process control, as well as efficiency optimization, standardization, and automation. We have consistently maintained an industry-best quality level with a claim rate well below 0.5%.
                </p>
            </div>
            <div class="video-box">
                <img class="video" src="../../../assets/images/competencies_rd_video_02.jpg" alt="home_video"/>
                <a href="javascript:" @click="videoBtn" class="video-btn">
                    <img class="video-btn-img" src="../../../assets/images/video_btn.png" alt="video_btn"/>
                </a>
            </div>
        </div>
        <div class="rd-inner">
            <div class="left">
                <div class="wrapper">
                    <swiper ref="mySwiper" :options="swiperOptions" >
                        <swiper-slide >
                            <img class="swiper-img" src="../../../assets/images/competencies_quality_swiper_01.jpg" alt=""/>
                        </swiper-slide>
                        <swiper-slide >
                            <img class="swiper-img" src="../../../assets/images/competencies_quality_swiper_02.jpg" alt=""/>
                        </swiper-slide>
                        <swiper-slide >
                            <img class="swiper-img" src="../../../assets/images/competencies_quality_swiper_03.jpg" alt=""/>
                        </swiper-slide>
                    </swiper>
                    <!--                    <div class="swiper-pagination" slot="pagination"></div>-->
                    <div class="swiper-button-prev swiper-button-prev-3 swiper-button-white"></div>
                    <div class="swiper-button-next swiper-button-next-3 swiper-button-white"></div>
                </div>
            </div>
            <div class="right">
                <h3 class="title-cn-sm AvantGarde">ATTENTION TO DETAIL</h3>
                <div>
                    <p class="p AvantGarde">
                        Creating the best skilled sewing techniques and the most stylish upholstery lines in the industry has always been one of our key differentiators and remains an area in which we take great pride. We achieve these high standards through relentless and continuous improvement of production equipment, production layout, process control, as well as efficiency optimization, standardization, and automation. We have consistently maintained an industry-best quality level with a claim rate well below 0.5%.
                    </p>
                </div>
                <div class="video-box">
                    <img class="video" src="../../../assets/images/competencies_rd_video_02.jpg" alt="home_video"/>
                    <a href="javascript:" @click="videoBtn" class="video-btn">
                        <img class="video-btn-img" src="../../../assets/images/video_btn.png" alt="video_btn"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OurQuality',
        data () {
            return {
                swiperOptions: {
                    prevButton:'.swiper-button-prev-3',
                    nextButton:'.swiper-button-next-3',
                    speed: 1000
                }
            }
        },
        methods: {
            videoBtn () {
                this.$emit('change')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~styles/varibles';
    @import '~styles/common';
    .quality {
        margin: 13rem 0 0 0;
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
        font-weight: bold;
        letter-spacing: .2rem;
        opacity: 0;
    }
    .rd-inner {
        padding: 0 0 12rem 0;
        display: flex;
    }
    .left {
        position: relative;
        width: 45%;
        display: flex;
        align-items: flex-end;
    }
    .right {
        margin: 0 5% 0 5%;
        width: 45%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .p {
        margin-bottom: 2rem;
        line-height: 1.6;
        @include textJustify;
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
</style>
<style scoped>
    .wrapper {
        margin: 0 0 0 0;
        width: 100%;
        opacity: 0;
    }
    /*.wrapper >>> .swiper-button-next, .swiper-container-rtl .swiper-button-prev {*/
    /*    top: 112%;*/
    /*    left: 14%;*/
    /*}*/
    /*.wrapper >>> .swiper-button-prev.swiper-button-black, .swiper-container-rtl .swiper-button-next.swiper-button-black {*/
    /*    top: 112%;*/
    /*    left: 6%;*/
    /*}*/
    .animate .video-btn {
        animation: SmallScaleBigRepeat 3s linear infinite;
    }
    .animate .title {
        animation: opacityIn .5s linear forwards;
    }
    .animate .title-cn {
        animation: opacityIn .5s .3s linear forwards;
    }
    .animate .wrapper {
        animation: opacityIn .5s .5s linear forwards;
    }
    .animate .title-cn-sm {
        animation: opacityIn .5s .7s linear forwards;
    }
    .animate .p {
        animation: opacityIn .5s .9s linear forwards;
    }
    .animate .video-box {
        animation: opacityIn .5s 1.2s linear forwards;
    }
    .right-mobile {
        display: none;
    }
    @media screen and (max-width: 1024px) {
        .right {
            display: none;
        }
        .right-mobile {
            display: block;
            margin: 0 auto;
            width: 90%;
        }
        .left {
            margin: 2rem auto 0;
            width: 90%;
        }
        .p {
            width: auto;
        }
        .video-box {
            width: auto;
        }
    }
    @media screen and (max-width: 750px) {
        .quality {
            margin: 5rem 0 0 0;
        }
    }
</style>