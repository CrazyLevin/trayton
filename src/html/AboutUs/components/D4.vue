<template>
    <div class="riceAndDesign">
        <h2 class="title AvantGarde">RICE CULTURE & 4D DESIGN</h2>
        <h3 class="title-cn YaSiRegular">大米文化和四维设计</h3>
        <p class="title-under p YaSiRegular">特雷通作为一家集团，它是一个包含着人、产品、资金、工厂、专卖店、目标市场、想法以及其他很多事物的组织。当然，首先且最为重要的是人。</p>
        <p class="title-under p YaSiRegular">RICE大米文化是我们的核心价值观，它指导了我们的思考方式及我们要成为什么。</p>
        <p class="title-under p YaSiRegular">四维设计是理解我们周围所有产品的一种方式，一种如何看待我们生产产品的方式。</p>
        <p class="title-under p YaSiRegular">价值观是指导着这个“软性”世界——我们的想法和行为。</p>
        <p class="title-under p YaSiRegular">四维设计指导着这个“硬性”世界——我们周围的所有事物。</p>
        <p class="title-under p YaSiRegular">它们实际上是联系在一起的，你可以把我们的4个核心价值观作为四维设计的基础来理解，反之亦然。</p>
    </div>
</template>

<script>
    export default {
        name: 'AboutUsDesign'
    }
</script>

<style lang="scss" scoped>
    @import '~styles/varibles';
    @import '~styles/common';
    .riceAndDesign {
        margin: 13rem auto 0;
        width: 90%;
    }
    .title {
        margin: 0 0 0 0;
        opacity: 0;
    }
    .title-cn {
        margin: 1rem 0 5rem 0;
        letter-spacing: 1rem;
        opacity: 0;
    }
    .title-under {
        opacity: 0;
    }
    .animate .title {
        animation: fadeInUp .3s linear forwards;
    }
    .animate .title-cn {
        animation: fadeInUp .3s .3s linear forwards;
    }
    .animate .title-under {
        animation: opacityIn .3s .6s linear forwards;
    }

    @media screen and (max-width: 750px) {
        .riceAndDesign {
            margin: 0 auto 0;
        }
    }

</style>