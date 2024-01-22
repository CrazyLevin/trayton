<template>
    <div class="home-ourQuality-box">
        <h2 class="title AvantGarde">OUR QUALITY</h2>
        <h3 class="title-cn YaSiRegular">我们的品质</h3>
        <div class="ourQuality-box">
            <img class="ourQuality-img" src="../../../assets/images/ourQuality_img.jpg" alt=""/>
            <div class="ourQuality-p-box">
                <p class="ourQuality-p p YaSiRegular">专注细节，创造出行业内技术革新、风格新颖的面料缝纫工艺及款式，是我们产品的一大关键特色，也是品牌始终引以为豪的特点。 <br class="br1024">持续不断的业务改进，促成了最终各类高标准的达成。我们一贯保持优质的行业内高品质要求，客诉率远低于 0.5%。</p>
                <router-link to="/Competencies?id=1" class="ourQuality-read AvantGarde">
                    READ MORE
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeQuality'
}
</script>

<style lang="scss" scoped>
    @import '~styles/varibles';
    @import '~styles/common';
    .home-ourQuality-box {
        margin-top: 13rem;
        opacity: 0;
    }
    .title {
        text-align: center;
    }
    .title-cn {
        margin: 1.5rem 0 5rem 0;
        text-align: center;
        letter-spacing: 1rem;
    }
    .home-ourQuality {
        display: block;
        margin: 13rem auto 6rem;
        width: 20%;
    }
    .ourQuality-img {
        display: block;
        margin: 0 auto 0;
        width: 90%;
    }
    .ourQuality-box {
        /*position: relative;*/
    }
    .ourQuality-p-box {
        position: relative;
        margin: -4% auto 0;
        padding: 0 0 5% 0;
        width: 80%;
        height: 45%;
        color: $greyColor;
        text-align: center;
        background: #fff;
        border: 1px solid $borderColor;
    }
    .ourQuality-p {
        margin: 7% auto 0;
        width: 87.2rem;
        text-align: center;
    }
    .ourQuality-read {
        display: inline-block;
        margin: 5% auto 0;
        color: #953b44;
        padding-bottom: 5px;
        border-bottom: 1px solid #953b44;
    }
    .animate {
        animation: opacityIn 1s linear forwards;
    }
    @media screen and (max-width: 1024px) {
        .home-ourQuality-box {
            margin-top: 9.2rem;
        }
        .ourQuality-img {
            width: 100%;
        }
        .ourQuality-p-box {
            margin: -13% auto 0;
            width: 90%;
        }
        .ourQuality-p {
            width: 70%;
        }
    }
    @media screen and (max-width: 750px) {
        .ourQuality-read {
            border-bottom: none;
        }
    }
    @media screen and (max-width: 500px) {
        .home-ourQuality-box {
            margin-top: 5rem;
        }
    }
</style>



