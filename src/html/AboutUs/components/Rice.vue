<template>
    <div>
        <h2 class="child-title AvantGarde">RICE CULTURE</h2>
        <h3 class="child-title-cn YaSiBlank">大米文化</h3>
        <div class="rice">
            <div class="rice-inner">
                <div class="rice-inner-box a1">
                    <div class="rice-img-box">
                        <img class="rice-img" src="../../../assets/images/rice_01.png" alt="rice_01"/>
                    </div>
                    <p class="rice-p p YaSiRegular">承担责任意味着我们关注我们所做的事。我们要为公司的成功和我们共同的未来竭尽全力。我们对所做的一切采取主人翁精神，出色地完成交付于我们的任务。我们要不断改进产品，改善经营以更好地服务客户。我们对能承担重大责任而感到自豪。我们的责任在于让所有人可以团结合作。我们必须使公司能够成长，要做到这一点，我们每个人都必须有强烈的责任感和进取心。</p>
                </div>
                <div class="rice-inner-box a2">
                    <div class="rice-img-box">
                        <img class="rice-img" src="../../../assets/images/rice_02.png" alt="rice_02"/>
                    </div>

                    <p class="rice-p p YaSiRegular">生活应该是有趣的。不断地挑战自我，重塑自我，包括不断革新我们的观念、我们的行为、我们的产品和共同工作的方式，让我们的生活更有乐趣。我们需要在我们身边的所有地方和所有事情上做出重大突破；我们要挑战在日常生活中已经习惯了的做事方式；我们需要新的项目和新的目标。创新是唯一能创造未来的方式。</p>
                </div>
            </div>
            <div class="rice-inner">
                <div class="rice-inner-box a3">
                    <div class="rice-img-box">
                        <img class="rice-img" src="../../../assets/images/rice_03.png" alt="rice_03"/>
                    </div>
                    <p class="rice-p p YaSiRegular">我们对自己所做的事全力以赴。我们斟酌自己的行动和所要创造的结果。我们愿意把自己投入到工作、投入到我们这个行业，只有当我们将自己投入到我们所做的工作中，工作才会变得有趣，结果也会是好的。我们在竞争激烈的业界生存，只有那些以客户为重，致力于提供有价值的产品和满意服务的公司，才能取得最大的市场和最大的利润。我们对于变化的市场的灵敏反应可以让我们预见甚至超越客户的期望，在市场上保持领先地位。</p>
                </div>
                <div class="rice-inner-box a4">
                    <div class="rice-img-box">
                        <img class="rice-img" src="../../../assets/images/rice_04.png" alt="rice_04"/>
                    </div>

                    <p class="rice-p p YaSiRegular">我们生活在同一个地球上，只有通过我们共同努力才能改善它，没有人能够靠个人的力量达成我们共同的目标。成功完全依赖于我们尊重和善待每一个人——不论是公司内部还是外部的人员。自尊和彼此间的尊重是日常工作生活的基础。我们尊重每个人，对来自不同个体和想法创造的重大成就感到骄傲。我们用认可和发展的眼光欣赏自己和他人。特雷通的员工是创造价值的引擎，是公司存在的基石。</p>
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