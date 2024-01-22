<template>
    <div class="menu">
        <ul class="menu-ul">
            <li>
                <div class="close-box a1" @click="close">
                    <svg class="close" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 27.5 27.5"><defs><path id="a" d="M0 0h27.5v27.5H0z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="none" stroke="#040000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M26.5 1L1 26.5M1 1l25.5 25.5L1 1z"/></svg>
                    <span class="line"></span>
                </div>
            </li>
            <li>
                <router-link class="link a2" to="/AboutUsEn">
                    <h2 class="YaSiBlank"></h2>
                    <h3 class="AvantGarde">About Us</h3>
                </router-link>
            </li>
            <li>
                <router-link class="link a3" to="/CompetenciesEn">
                    <h2 class="YaSiBlank"></h2>
                    <h3 class="AvantGarde">Competencies</h3>
                </router-link>
            </li>
            <li>
                <router-link class="link a4" to="/OverViewEn">
                    <h2 class="YaSiBlank"></h2>
                    <h3 class="AvantGarde">Business Overview</h3>
                </router-link>
            </li>
            <li>
                <router-link class="link margin a5" to="/csrEn">
                    <h2 class="YaSiBlank"></h2>
                    <h3 class="AvantGarde">
                        Corporation Social<br>
                        Responsibility
                    </h3>
                </router-link>
            </li>
            <li>
                <router-link class="link a6" to="/ContactUsEn">
                    <h2 class="YaSiBlank"></h2>
                    <h3 class="AvantGarde">Contact Us</h3>
                </router-link>
            </li>
            <li class="link">
                <div class="language-mobile a7">
                    <router-link class="link mobile-link AvantGarde" to="/">
                        中文
                    </router-link>
                    <span class="link-line">|</span>
                    <a class="link mobile-link AvantGarde" href="javascript:">
                        ENGLISH
                    </a>
                </div>
            </li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: 'PublicNav',
        methods: {
            // 传递给父组件
            close () {
                this.$emit('change')
            }
        }
    }
</script>

<style lang="scss" scoped>
.menu {
    z-index: -1;
    position: fixed;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff;
    width: 0;
}
.menu-ul {
    display: flex;
    justify-content: space-between;
    height: 90%;
    width: 100%;
}
.menu-ul li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14.2%;
    text-align: center;
}
.menu-ul h2 {
    font-size: 2.5rem;
    font-weight: bold;
}
.menu-ul h3 {
    margin-top: 11%;
    font-size: 2rem;
}
.link {
    color: #323232;
    /*transition: .5s linear ;*/
}
.link:hover {
    color: #ff7e00;
}
.margin {
    margin-top: 11%;
}
.close-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.close {
    width: 15%;
}
.line {
    display: inline-block;
    margin-left: 11%;
    width: 35%;
    border-bottom: 1px solid #000;
}
.animate {
    z-index: 1;
    animation: open .5s linear forwards;
}
.close-animate {
    width: 100%;
    animation: close .5s .8s linear forwards;
}
.language-mobile {
    display: none;
}
@for $i from 1 through 7
{
    .a#{$i}
    {
        opacity: 0;
    }
}
@for $i from 1 through 7
{
    .animate .a#{$i}
    {
        animation: opacityIn .5s #{500 + 50 * $i}ms linear forwards;
    }
}
.animate .menu-ul li {
    border-left: 1px solid #d4d4d4;
}
.close-animate .menu-ul li {
    border-left: 1px solid #d4d4d4;
}

@for $i from 1 through 7
{
    .close-animate .a#{$i}
    {
        opacity: 1;
    }
}
@for $i from 1 through 7
{
    .close-animate .a#{$i}
    {
        animation: opacityOut #{500 - 50 * $i}ms linear forwards;
    }
}
@media screen and (max-width: 1440px) {
    .menu-ul h2 {
        font-size: 2.5 * .8rem;
    }
    .menu-ul h3 {
        font-size: 2 * .8rem;
    }
}
@media screen and (max-width: 1024px) {
    .language-mobile {
        display: block;
    }
    .menu-ul {
        display: block;
    }
    .menu-ul h2 {
        font-size: 18px;
    }
    .menu-ul h3 {
        font-size: 12px;
    }
    .menu-ul li {
        width: auto;
        height: 80px;
        border-top: 1px solid #d4d4d4;
    }
    .margin {
        margin-top: 0;
    }
    .close {
        width: 28px;
    }
    .line {
        display: none;
        height: 50px;
        width: 0;
        border-left: 1px solid #000;
    }
    .link-line {
        padding: 0 10px;
        color: #000;
    }
}
@media screen and (max-width: 500px) {
    .menu-ul {
        height: 100vh;
    }
    .menu-ul li {
        height: 60px;
    }
    .menu-ul h2 {
        font-size: 14px;
    }
    .menu-ul h3 {
        margin-top: .5rem;
    }
    .close {
        width: 20px;
    }
}
</style>