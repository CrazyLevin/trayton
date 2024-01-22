<template>
    <div class="people-box">
        <h2 class="title AvantGarde">OUR PEOPLE</h2>
        <h3 class="title-cn YaSiRegular">我们的员工</h3>
        <p class="p YaSiRegular">为特雷通工作，我们感到非常自豪，我们培育了高品质和高度责任感的企业文化。在特雷通，每一个人关注并承担提高产品品质、降低成本和高效生产的责任。通过我们国际化的团队中凝聚起的独特实践经验，我们共同创建了一个拥有可持续发展能力和竞争力的特雷通。我们有共同的热情，对客户的需求、对地球、对员工有深切的关怀。我们独特的业务管理模式让每个人都参与其中——在一个非常扁平的组织中，每个人都深知自己的目标和原则，并深感自身是公司成功的一部分。</p>
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
                    <img class="swiper-img" src="../../../assets/images/competencies_swiper_12.jpg" alt="competencies_swiper_08"/>
                </swiper-slide>
                <swiper-slide >
                    <img class="swiper-img" src="../../../assets/images/competencies_swiper_13.jpg" alt="competencies_swiper_08"/>
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
        margin: 1.2rem 0 1rem 0;
        text-align: center;
        letter-spacing: 1rem;
        opacity: 0;
    }
    .p {
        margin: 0 auto 5rem;
        width: 650px;
        text-align: center;
        text-indent: 2rem;
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