<template>
    <div class="content-1">
        <div class="title-banner">
            <img class="title-banner-img" src="../../../assets/images/csr_banner_01.jpg" alt="csr_banner_01"/>
            <img class="title-banner-img-mobile" src="../../../assets/images/csr_banner_01_mobile.jpg" alt="csr_banner_mobile"/>
            <div class="title-box">
                <h2 class="csr-title AvantGarde">
                    SUSTAINABLE DEVELOPMENT
                </h2>
                <h3 class="csr-title-cn YaSiRegular"></h3>
            </div>
        </div>
        <ul class="content-1-list">
            <li class="a1">
                <div class="content-1-img-box ">
                    <img class="content-1-img" src="../../../assets/images/csr_logo_01.png" alt="csr_logo_01"/>
<!--                    <div class="content-1-img"></div>-->
                </div>
                <div class="content-1-inner">
                    <h3 class="content-1-h3 AvantGarde">UN GLOBAL COMPACT</h3>
                    <p class="content-1-p p AvantGarde">We are one of the first Chinese companies to join the UN Global Compact, and we are actively implementing the mission of the UN Global Compact which works with business to transform our world, aiming to create a sustainable and inclusive global economy that delivers lasting benefits to all people, communities, and markets together with 8,375 other companies around the world. Trayton is actively implementing Global Compact's Ten Principles on human rights, labor, environment, and anti-corruption.  </p>
                </div>
            </li>
            <li class="a2">
                <div class="content-1-img-box ">
                    <img class="content-1-img" src="../../../assets/images/csr_logo_02.png" alt="csr_logo_02"/>
                </div>
                <div class="content-1-inner">
                    <h3 class="content-1-h3 AvantGarde">SOLAR POWERING TRAYTON</h3>
                    <p class="content-1-p p AvantGarde">To date, we have installed 750 kWp of solar panels on the roof of our Jiashan factory. This installation currently covers about 35% of our entire power consumption at our main factory. We will continue to enlarge the installation over the coming years as we work towards our target of meeting 100% of our power demand in the Jiashan factory by solar power within a couple of years. Apart from this we have other initiatives to limit our carbon footprint. </p>
                </div>
            </li>
            <li class="a3">
                <div class="content-1-img-box ">
                    <img class="content-1-img" src="../../../assets/images/csr_logo_03.png" alt="csr_logo_03"/>
                </div>
                <div class="content-1-inner">
                    <h3 class="content-1-h3 AvantGarde">FOREST STEWARDSHIP COUNCIL</h3>
                    <p class="content-1-p p AvantGarde">FSC® carries out such responsibilities as caring for and protecting the forests and the species that survive on forests, safeguarding the rights and interests of indigenous peoples and assuring the safety of foresters.<br> We are proud of great efforts including strengthened implementation of standards and staff empowerment that we have made in supporting forests management, which enables us to adopt wood materials from forests managed under due diligence.
                    </p>
                </div>
            </li>
            <li class="a4">
                <div class="content-1-img-box">
                    <img class="content-1-img" src="../../../assets/images/csr_logo_04.png" alt="csr_logo_04"/>
                </div>
                <div class="content-1-inner">
                    <h3 class="content-1-h3 AvantGarde">LEATHER WORKING GROUP</h3>
                    <p class="content-1-p p AvantGarde">Trayton / Simon Li® is one of less than a handful of furniture brands to be a member of the Leather Working Group. The objective of this multi-stakeholder group is to develop and maintain a protocol that assesses the environmental compliance and performance capabilities of tanners, and promote sustainable and appropriate environmental business practices within the leather industry. Among fellow members are responsible tanneries, practically all of the larger footwear companies, and a number of responsible major retailers.</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'CsrContent1'
    }
</script>

<style lang="scss" scoped>
    @import '~styles/varibles';
    @import '~styles/common';
    .title-banner {
        margin: 10rem 0 0 0;
        position: relative;
        opacity: 0;
    }
    .title-box {
        position: absolute;
        left: 3%;
        bottom: 8%;
        color: #fff;
    }
    .csr-title {
        opacity: 0;
    }
    .csr-title-cn {
        letter-spacing: .5rem;
        opacity: 0;
    }
    .title-banner-img {
        width: 100%;
    }
    .title-banner-img-mobile {
        display: none;
        width: 100%;
    }
    .content-1-list {
        margin: 0 0 70px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .content-1-list li {
        margin-top: 70px;
        display: flex;
        width: 45%;
    }
    .content-1-inner {
        margin-left: 20px;
        width: 80%;
    }
    .content-1-img-box {
        width: 15%;
    }
    .content-1-img {
        width: 100%;
    }
    .content-1-h3 {
        margin-bottom: 10px;
        font-weight: bold;
    }
    .content-1-p {
        font-size: 12px;
        line-height: 1.6;
        //@include textJustify;
    }
    @for $i from 1 through 6
    {
        .a#{$i}
        {
            opacity: 0;
        }
    }
    .animate .title-banner {
        animation: opacityIn .5s linear forwards;
    }
    .animate .csr-title {
        animation: fadeInUp .5s .5s linear forwards;
    }
    .animate .csr-title-cn {
        animation: fadeInUp .5s .7s linear forwards;
    }
    @for $i from 1 through 6
    {
        .animate .a#{$i}
        {
            animation: opacityIn 1s #{700 + 200 * $i}ms linear forwards;
        }
    }
    @media screen and (max-width: 750px) {
        .content-1-h3{
            margin-bottom: 5px;
        }
        .content-1-p{
            line-height: 1.4;
        }
        .content-1-list {
            display: block;
        }
        .content-1-list li {
            width: auto;
        }
        .title-banner-img {
            display: none;
        }
        .title-banner-img-mobile {
            display: block;
        }
    }
    @media screen and (max-width: 500px) {
        .title-box {
            left: 8%;
            bottom: 10%;
        }
        .title-banner {
            margin: 3rem 0 0 0;
        }
        .content-1-list {
            margin: 0 0 50px 0;
        }
        .content-1-list li {
            margin-top: 50px;
        }
    }
</style>