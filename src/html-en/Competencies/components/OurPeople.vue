<template>
    <div class="people-box">
        <h2 class="title AvantGarde">OUR PEOPLE</h2>
        <h3 class="title-cn YaSiRegular"></h3>
        <p class="p AvantGarde">We are all very proud to work for Trayton , and we have nurtured a culture of quality and responsibility at every level of our organization. Everyone at Trayton takes great interest and responsibility in ensuring that we continually develop and improve our products and our quality, while maintaining a competitive costing structure through maximized efficiency. Together, we are building a sustainable and competitive Trayton by employing a unique combination of best practices gleaned from the unique experiences of our diverse international team. We share a common passion for what we do, and we care deeply for the needs of our customers, as well as for the planet and the people with whom we share it. Our unique management and business model involves everyone in the company, which can be summarized as a very flat organization where everyone understands our goals and principles, and feels they are a part of the success of the company. At Trayton , we love what we do!</p>
        <div class="wrapper">
            <swiper ref="mySwiper" :options="swiperOptions" >
                <swiper-slide >
                    <img class="swiper-img" src="../../../assets/images/competencies_swiper_03.jpg" alt="competencies_swiper_03"/>
                </swiper-slide>
                <swiper-slide >
                    <img class="swiper-img" src="../../../assets/images/competencies_swiper_05.jpg" alt="competencies_swiper_05"/>
                </swiper-slide>
                <swiper-slide >
                    <img class="swiper-img" src="../../../assets/images/competencies_swiper_08.jpg" alt="competencies_swiper_08"/>
                </swiper-slide>
                <swiper-slide >
                    <img class="swiper-img" src="../../../assets/images/competencies_swiper_12.jpg" alt="competencies_swiper_12"/>
                </swiper-slide>
                <swiper-slide >
                    <img class="swiper-img" src="../../../assets/images/competencies_swiper_13.jpg" alt="competencies_swiper_13"/>
                </swiper-slide>
                <swiper-slide >
                    <img class="swiper-img" src="../../../assets/images/competencies_swiper_04.jpg" alt="competencies_swiper_04"/>
                </swiper-slide>
                <swiper-slide >
                    <img class="swiper-img" src="../../../assets/images/competencies_swiper_11.jpg" alt="competencies_swiper_11"/>
                </swiper-slide>
<!--                <div class="swiper-pagination" slot="pagination"></div>-->
            </swiper>
            <div class="swiper-button-prev swiper-button-prev-1 swiper-button-black"></div>
            <div class="swiper-button-next swiper-button-next-1 swiper-button-black"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CompetenciesOurPeople',
        data () {
            return {
                swiperOptions: {
                    slidesPerView : 3,
                    spaceBetween: 70,
                    loop: true,
                    speed: 500,
                    prevButton:'.swiper-button-prev-1',
                    nextButton:'.swiper-button-next-1',
                    observer: true, // 修改swiper自己或子元素时，自动初始化swiper
                    observeParents: true // 修改swiper的父元素时，自动初始化swiper
                },
            }
        },
        methods: {
            switchWidth () {
                const cW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
                // console.log(this.cW)
                if (cW <= 750) {
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

<style scoped>

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
    .animate .title {
        animation: opacityIn .5s linear forwards;
    }
    .animate .title-cn {
        animation: opacityIn .5s .5s linear forwards;
    }
    .animate .p {
        animation: opacityIn .5s .7s linear forwards;
    }
    .animate .wrapper {
        animation: opacityIn .5s 1s linear forwards;
    }


</style>
<style lang="scss" scoped>
    @import '~styles/varibles';
    @import '~styles/common';
    .people-box {
        margin-top: 13rem;
    }
    .title {
        text-align: center;
        opacity: 0;
    }
    .title-cn {
        margin: 1.2rem 0 5rem 0;
        text-align: center;
        letter-spacing: 1rem;
        opacity: 0;
    }
    .p {
        margin: 0 auto 5rem;
        width: 80%;
        text-align: center;
        text-indent: 2rem;
        line-height: 1.6;
        @include textJustify;
        opacity: 0;
    }
    .wrapper {
        position: relative;
        margin: 0 auto;
        width: 85%;
        opacity: 0;
    }
    .swiper-img {
        width: 100%;
    }
</style>
<style scoped>
    @media screen and (max-width: 750px) {
        .people-box {
            margin-top: 5rem;
        }
        .title {
            margin: 0 0 0 5%;
            text-align: left;
        }
        .title-cn {
            margin: 1.2rem 0 1rem 5%;
            text-align: left;
        }
        .p {
            margin: 3rem auto 5rem;
            width: 90%;
        }
        .wrapper >>> .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
            left: -5%;
        }
        .wrapper >>> .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
            right: -5%;
        }
        .wrapper >>> .swiper-button-prev, .swiper-button-next {
            width: 13px;
            height: 28px;
            background-size: contain;
        }
        .wrapper >>> .swiper-container {
            padding: 0 0;
        }
        .wrapper >>> .swiper-slide-next {
            transform: scale(1);
        }
    }
</style>