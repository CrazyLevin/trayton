<template>
    <div>
        <h2 class="title AvantGarde">OUR PRODUCTS</h2>
        <h3 class="title-cn YaSiRegular"></h3>
        <div class="swiper1">
                <div class="wrapper">
                    <swiper ref="mySwiper" :options="swiperOptions" >
                        <swiper-slide class="swiper-slide">
                            <div class="left">
                                <div class="left-inner">
                                    <h2 class="left-title AvantGarde">MODERN</h2>
                                    <p class="p AvantGarde">The modern collection is the favorite style of the younger generation. This collection is simple but great, ranging from corner to combined furniture, suitable for the living room.</p>
                                </div>
                            </div>
                            <div class="right">
                                <img class="swiper-img" src="../../../assets/images/product_01.jpg" alt="facilities_01"/>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="swiper-slide">
                            <div class="left">
                                <div class="left-inner">
                                    <h2 class="left-title AvantGarde">CLASSIC</h2>
                                    <p class="p AvantGarde">The classic appeal roots in its natural appearance and texture. The more vintage, the more enchanting. Baptized by the times, it is robust, elegant and comfortable. This is one of our most popular products.</p>
                                </div>
                            </div>
                            <div class="right">
                                <img class="swiper-img" src="../../../assets/images/product_02.jpg" alt="facilities_01"/>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="swiper-slide">
                            <div class="left">
                                <div class="left-inner">
                                    <h2 class="left-title AvantGarde">CASUAL</h2>
                                    <p class="p AvantGarde">The style and functions of this collection are tailored to your preference and needs at a reasonable cost, making a comfortable and quiet home for you.</p>
                                </div>
                            </div>
                            <div class="right">
                                <img class="swiper-img" src="../../../assets/images/product_03.jpg" alt="facilities_01"/>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="swiper-slide">
                            <div class="left">
                                <div class="left-inner">
                                    <h2 class="left-title AvantGarde">AMERICAN</h2>
                                    <h2 class="left-title-cn AvantGarde"></h2>
                                    <p class="p AvantGarde">The distinct American collection is well acclaimed by consumers for its powerful lines and decent decoration. </p>
                                </div>
                            </div>
                            <div class="right">
                                <img class="swiper-img" src="../../../assets/images/product_04.jpg" alt="facilities_01"/>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="swiper-slide">
                            <div class="left">
                                <div class="left-inner">
                                    <h2 class="left-title AvantGarde">MOTION & RECLINER </h2>
                                    <h2 class="left-title-cn AvantGarde"></h2>
                                    <p class="p AvantGarde">It can stretch whether you are sitting or lying with a press of the button. It is fully under electric control and maintains the position that you want it to be. It allows you to completely relax and truly relieves your working pressure throughout the day.</p>
                                </div>
                            </div>
                            <div class="right">
                                <img class="swiper-img" src="../../../assets/images/product_05.jpg" alt="facilities_01"/>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="swiper-slide">
                            <div class="left">
                                <div class="left-inner">
                                    <h2 class="left-title AvantGarde">COMMERCIAL SPACE</h2>
                                    <h2 class="left-title-cn AvantGarde"></h2>
                                    <p class="p AvantGarde">It is rare for people to stay statics in a day, so it is mobile with flexibility. The Commercial Space sofa collection, featuring privacy and assembly performance, is freely movable between work and life, facilitating people to spark inspiration and free the mind.</p>
                                </div>
                            </div>
                            <div class="right">
                                <img class="swiper-img" src="../../../assets/images/product_06.jpg" alt="facilities_01"/>
                            </div>
                        </swiper-slide>
                        <div class="swiper-pagination swiper-pagination-1" slot="pagination"></div>
                    </swiper>
                </div>
            </div>
        </div>
<!--    </div>-->

</template>

<script>
    export default {
        name: 'OverViewProduct',
        data () {
            return {
                swiperOptions: {
                    pagination: '.swiper-pagination-1',
                    paginationClickable :true,
                    autoplayDisableOnInteraction : false,
                    loop: true,
                    autoplay : 3000,
                    speed: 1000,
                    effect : 'fade',
                    observer: true,//修改swiper自己或子元素时，自动初始化swiper
                    observeParents: true//修改swiper的父元素时，自动初始化swiper
                }
            }
        },
    }
</script>

<style scoped>


    .wrapper >>> .swiper-slide {
        position: relative;
        display: flex;
    }
    .left {
        z-index: -1;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 34%;
    }
    .left-inner {
        /*width: 376px;*/
        width: 70%;
    }
    .right {
        width: 66%;
        opacity: 0;
    }

    .wrapper >>> .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
        margin: 0;
    }
    /*重置轮播图的焦点*/
    .wrapper >>> .swiper-pagination {
        bottom: 15%;
        left: 12%;
        display: flex;
        width: auto;
        align-items: center;
    }
    .wrapper >>> .swiper-pagination-bullet {
        display: flex;
        padding: 10px;
        /*padding: 7%;*/
        width: auto;
        height: auto;
        background: none;
        opacity: 1;
    }
    .wrapper >>> .swiper-pagination-bullet .self-pagination {
        display: inline-block;
        width: .3rem;
        height: .3rem;
        border-radius: 50%;
        background: #000;
        opacity: 1;
    }
    .wrapper >>> .swiper-pagination-bullet-active {
        width: auto;
        height: auto;
        border: none;
        background: none;
    }
    .wrapper >>> .swiper-pagination-bullet-active .self-pagination {
        display: inline-block;
        width: .7rem;
        height: .7rem;
        border: 1px solid #000;
        background: none;
    }
    .swiper-img {
        width: 100%;
    }
    @media screen and (max-width: 1024px) {
        .wrapper >>> .swiper-slide {
            position: relative;
            display: block;
        }
        .wrapper >>> .swiper-pagination {
            bottom: 6%;
            left: 50%;
            transform: translateX(-50%);
        }
        .left {
            margin: 0 auto;
            padding: 5% 0 0 0;
            display: block;
            width: auto;
            height: 160px;
        }
        .left-inner {
            margin: 0 auto;
            width: 90%;
        }
        .right {
            width: auto;
        }

    }
    @media screen and (max-width: 500px) {

        .title-cn {
            margin: 1rem 0 3rem 5%;
        }

    }
</style>
<style lang="scss" scoped>
    @import '~styles/varibles';
    @import '~styles/common';
    .title {
        margin: 7rem 0 0 5%;
        opacity: 0;
    }
    .title-cn {
        margin: 1rem 0 5rem 5%;
        letter-spacing: 1rem;
        opacity: 0;
    }
    .left {
        background: $greyBgColor;
    }
    .left-title {
        margin: 0 0 0 0;
        opacity: 0;
    }
    .left-title-cn {
        margin: 1rem 0 0 0;
        letter-spacing: 1rem;
    }
    .p {
        margin: 2rem 0 0 0;
        @include textJustify;
        opacity: 0;
        line-height: 1.6;
    }
    .animate .title {
        animation: fadeInUp .3s linear forwards;
    }
    .animate .title-cn {
        animation: fadeInUp .3s .3s linear forwards;
    }
    .animate .right {
        animation: opacityIn .3s .6s linear forwards;
    }
    .animate .left-title {
        animation: fadeInUp .5s .9s linear forwards;
    }
    .animate .p {
        animation: fadeInUp .5s 1.2s linear forwards;
    }
</style>