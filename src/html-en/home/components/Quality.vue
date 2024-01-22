<template>
    <div class="home-ourQuality-box">
        <h2 class="title AvantGarde">OUR QUALITY</h2>
        <h3 class="title-cn YaSiRegular"></h3>
        <div class="ourQuality-box">
            <img class="ourQuality-img" src="../../../assets/images/ourQuality_img.jpg" alt=""/>
            <div class="ourQuality-p-box">
                <p class="ourQuality-p p AvantGarde">Attention to detail,creating the best skilled sewing treatments and the most stylish upholstery lines in the industry has always been one of our key<br class="br1024">
                    differentiators and remains an area in which we take great pride. We achieve these high standards through relentless and continuous improvement of tools, production layout,<br class="br1024">
                    process control, efficiency improvements, standardization, and automation. We have consistently maintained an industry-best quality level with a claim rate well below 0.5%</p>
                <router-link to="/CompetenciesEn?id=1" class="ourQuality-read AvantGarde">
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
        width: 95%;
        line-height: 1.6;
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
    @media screen and (max-width: 1353px) {
        .br1024 {
            display: none;
        }
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



