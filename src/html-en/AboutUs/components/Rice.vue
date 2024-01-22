<template>
    <div>
        <h2 class="child-title AvantGarde">RICE CULTURE</h2>
        <h3 class="child-title-cn YaSiBlank"></h3>
        <div class="rice">
            <div class="rice-inner">
                <div class="rice-inner-box a1">
                    <div class="rice-img-box">
                        <img class="rice-img" src="../../../assets/images/rice_01.png" alt="rice_01"/>
                    </div>
                    <p class="rice-p p AvantGarde">Shouldering responsibility shows our concerns about what we do. We do our best for the success of the company and for the future we share; we hold a sense of ownership on everything we do and well fulfill the tasks we are assigned; and we keep improving our products and operations so that customers are better served. We take pride in undertaking major responsibilities. Our responsibilities allow people to work together. We must work for the growth of the company, and to do this, each of us must be strongly responsible and aggressive.</p>
                </div>
                <div class="rice-inner-box a2">
                    <div class="rice-img-box">
                        <img class="rice-img" src="../../../assets/images/rice_02.png" alt="rice_02"/>
                    </div>
                    <p class="rice-p p AvantGarde">We should live an interesting life. An interesting life can be defined as constantly taking challenges, reshaping ourselves, including being innovative in our thinking and doing, our products and mode of working together.We need to make breakthroughs in all conditions and on everything; we need to challenge what we get accustomed to, and we need to work out new projects and set new goals. Only by innovation can we create our future.</p>
                </div>
            </div>
            <div class="rice-inner">
                <div class="rice-inner-box a3">
                    <div class="rice-img-box">
                        <img class="rice-img" src="../../../assets/images/rice_03.png" alt="rice_03"/>
                    </div>
                    <p class="rice-p p AvantGarde">We share the Planet. We know that we must work together to make it better since no one can reach our common goal individually. Success totally depends on our respect and friendliness for each of us, both in and out of the company. Self-respect and mutual respect build a background for our daily life and work.We respect everyone and feel proud of the great achievements resulted from different individuals and ideas. We appreciate everyone, giving them recognition along the process of growing. In Trayton, employees are seen as the engine that creates values and the cornerstone that holds up the company.</p>
                </div>
                <div class="rice-inner-box a4">
                    <div class="rice-img-box">
                        <img class="rice-img" src="../../../assets/images/rice_04.png" alt="rice_04"/>
                    </div>
                    <p class="rice-p p AvantGarde">We go all out for what we do. We think carefully before taking action and about the expected result. We would like to devote ourselves to work and the industry. Only by doing so can we feel it interesting and accomplish a good result.We run side by side with our competitors and keep in mind that only those customer-oriented players committed to providing valuable products and satisfactory services can be the biggest winners of the market and profit.If we are sensitive to the changing market, we can foresee or even walk ahead of customers' expectations, and take the lead in the market.</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'AboutUsRice'
    }
</script>

<style lang="scss" scoped>
    @import '~styles/varibles';
    @import '~styles/common';
    .rice {
        margin: 0 auto;
        width: 90%;
    }
    .child-title {
        margin: 5rem 0 0 5%;
        color: $designColor;
        opacity: 0;
    }
    .child-title-cn {
        margin: 1rem 0 5rem 5%;
        letter-spacing: 1rem;
        color: $designColor;
        opacity: 0;
    }
    .rice {
        background: #f4f4f4;
    }
    .rice-inner {
        display: flex;
        margin: 0 auto;
        width: 90%;
    }
    .rice-inner:nth-of-type(1) {
        border-bottom: 1px solid $designColor;
    }
    .rice-inner-box {
        display: flex;
        /*align-items: center;*/
        padding: 50px 0;
        width: 50%;
    }
    .rice-img-box {
        width: 20%;
    }
    .rice-img {
       width: 100%;
        /*flex-shrink: 0*/
    }
    .rice-p {
        margin-left: 20px;
        width: 68%;
        line-height: 1.6;
        @include textJustify;
    }
    @for $i from 1 through 4
    {
        .a#{$i}
        {
            opacity: 0;
        }
    }
    .animate .child-title {
        animation: fadeInUp .3s linear forwards;
    }
    .animate .child-title-cn {
        animation: fadeInUp .3s .3s linear forwards;
    }
    .animate .title-under {
        animation: opacityIn .3s .6s linear forwards;
    }
    @for $i from 1 through 4
    {
        .animate .a#{$i}
        {
            animation: opacityIn 1s #{1000 + 200 * $i}ms linear forwards;
        }
    }
    @media screen and (max-width: 1440px) {
        .p {
            font-size: 12px;
        }
    }
    @media screen and (max-width: 750px) {
        .rice {
            width: auto;
        }
        .rice-inner {
            display: block;
            width: auto;
        }
        .rice-inner-box {
            margin: 0 auto;
            padding: 30px 0;
            width: 90%;
        }
        .child-title-cn {
            margin: 1rem 0 2rem 5%;
        }


        .rice-inner:nth-of-type(1) {
            border-bottom: none;
        }

        .rice-p {
            width: 80;
        }
    }
    @media screen and (max-width: 500px) {

    }
</style>