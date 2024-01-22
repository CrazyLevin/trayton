<template>

    <div class="wrapper">
        <swiper ref="mySwiper" :options="swiperOptions" >
            <swiper-slide >
                <img class="swiper-img" src="../../../assets/images/entity_01.jpg" alt="entity_01"/>
            </swiper-slide>
            <swiper-slide >
                <img class="swiper-img" src="../../../assets/images/entity_02.jpg" alt="entity_02"/>
            </swiper-slide>
            <swiper-slide >
                <img class="swiper-img" src="../../../assets/images/entity_03.jpg" alt="entity_03"/>
            </swiper-slide>
            <swiper-slide >
                <img class="swiper-img" src="../../../assets/images/entity_04.jpg" alt="entity_04"/>
            </swiper-slide>
            <swiper-slide >
                <img class="swiper-img" src="../../../assets/images/entity_05.jpg" alt="entity_05"/>
            </swiper-slide>
            <swiper-slide >
                <img class="swiper-img" src="../../../assets/images/entity_06.jpg" alt="entity_06"/>
            </swiper-slide>
            <!--                <div class="swiper-pagination" slot="pagination"></div>-->
        </swiper>
        <div class="swiper-button-prev swiper-button-prev-2 swiper-button-black"></div>
        <div class="swiper-button-next swiper-button-next-2 swiper-button-black"></div>
    </div>
</template>

<script>
    export default {
        name: 'OverViewEntity',
        data () {
            return {
                swiperOptions: {
                    slidesPerView : 3,
                    spaceBetween: 70,
                    loop: true,
                    speed: 500,
                    prevButton:'.swiper-button-prev-2',
                    nextButton:'.swiper-button-next-2',
                    observer: true, // 修改swiper自己或子元素时，自动初始化swiper
                    observeParents: true // 修改swiper的父元素时，自动初始化swiper
                }
            }
        },
        methods: {
            switchWidth () {
                this.cW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
                // console.log(this.cW)
                if (this.cW <= 750) {
                    this.swiperOptions.slidesPerView = 1
                    this.swiperOptions.spaceBetween = 0
                } else {
                    this.swiperOptions.slidesPerView = 3
                    this.swiperOptions.spaceBetween = 70
                }
            }
        },
        mounted () {
            window.onresize = () => {
                this.switchWidth()
            }
            this.switchWidth()
        }
    }
</script>

<style lang="scss" scoped>
    @import '~styles/varibles';
    @import '~styles/common';
    .wrapper {
        position: relative;
        margin: 8rem auto 10rem;
        width: 85%;
        opacity: 0;
    }
    .swiper-img {
        width: 100%;
    }

</style>
<style scoped>
    /*自定义swiper样式*/
    .wrapper >>> .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
        left: -60px;
    }
    .wrapper >>> .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
        right: -60px;
    }
    .wrapper >>> .swiper-slide-next {
        transform: scale(1.2);
    }
    .wrapper >>> .swiper-container {
        padding: 50px 0;
    }
    .animate {
        animation: opacityIn .3s linear forwards;
    }
    @media screen and (max-width: 750px) {
        .wrapper >>> .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
            right: -5%;
        }
        .wrapper >>> .swiper-button-prev.swiper-button-black, .swiper-container-rtl .swiper-button-next.swiper-button-black {
            left: -5%;
        }
        .wrapper {
            width: 90%;
        }
        .wrapper >>> .swiper-button-prev, .swiper-button-next {
            width: 13px;
            height: 28px;
            background-size: contain;
        }
        .wrapper >>> .swiper-slide-next {
            transform: scale(1);
        }
    }
    @media screen and (max-width: 500px) {
        .wrapper {
            margin: 5rem auto 5rem;
        }
    }
</style>