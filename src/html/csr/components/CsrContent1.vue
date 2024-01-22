<template>
    <div class="content-1">
        <div class="title-banner">
            <img class="title-banner-img" src="../../../assets/images/csr_banner_01.jpg" alt="csr_banner_01"/>
            <img class="title-banner-img-mobile" src="../../../assets/images/csr_banner_01_mobile.jpg" alt="csr_banner_mobile"/>
            <div class="title-box">
                <h2 class="csr-title AvantGarde">
                    SUSTAINABLE DEVELOPMENT
                </h2>
                <h3 class="csr-title-cn YaSiRegular">可持续发展</h3>
            </div>
        </div>
        <ul class="content-1-list">
            <li class="a1">
                <div class="content-1-img-box ">
                    <img class="content-1-img" src="../../../assets/images/csr_logo_01.png" alt="csr_logo_01"/>
<!--                    <div class="content-1-img"></div>-->
                </div>
                <div class="content-1-inner">
                    <h3 class="content-1-h3 YaSiRegular">联合国全球盟约</h3>
                    <p class="content-1-p p YaSiRegular">我们是最早加入联合国全球盟约的中国企业之一，我们积极履行联合国全球盟约的使命，结合企业自身业务推动变革，旨在创造一个可持续，包容的全球经济环境，并与其它来自世界各地的8375家企业一起，福泽大众、社区和市场。</p>
                </div>
            </li>
            <li class="a2">
                <div class="content-1-img-box ">
                    <img class="content-1-img" src="../../../assets/images/csr_logo_02.png" alt="csr_logo_02"/>
                </div>
                <div class="content-1-inner">
                    <h3 class="content-1-h3 YaSiRegular">节能减排</h3>
                    <p class="content-1-p p YaSiRegular">我们已经在嘉善工厂屋顶上安装了 750 千瓦的太阳能电池板，太阳能电力消耗约占我们主要车间总耗电量的35% 左右。我们还将继续扩大安装面积，在未来几年争取整个嘉善工厂的耗电全部由太阳能供能。</p>
                </div>
            </li>
            <li class="a3">
                <div class="content-1-img-box ">
                    <img class="content-1-img" src="../../../assets/images/csr_logo_03.png" alt="csr_logo_03"/>
                </div>
                <div class="content-1-inner">
                    <h3 class="content-1-h3 YaSiRegular">FSC®（森林管理委员会）</h3>
                    <p class="content-1-p p YaSiRegular">FSC® 的职责，涵盖关爱和保护森林，以及赖之以生存的物种，维护原住民权益，确保森林工作者的安全，等等。特雷通集团使用的木材原料来自于被尽责管理的森林，从加强标准到人员赋能，我们投入了大量工作，以支持和配合森林管理，我们为此自豪！</p>
                </div>
            </li>
            <li class="a4">
                <div class="content-1-img-box">
                    <img class="content-1-img" src="../../../assets/images/csr_logo_04.png" alt="csr_logo_04"/>
                </div>
                <div class="content-1-inner">
                    <h3 class="content-1-h3 YaSiRegular">皮革工作小组</h3>
                    <p class="content-1-p p YaSiRegular">特雷通和 Simon Li 是皮革工作小组成员中屈指可数的家具品牌之一。这种多方利益小组成立的目的，是健全和实施一项共同协议，以评估皮革工厂是否达到环保要求，是否具备制革能力，促进皮革行业的可持续发展，和良好的商业运行环境。</p>
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
    }
    .content-1-p {
        font-size: 12px;
        @include textJustify;
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