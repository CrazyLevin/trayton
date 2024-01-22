<template>
    <router-link tag="div" to="/ContactUs" class="contact">
        <div class="left">
            <div class="left-inner">
                <h2 class="title AvantGarde">CONTACT US</h2>
                <h3 class="title-cn YaSiRegular">联系我们</h3>
            </div>
        </div>
        <div class="right">
            <ul class="home-contact-ul AvantGarde">
                <li>Shanghai Trayton Furniture Co., Ltd. </li>
                <li>Trayton Furniture (Jiaxing) Co., Ltd. </li>
                <li>Simon Li Concept Store </li>
                <li>Simon Li Brand Flagship Store </li>
                <li>Jiaxing Motion Furniture Co., Ltd.  </li>
                <li>Trayton Furniture (Hongkong) Co., Ltd. </li>
                <li class="AvantGarde">Trayton America lnc. </li>
            </ul>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: 'HomeContact'
    }
</script>

<style lang="scss" scoped>
    @import '~styles/varibles';
    .contact {
        margin: 16rem 0 20rem 0;
        display: flex;
        cursor: pointer;
        opacity: 0;
    }
    .left {
        display: flex;
        /*justify-content: center;*/
        width: 33%;
    }
    .right {
        width: 67%;
    }
    .left-inner {
        margin-left: 15%;
    }
    .home-contact-ul {
        display: flex;
        flex-wrap: wrap;
    }
    .home-contact-ul li {
        font-size: 14px;
    }
    .home-contact-ul li:nth-of-type(1) {
        width: 27%;
    }
    .home-contact-ul li:nth-of-type(2) {
        width: 29%;
    }
    .home-contact-ul li:nth-of-type(3) {
        width: 18%;
    }
    .home-contact-ul li:nth-of-type(4) {
        width: 21%;
    }
    .home-contact-ul li:nth-of-type(5) {
        width: 27%;
    }
    .home-contact-ul li:nth-of-type(6) {
        width: 29%;
    }
    .home-contact-ul li:nth-of-type(7) {
        width: 20%;
    }

    .home-contact-ul li:nth-of-type(n+5) {
        margin: 3% 0 0 0;
    }
    .contact-img {
        display: block;
        margin: 0 auto 0;
        width: 52%;
    }
    /*.title {*/
    /*    font-size: 3.8rem;*/
    /*}*/
    .title-cn {
        margin: 1rem 0 0 0;
        letter-spacing: 1rem;
    }
    .animate {
        animation: opacityIn 1s linear forwards;
    }

    @media screen and (max-width: 1440px) {
        .contact {
            margin: 12rem 0 20rem 0;
        }
        .home-contact-ul li {
            font-size: 12px;
        }
    }
    @media screen and (max-width: 1100px) {
        .contact {
            display: block;
        }
        .right {
            margin: 2rem auto 0;
            width: 90%;
        }
        .home-contact-ul {
            margin-top: 4rem;
            display: block;
        }
        .right .home-contact-ul li {
            margin-top: 2rem;
            width: auto;
            font-weight: normal;
        }
        .left {
            width: auto;
        }
        .left-inner {
            margin-left: 5%;
        }
    }
    @media screen and (max-width: 750px) {
        .contact {
            margin: 5rem 0 10rem 0;
        }
    }
    @media screen and (max-width: 500px) {
        .right .home-contact-ul li {
            font-size: 12px;
        }
    }
</style>