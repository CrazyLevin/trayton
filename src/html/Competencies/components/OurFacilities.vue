<template>
    <div class="swiper1">
        <div class="right-inner-mobile">
            <h2 class="inner-title AvantGarde">OUR FACILITIES</h2>
            <h3 class="inner-title-cn YaSiRegular">特雷通制造</h3>
            <p class="p YaSiRegular">我们在中国的香港、上海和嘉善，以及美国北卡罗莱纳州的高点分别设立有办公室。目前员工总人数约为 2000 人，运营管理的 3 家工厂，总厂房面积约为 15 万平方米。我们是行业内拥有高生产力的企业之一，也是高品质和高效配送的最佳纪录保持者之一。 </p>
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
                <h3 class="inner-title-cn YaSiRegular">特雷通制造</h3>
                <p class="p YaSiRegular">我们在中国的香港、上海和嘉善，以及美国北卡罗莱纳州的高点分别设立有办公室。目前员工总人数约为 2000 人，运营管理的 3 家工厂，总厂房面积约为 15 万平方米。我们是行业内拥有高生产力的企业之一，也是高品质和高效配送的最佳纪录保持者之一。 </p>
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
    @media screen and (max-width: 1024px) {
        .wrapper >>> .swiper-pagination {
            display: none;
        }
    }
    @media screen and (max-width: 750px) {
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
        margin: 1.2rem 0 1rem 0;
        letter-spacing: 1rem;
        opacity: 0;
    }
    .p {
        margin: 0 0 0 0;
        font-size: 12px;
        @include textJustify;
        opacity: 0;
    }
    .animate {
        animation: opacityIn .5s linear forwards;
    }
    .animate .inner-title {
        animation: fadeInUp .5s .3s linear forwards;
    }
    .animate .inner-title-cn {
        animation: fadeInUp .5s .5s linear forwards;
    }
    .animate .p {
        animation: fadeInUp .5s .7s linear forwards;
    }

</style>