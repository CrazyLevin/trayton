<template>
    <div class="riceAndDesign">
        <h2 class="title AvantGarde">RICE CULTURE & 4D DESIGN</h2>
        <h3 class="title-cn YaSiRegular"></h3>
        <p class="title-under p AvantGarde">Trayton Group is an economic organization working with people, products, capitals, factories, franchised stores, target markets, ideas and many other things. For</p>
        <p class="title-under p AvantGarde">sure, people come first in the range.</p>
        <p class="title-under p AvantGarde">RICE culture builds our core values and guides us on how to think and what to be.</p>
        <p class="title-under p AvantGarde">Four-dimensional design is a way through which we understand all the products around us.</p>
        <p class="title-under p AvantGarde">While values guide the soft part of the world, namely our thoughts and actions,</p>
        <p class="title-under p AvantGarde">four-dimensional design directs the hard part of the world, i.e. all things around us.</p>
        <p class="title-under p AvantGarde">They are actually interwoven. The four core values can be understood as the foundation of the four-dimensional design, and vice versa.</p>
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
    .p {
        line-height: 1.6;
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
    @media screen and (max-width: 1440px) {
        .title-under {
            font-size: 12px;
        }
    }
    @media screen and (max-width: 750px) {
        .riceAndDesign {
            margin: 0 auto 0;
        }
    }

</style>