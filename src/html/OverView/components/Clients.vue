<template>
    <div class="clients">
        <h2 class="title AvantGarde">OUR CLIENTS</h2>
        <h3 class="title-cn YaSiRegular">我们的客户</h3>
        <div class="wrapper">
            <swiper ref="mySwiper" :options="swiperOptions" >
                <swiper-slide >
                    <img class="swiper-img" src="../../../assets/images/clients_img_01.jpg" alt="clients_img_01"/>
                </swiper-slide>
                <swiper-slide >
                    <img class="swiper-img swiper-img-pc" src="../../../assets/images/clients_img_02.jpg" alt="clients_img_02"/>
                </swiper-slide>
            </swiper>
            <img v-if="icon" class="icon" src="../../../assets/images/client_icon_01.png" alt="client_icon"/>
            <img v-if="!icon" class="icon" src="../../../assets/images/client_icon_02.png" alt="client_icon"/>
            <!--                    <div class="swiper-pagination" slot="pagination"></div>-->
            <div class="swiper-button-prev swiper-button-prev-1 swiper-button-black"></div>
            <div class="swiper-button-next swiper-button-next-1 swiper-button-black"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OverViewClients',
        data () {
            return {
                icon: true,
                swiperOptions: {
                    prevButton:'.swiper-button-prev-1',
                    nextButton:'.swiper-button-next-1',
                    speed: 1000,
                    onSlideChangeEnd: (swiper) => {
                        // console.log(swiper.activeIndex)
                        switch(swiper.activeIndex) {
                            case 0:
                                this.icon = true
                                break;
                            case 1:
                                this.icon = false
                                break;
                        }
                    }
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '~styles/varibles';
    @import '~styles/common';
    .clients {
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
    .wrapper {
        position: relative;
        margin: 0 auto 17rem;
        width: 80%;
        border: 1px solid $e2;
        opacity: 0;
    }
    .icon {
        position: absolute;
        top: 9%;
        left: -0.8%;
        width: 29%;
        z-index: 1;
    }
</style>
<style scoped>

    .wrapper >>> .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
        /*top: 112%;*/
        right: -5%;
    }
    .wrapper >>> .swiper-button-prev.swiper-button-black, .swiper-container-rtl .swiper-button-next.swiper-button-black {
        /*top: 112%;*/
        left: -5%;
    }
    .swiper-img {
        width: 100%;
    }
    .animate .title {
        animation: fadeInUp .3s linear forwards;
    }
    .animate .title-cn {
        animation: fadeInUp .3s .3s linear forwards;
    }
    .animate .wrapper {
        animation: opacityIn .3s .6s linear forwards;
    }
    @media screen and (max-width: 750px) {
        .wrapper {
            margin: 0 auto 5rem;
        }
    }
    @media screen and (max-width: 500px) {

        .clients {
            margin-top: 5rem;
        }
        .title-cn {
            margin: 1rem 0 2rem 5%;
        }
        .wrapper {
            width: 90%;
        }
        .wrapper >>> .swiper-button-prev, .swiper-button-next {
            width: 13px;
            height: 28px;
            background-size: contain;
        }
    }
</style>