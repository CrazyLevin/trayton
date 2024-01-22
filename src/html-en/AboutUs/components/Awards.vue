<template>
    <div class="awards">
        <h2 class="title AvantGarde">QUALIFICATION & AWARDS</h2>
        <h3 class="title-cn YaSiBlank"></h3>
        <div class="awards-inner">
            <ul class="awards-ul">
                <li class="a1">
                    <div class="img-box">
                        <img src="../../../assets/images/awards_01.png" alt="awards_01"/>
                    </div>
                    <div class="title-box">
                        <div class="title-box-inner">
                            <h3 class="awards-h3 AvantGarde">ISO9001</h3>
                            <p class="awards-p YaSiBlank"></p>
                        </div>
                    </div>
                </li>
                <li class="a2">
                    <div class="img-box">
                        <img src="../../../assets/images/awards_02.png" alt="awards_02"/>
                    </div>
                    <div class="title-box">
                        <div class="title-box-inner">
                            <h3 class="awards-h3 AvantGarde">CERTIFICATE OF COMPLAINCE</h3>
                            <p class="awards-p YaSiBlank"></p>
                        </div>
                    </div>
                </li>
                <li class="a3">
                    <div class="img-box">
                        <img src="../../../assets/images/awards_03.jpg" alt="awards_03"/>
                    </div>
                    <div class="title-box">
                        <div class="title-box-inner">
                            <h3 class="awards-h3 AvantGarde">ZHEJIANG MADE</h3>
                            <p class="awards-p YaSiBlank"></p>
                        </div>
                    </div>
                </li>
                <li class="a4">
                    <div class="img-box">
                        <img src="../../../assets/images/awards_04.jpg" alt="awards_04"/>
                    </div>
                    <div class="title-box">
                        <div class="title-box-inner">
                            <h3 class="awards-h3 AvantGarde">BLC LABORATORY ACCREDITATION</h3>
                            <p class="awards-p YaSiBlank"></p>
                        </div>
                    </div>
                </li>
                <li class="a5">
                    <div class="img-box">
                        <img src="../../../assets/images/awards_05.png" alt="awards_05"/>
                    </div>
                    <div class="title-box">
                        <div class="title-box-inner">
                            <h3 class="awards-h3 AvantGarde">OUTSTANDING CONTRIBUTION AWARD OF HOME RETAIL GROUP</h3>
                            <p class="awards-p YaSiBlank"></p>
                        </div>
                    </div>
                </li>
                <li class="a6">
                    <div class="img-box">
                        <img src="../../../assets/images/awards_06.jpg" alt="awards_06"/>
                    </div>
                    <div class="title-box">
                        <div class="title-box-inner">
                            <h3 class="awards-h3 AvantGarde">THE MOST SOCIALLY RESPONSIBLE COMPANIES OF THE YEAR BY TENCENT</h3>
                            <p class="awards-p YaSiBlank"></p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AboutUsAwards'
    }
</script>

<style lang="scss" scoped>
    @import '~styles/varibles';
    @import '~styles/common';
    .awards {
        margin: 13rem 0 0 0;
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
    .awards-ul {
        display: flex;
        flex-wrap: wrap;
        margin: 0 0 0 10%;
    }
    .awards-inner {
        margin: 0 auto;
        width: 90%;
        padding-bottom: 8rem;
        border-top: 1px solid #e2e2e2;
        border-bottom: 1px solid #e2e2e2;
    }
    .awards-inner li {
        display: flex;
        margin: 6rem 0 0 0;
        width: 48%;
    }
    .img-box {
        width: 80px;
    }
    .img-box img {
        width: 100%;
    }
    .title-box {
        display: flex;
        align-items: center;
        margin-left: 20px;
        width: 79%;
    }
    .awards-h3 {
        font-size: $titleFontsSize24;
    }
    .awards-p {
        margin-top: 1rem;
        font-size: $titleCnFontSize18;
        color: #888383;
    }
    @for $i from 1 through 6
    {
        .a#{$i}
        {
            opacity: 0;
        }
    }
    .animate .title {
        animation: fadeInUp .3s linear forwards;
    }
    .animate .title-cn {
        animation: fadeInUp .3s .3s linear forwards;
    }
    @for $i from 1 through 6
    {
        .animate .a#{$i}
        {
            animation: opacityIn 1s #{700 + 200 * $i}ms linear forwards;
        }
    }
    @media screen and (max-width: 1440px) {
        .awards-h3 {
            font-size: $titleFontsSize20;
        }
    }
    @media screen and (max-width: 750px) {

        .awards {
            margin: 5rem 0 0 0;
        }
        .awards-ul {
            display: block;
            margin: 0 auto;
            width: 90%;
        }
        .awards-inner {
            width: auto;
            border: none;
        }
        .awards-inner li {
            width: auto;
        }
        .img-box {
            width: 15%;
        }
    }
    @media screen and (max-width: 500px) {
        .awards-h3 {
            font-size: 1.6rem;
            line-height: 1.5;
        }
        .awards-p {
            font-size: 10px;
        }
    }
</style>