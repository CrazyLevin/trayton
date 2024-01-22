<template>
    <div class="swiper1">
        <div class="right-inner-mobile">
            <h2 class="inner-title AvantGarde">OUR FACILITIES</h2>
            <h3 class="inner-title-cn YaSiRegular"></h3>
            <p class="p AvantGarde">We have offices in Hong Kong, Shanghai and Jiashan in China and in High Point, North Carolina in USA. We employ around 2,000 people, and own and operate 3 factories with a total of 150,000m2 of manufacturing facilities. We have one of the highest rates of productivity per worker in the industry, and one of the best records regarding quality and delivery efficiency.</p>
        </div>
        <div class="left">
            <div class="wrapper">
                <swiper ref="mySwiper" :options="swiperOptions" >
                    <swiper-slide >
                        <img class="swiper-img" src="../../../assets/images/facilities_05.jpg" alt="facilities_01"/>
                    </swiper-slide>
                    <swiper-slide >
                        <img class="swiper-img" src="../../../assets/images/facilities_02.jpg" alt="facilities_03"/>
                    </swiper-slide>
                    <swiper-slide >
                        <img class="swiper-img" src="../../../assets/images/facilities_03.jpg" alt="facilities_04"/>
                    </swiper-slide>
                    <swiper-slide >
                        <img class="swiper-img" src="../../../assets/images/facilities_04.jpg" alt="facilities_04"/>
                    </swiper-slide>
                    <swiper-slide >
                        <img class="swiper-img" src="../../../assets/images/facilities_06.jpg" alt="facilities_04"/>
                    </swiper-slide>
                    <swiper-slide >
                        <img class="swiper-img" src="../../../assets/images/facilities_07.jpg" alt="facilities_04"/>
                    </swiper-slide>
                </swiper>
                <div class="swiper-pagination" slot="pagination"></div>
            </div>
        </div>
        <div class="right">
            <div class="right-inner">
                <h2 class="inner-title AvantGarde">OUR FACILITIES</h2>
                <h3 class="inner-title-cn YaSiRegular"></h3>
                <p class="p AvantGarde">We have offices in Hong Kong, Shanghai and Jiashan in China and in High Point, North Carolina in USA. We employ around 2,000 people, and own and operate 3 factories with a total of 150,000m2 of manufacturing facilities. We have one of the highest rates of productivity per worker in the industry, and one of the best records regarding quality and delivery efficiency.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CompetenciesOurFacilities',
        data () {
            return {
                swiperOptions: {
                    pagination: '.swiper-pagination',
                    paginationClickable :true,
                    autoplayDisableOnInteraction : false,
                    loop: true,
                    autoplay : 3000,
                    speed: 1000,
                    effect : 'fade'
                }
            }
        },
    }
</script>

<style scoped>
    .swiper1 {
        position: relative;
        display: flex;
        opacity: 0;
    }
    .left {
        width: 60%;
        /*opacity: 0;*/
    }
    .right {
        z-index: -1;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 40%;
        background: #f4f3ee;
        /*opacity: 0;*/
    }
    .right-inner {
        /*width: 440px;*/
        width: 70%;
    }
    /*重置轮播图的焦点*/
    .wrapper >>> .swiper-pagination {
        bottom: 15%;
        right: 15%;
        display: flex;
        align-items: center;
    }
    .wrapper >>> .swiper-pagination-bullet {
        display: flex;
        padding: 10px;
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
    .right-inner-mobile {
        display: none;
    }
    @media screen and (max-width: 1440px) {
        .wrapper >>> .swiper-pagination {
            right: 13%;
        }
    }
    @media screen and (max-width: 1280px) {
        .wrapper >>> .swiper-pagination {
            bottom: 6%;
        }
    }
    @media screen and (max-width: 1024px) {
        .wrapper >>> .swiper-pagination {
            display: none;
        }
    }
    @media screen and (max-width: 900px) {
        .swiper1 {
            display: block;
        }
        .left {
            width: auto;
        }
        .right {
            display: none;
        }
        .right-inner-mobile {
            margin: 5rem auto 7rem ;
            display: block;
            width: 90%;
        }
        .wrapper >>> .swiper-pagination-bullet .self-pagination {
            background: #fff;
        }
        .wrapper >>> .swiper-pagination-bullet-active .self-pagination {
            border: 1px solid #fff;
            background: none;
        }
        .wrapper >>> .swiper-pagination {
            left: 50%;
            bottom: 7%;
            right: auto;
            transform: translateX(-50%);
        }
    }
</style>
<style lang="scss" scoped>
    @import '~styles/varibles';
    @import '~styles/common';

    .inner-title {
        margin: 0 0 0 0;
        opacity: 0;
    }
    .inner-title-cn {
        margin: 1.2rem 0 4rem 0;
        letter-spacing: 1rem;
        opacity: 0;
    }
    .p {
        margin: 0 0 0 0;
        font-size: 12px;
        line-height: 1.6;
        @include textJustify;
        opacity: 0;
    }
    @media screen and (max-width: 500px) {
        .p {
            font-size: 10px;
        }
    }
    .animate {
        animation: opacityIn .5s linear forwards;
    }
    .animate .inner-title {
        animation: opacityIn .5s .3s linear forwards;
    }
    .animate .inner-title-cn {
        animation: opacityIn .5s .5s linear forwards;
    }
    .animate .p {
        animation: opacityIn .5s .7s linear forwards;
    }

</style>