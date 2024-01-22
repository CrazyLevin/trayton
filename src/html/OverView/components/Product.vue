<template>
    <div>
        <h2 class="title AvantGarde">OUR PRODUCTS</h2>
        <h3 class="title-cn YaSiRegular">我们的产品</h3>
        <div class="swiper1">
<!--            <div class="left">-->
<!--                <div class="left-inner">-->
<!--                    <h2 class="left-title AvantGarde">MODERN 现代系列</h2>-->
<!--                    <p class="p YaSiRegular">现代系列是最受年轻一代青睐的风格。款式简约而不简单，有转角型的也有组合型的，适合于大众客厅。</p>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="right">-->
                <div class="wrapper">
                    <swiper ref="mySwiper" :options="swiperOptions" >
                        <swiper-slide class="swiper-slide">
                            <div class="left">
                                <div class="left-inner">
                                    <h2 class="left-title AvantGarde">MODERN 现代系列</h2>
                                    <p class="p YaSiRegular">现代系列是最受年轻一代青睐的风格。款式简约而不简单，有转角型的也有组合型的，适合于大众客厅。</p>
                                </div>
                            </div>
                            <div class="right">
                                <img class="swiper-img" src="../../../assets/images/product_01.jpg" alt="facilities_01"/>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="swiper-slide">
                            <div class="left">
                                <div class="left-inner">
                                    <h2 class="left-title AvantGarde">CLASSIC 经典系列</h2>
                                    <p class="p YaSiRegular">经典的魅力来源于它自然的外观和质感，并且越旧越好看。经历了岁月考验，牢固、优雅、舒适，这个系列是我们最受喜爱的产品之一。</p>
                                </div>
                            </div>
                            <div class="right">
                                <img class="swiper-img" src="../../../assets/images/product_02.jpg" alt="facilities_01"/>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="swiper-slide">
                            <div class="left">
                                <div class="left-inner">
                                    <h2 class="left-title AvantGarde">CASUAL 休闲美学</h2>
                                    <p class="p YaSiRegular">风格和功能都能按照您的喜好和需求设计，而且无需花费太多，帮您把家打造成舒适宁静的休憩港湾！</p>
                                </div>
                            </div>
                            <div class="right">
                                <img class="swiper-img" src="../../../assets/images/product_03.jpg" alt="facilities_01"/>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="swiper-slide">
                            <div class="left">
                                <div class="left-inner">
                                    <h2 class="left-title AvantGarde">American 美式系列</h2>
                                    <h2 class="left-title-cn AvantGarde"></h2>
                                    <p class="p YaSiRegular">作为一种独特的家居流派，美式系列以其有力的线条和得体有度的装饰深得消费者的青睐。</p>
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
                                    <h2 class="left-title-cn AvantGarde">电动功能系列</h2>
                                    <p class="p YaSiRegular">轻触按钮即可在坐立位置和躺卧位伸展，全程电动控制，并可停留在任何位置。让您全身心放松，真正舒解您一天的工作压力。</p>
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
                                    <h2 class="left-title-cn AvantGarde">公共空间系列</h2>
                                    <p class="p YaSiRegular">人们的一天很少是静态的，它是流动的、灵活的。兼顾隐私与组装性能的公共空间沙发系列，让人们在工作和生活之间自由移动的家具，激发灵感、解放思想。</p>
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
            height: 148px;
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